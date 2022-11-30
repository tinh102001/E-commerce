import React from "react";

import "./buttonShopping.css";

function ButtonShopping({props}) {

    return (<div className="btn-shopping-container">
        <button className="btn1 btn-add-cart" onClick={props}>Thêm Vào Giỏ Hàng</button>
        <button className="btn1 btn-buy">Mua Ngay</button>
    </div>)
}

export default ButtonShopping;
