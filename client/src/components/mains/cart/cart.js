import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./cart.css";
import { GlobalState } from "../../../GlobalState";

const initialAddressState = {
  full_name: "John Doe",
  address_line_1: "1 Main St",
  admin_area_2: "San Jose",
  admin_area_1: "CA",
  postal_code: 95131,
  country_code: "US",
};
function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState(initialAddressState);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const addressChangeInput = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const paymentSubmit = async (e) => {
    e.preventDefault();
    try {
      const paymentID = Date.now();
      await axios.post(
        "/api/payment",
        { cart, paymentID, address },
        {
          headers: { Authorization: token },
        }
      );
      setCart([]);
      addToCart([]);
      alert("You have successfully placed an order.");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const [payment, setPayment] = useState(false);

  const toggleModal = () => {
    setPayment(!payment);
  };

  if (payment) {
    document.body.classList.add("active-payment");
  } else {
    document.body.classList.remove("active-payment");
  }
  // if(cart.length === 0) return <h2 style={{marginTop: "200px", textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>
  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="detail-cart" key={product._id}>
          <img src={product.image.url} alt="" />

          <div className="box-detail">
            <h2>{product.title}</h2>

            <h3>$ {product.price * product.quantity}</h3>

            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div>

          </div>
            <div className="delete" onClick={() => removeProduct(product._id)}>
              X
            </div>
        </div>
      ))}
      <div className="total" >
        <h3>Total: $ {total}</h3>
      </div>
      <button onClick={toggleModal} className="btn-payment">
        Buy
      </button>

      {payment && (
        <div className="payment-container">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="payment-content">
            <button className="close-payment-content" onClick={toggleModal}>
              X
            </button>
            <div className="total-cost">Total : {total}</div>
            <form className="payment-details" onSubmit={paymentSubmit}>
              <div className="row">
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  required
                  value={address.full_name}
                  onChange={addressChangeInput}
                />
              </div>
              <div className="row">
                <label htmlFor="address_line_1">Address Line 1</label>
                <input
                  type="text"
                  name="address_line_1"
                  id="address_line_1"
                  required
                  value={address.address_line_1}
                  onChange={addressChangeInput}
                />
              </div>
              <div className="row">
                <label htmlFor="admin_area_2">Admin Area 2</label>
                <input
                  type="text"
                  name="admin_area_2"
                  id="admin_area_2"
                  value={address.admin_area_2}
                  onChange={addressChangeInput}
                />
              </div>
              <div className="row">
                <label htmlFor="admin_area_1">Admin Area 1</label>
                <input
                  type="text"
                  name="admin_area_1"
                  id="admin_area_1"
                  value={address.admin_area_1}
                  onChange={addressChangeInput}
                />
              </div>
              <div className="row">
                <label htmlFor="postal_code">Postal Code</label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  value={address.postal_code}
                  onChange={addressChangeInput}
                />
              </div>
              <div className="row">
                <label htmlFor="country_code">Country Code</label>
                <input
                  type="text"
                  name="country_code"
                  id="country_code"
                  value={address.country_code}
                  onChange={addressChangeInput}
                />
              </div>
              <button className="pay" type="submit" disabled={total === 0}>
                Pay
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
