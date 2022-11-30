import React from "react";
import { useNavigate } from "react-router-dom";

import "./headerAuth.css";
import logo from '../../../images/logo-shopee.png';

function HeaderAuth({ type }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header-auth">
      <img className="logo" src={logo} width="150" height="50" alt="" onClick={handleClick}/>
      <h1 className="type">{type}</h1>
    </div>
  );
}

export default HeaderAuth;
