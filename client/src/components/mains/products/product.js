import React, { useContext, useState } from "react";
import axios from "axios";

import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/productItem";
import Loading from "../utils/loading/Loading";
import Filter from "./Filter";
import LoadMore from "./LoadMore";
import "./product.css";

function Products() {
  const state = useContext(GlobalState);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const [products, setProducts] = state.productsAPI.products;

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const deleteProduct = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });

      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <>
      <Filter />

      {isAdmin && (
        <div className="delete-all">
          <span>Chọn tất cả</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Xóa tất cả</button>
        </div>
      )}
      <div className="products">
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck}/>;
        })}
      </div>


        <LoadMore />
        {/* {products.length === 0 && <Loading />} */}
    </>
  );
}

export default Products;
