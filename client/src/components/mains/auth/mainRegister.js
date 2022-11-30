import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./mainAuth.css";

function MainRegister() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      // window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-main">
        <form className="auth-form" onSubmit={registerSubmit}>
          <div className="title">Đăng kí</div>

          <input
            className="input-form"
            type="text"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />

          <input
            className="input-form"
            type="email"
            name="email"
            required
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            maxLength="128"
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            className="input-form"
            type="password"
            name="password"
            required
            placeholder="Mật khẩu"
            maxLength="16"
            value={user.password}
            onChange={onChangeInput}
          />

          <div className="row">
            <button className="btn-register" type="submit">
              Đăng kí
            </button>
            <div className="text">
              <div>Bạn đã có tài khoản?</div>
              <Link className="nav-login" to="/login">Đăng nhập</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainRegister;
