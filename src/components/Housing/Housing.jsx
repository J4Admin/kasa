import React from "react";
import "./Housing.scss";
import Slideshow from "../Slideshow/Slideshow";

function Housing({
  images,
  title,
  location,
  hostName,
  hostPicture,
  tags,
  rating,
}) {
  const setStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-star ${index < rating ? "fa-solid" : "fa empty"}`}
      ></i>
    ));
  };
  return (
    <div className="housing">
      <Slideshow images={images} />
      <div className="housing__informations">
        <div className="housing__first__block">
          <h1 className="housing__title">{title}</h1>
          <h2 className="housing__location ">{location}</h2>
          <div className="housing__tag__list">
            {tags.map((tag) => (
              <span key={tag} className="housing__tag ">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="housing__second__block">
          <div className="housing__host__information">
            <h2 className="housing__host__name">{hostName}</h2>
            <img
              className="housing__host__picture"
              src={hostPicture}
              alt="host picture"
            />
          </div>
          <div className="housing__host__rating">{setStars(rating)}</div>
        </div>
      </div>
    </div>
  );
}

export default Housing;
