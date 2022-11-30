import React from "react";
import { useNavigate } from "react-router-dom";

import BtnRender from "./BtnRender";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${product._id}`);
  };

  return (
    <div className="product-card" >
      <div onClick={handleClick}>
        <img src={product.image.url} alt="" />

        <div className="product-box">
          {/* <h2 title={product.title}>{product.title}</h2> */}
          <p>{product.title}</p>
          <div className="bottom-product-card">
            <span className="product-card-price">${product.price}</span>
            <div className="product-card-sold">Đã bán {product.sold}</div>
          </div>
        </div>
      </div>
      {isAdmin && (
        <div style={{ cursor: "default" }}>
          <input
            type="checkbox"
            checked={product.checked}
            onChange={() => handleCheck(product._id)}
          />
          <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
      )}
    </div>
  );
}

export default ProductItem;
