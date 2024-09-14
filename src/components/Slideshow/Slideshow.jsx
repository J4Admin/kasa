import React, { useState } from "react";
import arrowLeft from "../../assets/icones/arrow-left.svg";
import arrowRight from "../../assets/icones/arrow-right.svg";
import "./Slideshow.scss";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        {images.length > 1 && (
          <>
            <div className="slideshow__button">
              <button className="slideshow__arrow__left" onClick={prevImage}>
                <img src={arrowLeft} alt="previous image" />
              </button>
              <button className="slideshow__arrow__right" onClick={nextImage}>
                <img src={arrowRight} alt="next image" />
              </button>
            </div>
            <div className="slideshow__counter">
              <span className="slideshow__counter__page">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}
        <div className="slideshow__slide">
          {images.length > 0 && (
            <img
              className="slideshow__image"
              src={images[currentIndex]}
              alt="Slideshow"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
