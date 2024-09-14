import React from "react";
import "./Banner.scss";


function Banner({ imageSrc, bannerText, isHidden }) {
  const bannerTextClass = isHidden ? "hidden" : "banner__text";

  return (
    <div className="banner">
      <img className="banner__img" src={imageSrc} alt="Banner" />
      <p className={bannerTextClass}>{bannerText}</p>
    </div>
  );
}

export default Banner;
