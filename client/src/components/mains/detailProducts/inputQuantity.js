import React from "react";

import "./inputQuantity.css"

function InputQuantity({props, stock}) {
  const [quantity, setQuantity] = props

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increment() {
    if (quantity < stock) {
      setQuantity(Number(quantity) + 1);
    }
  }

  function handleChange(event) {
    if (event.target.value > stock) {
      setQuantity(stock);
    } else {
      setQuantity(event.target.value);
    }
  }
  return (
    <div className="container-input-quantity">
      <button className="btn-quantity" type="button" onClick={decrement}>
        -
      </button>
      <input  className="form-control-quantity" type="text" value={quantity} onChange={handleChange} />
      <button className="btn-quantity" type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default InputQuantity;
