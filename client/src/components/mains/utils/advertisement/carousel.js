import React, { useState, useEffect } from "react";
import "./carousel.css";
const imagesAdvertiser = [
  "https://cf.shopee.vn/file/f6c506c151e0b0bc202110617698be6c_xxhdpi",
  "https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi",
  "https://cf.shopee.vn/file/1d453866aea0c6ece1f93c21653b9d6b_xxhdpi",
  "https://cf.shopee.vn/file/3b933ed02f4fc1bc44744333ae5dfb25_xxhdpi",
  "https://cf.shopee.vn/file/a3c362f0acc1599a0901a4a8b9c81953_xxhdpi",
  "https://cf.shopee.vn/file/c79d581302cb60a45108de18cdc8c480_xxhdpi",
  "https://cf.shopee.vn/file/7497f4916e9eb735ca7d5a66c0988026_xxhdpi",
  "https://cf.shopee.vn/file/0138407bdb9de1dfef0c50daea53b564_xxhdpi",
  "https://cf.shopee.vn/file/ed9685b4008d5c0db574f977e8635261_xxhdpi",
];
function AdCarousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides() {
    setSlideIndex(slideIndex + 1);
    if (slideIndex > imagesAdvertiser.length - 1) {
      setSlideIndex(1);
    }
  }

  function minusSlides() {
    setSlideIndex(slideIndex - 1);
    if (slideIndex < 2) {
      setSlideIndex(imagesAdvertiser.length);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    const intervalId = setInterval(() => {
      setSlideIndex(slideIndex + 1);
      if (slideIndex >= slides.length) {
        setSlideIndex(1);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      {imagesAdvertiser.map((image, index) => {
        return (
          <div className="mySlides fade" key={index}>
            <img src={image} alt="" />
          </div>
        );
      })}

      <button className="prev" onClick={() => minusSlides()}>
        ❮
      </button>
      <button className="next" onClick={() => plusSlides()}>
        ❯
      </button>
      <div className="dot-container">
        {imagesAdvertiser.map((image, index) => {
          return (
            <span
              className="dot"
              key={index}
              onClick={() => currentSlide(index + 1)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default AdCarousel;
