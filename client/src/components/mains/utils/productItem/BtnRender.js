import React from "react";

function BtnRender({ product, deleteProduct }) {


  return (
    <div className="row_btn">
      
        <button
          id="btn_buy"
          to="#!"
          onClick={() => deleteProduct(product._id, product.image.public_id)}
        >
          Delete
        </button>
    </div>
  );
}

export default BtnRender;
