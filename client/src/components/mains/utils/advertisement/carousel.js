import React, { useEffect } from "react";
import "./carousel.css";

function AdCarousel() {

  useEffect(() => {
    var counter = 1;
    let id = setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > 9) {
        counter = 1;
      }
    }, 5000);
    return () => clearInterval(id);
  });

  return (
    <div className="carousel-container">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1"></input>
        <input type="radio" name="radio-btn" id="radio2"></input>
        <input type="radio" name="radio-btn" id="radio3"></input>
        <input type="radio" name="radio-btn" id="radio4"></input>
        <input type="radio" name="radio-btn" id="radio5"></input>
        <input type="radio" name="radio-btn" id="radio6"></input>
        <input type="radio" name="radio-btn" id="radio7"></input>
        <input type="radio" name="radio-btn" id="radio8"></input>
        <input type="radio" name="radio-btn" id="radio9"></input>

        <div className="slide first">
          <img
            src="https://cf.shopee.vn/file/f6c506c151e0b0bc202110617698be6c_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/1d453866aea0c6ece1f93c21653b9d6b_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/3b933ed02f4fc1bc44744333ae5dfb25_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/a3c362f0acc1599a0901a4a8b9c81953_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/c79d581302cb60a45108de18cdc8c480_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/7497f4916e9eb735ca7d5a66c0988026_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/0138407bdb9de1dfef0c50daea53b564_xxhdpi"
            alt=""
          ></img>
        </div>
        <div className="slide">
          <img
            src="https://cf.shopee.vn/file/ed9685b4008d5c0db574f977e8635261_xxhdpi"
            alt=""
          ></img>
        </div>

        <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
            <div className="auto-btn6"></div>
            <div className="auto-btn7"></div>
            <div className="auto-btn8"></div>
            <div className="auto-btn9"></div>
        </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
        <label htmlFor="radio5" className="manual-btn"></label>
        <label htmlFor="radio6" className="manual-btn"></label>
        <label htmlFor="radio7" className="manual-btn"></label>
        <label htmlFor="radio8" className="manual-btn"></label>
        <label htmlFor="radio9" className="manual-btn"></label>
      </div>
    </div>
  );
}

export default AdCarousel;
