import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${product._id}`);
  };

  const editProduct = () => {
    navigate(`/edit_product/${product._id}`);
  };

  return (
    <div className="product-card">
      {isAdmin && (
        <input
          className="product-card-checkbox"
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        ></input>
      )}
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
        <div className="product-item-btn">
          <button
            className="product-item-btn-edit"
            onClick={() => editProduct(product._id)}
          >
            Edit
          </button>
          <button
            className="product-item-btn-delete"
            onClick={() => deleteProduct(product._id, product.image.public_id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
