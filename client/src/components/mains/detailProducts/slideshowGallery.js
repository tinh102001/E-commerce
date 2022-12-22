import React, { useState, useEffect } from "react";

import "./slideshowGallery.css";
function SlideshowGallery({ props }) {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    let slides = document.getElementsByClassName("slideshow-gallery");
    let dots = document.getElementsByClassName("demo");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  });
  function plusSlides() {
    setSlideIndex(slideIndex + 1);
    if (slideIndex > props.length - 1) {
      setSlideIndex(1);
    }
  }

  function minusSlides() {
    setSlideIndex(slideIndex - 1);
    if (slideIndex < 2) {
      setSlideIndex(props.length);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }
  return (
    <div className="slideshow-gallery-container">
      {props.map((item, index) => {
        return (
          <div className="slideshow-gallery" key = {index}>
            <img
              src={item.url}
              alt=""
            />
          </div>
        );
      })}

      <button className="prev" onClick={() => minusSlides()}>
        ❮
      </button>
      <button className="next" onClick={() => plusSlides()}>
        ❯
      </button>

      <div className="slideshow-gallery-row">
      {props.map((item, index) => {
        return (
            <div className="slideshow-gallery-column" key={index}>
            <img
              className="demo cursor"
              src={item.url}
              onClick={() => currentSlide(index + 1)}
              alt=""
            />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default SlideshowGallery;
