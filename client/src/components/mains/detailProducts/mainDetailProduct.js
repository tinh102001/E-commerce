import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

import ButtonShopping from "./buttonShopping";
import InputQuantity from "./inputQuantity";
import "./mainDetailProduct.css";

function MainDetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const quantity = state.userAPI.quantity;

  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;
  return (
    <>
      <div className="detail">
        <div className="detail-main">
          <div className="detail-img">
            <img src={detailProduct.imagesGallery[0].url} alt="" />
          </div>
          <div className="detail-selected">
            <span className="detail-title">{detailProduct.title}</span>
            <div className="detail-rate">
              <div className="detail-sold">
                <div>{detailProduct.sold}</div>
                <p>Đã bán</p>
              </div>
            </div>
            <div className="detail-price">
              <div className="price">$ {detailProduct.price}</div>
            </div>
            <InputQuantity props={quantity} stock={detailProduct.stock}></InputQuantity>
            <div >{detailProduct.content}</div>
            <ButtonShopping props={() => addCart(detailProduct, quantity[0])} ></ButtonShopping>
            <div>Số lượng trong kho: {detailProduct.stock}</div>
          </div>
        </div>
        <div className="detail-description">
          <div className="description">{detailProduct.description}</div>
        </div>
        {/* <div>
          {detailProduct.imagesGallery.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
        </div> */}
      </div>
    </>
  );
}

export default MainDetailProduct;
