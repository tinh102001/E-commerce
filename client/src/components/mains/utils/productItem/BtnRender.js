import React, { useContext } from "react";
import { GlobalState } from "../../../../GlobalState";

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;

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
