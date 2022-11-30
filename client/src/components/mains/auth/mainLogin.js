import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./mainAuth.css";

function MainLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-main">
        <form className="auth-form" onSubmit={loginSubmit}>
          <div className="title">Đăng nhập</div>
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
            placeholder="Mật khẩu"
            maxLength="16"
            value={user.password}
            onChange={onChangeInput}
          />

          <div className="row">
            <button className="btn-login" type="submit">
              Đăng nhập
            </button>
            <div className="text">
              <div>Bạn mới biết đến Shopee?</div>
              <Link className="nav-register" to="/register">
                Đăng kí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainLogin;
