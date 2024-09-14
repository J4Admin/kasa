import React from "react";
import CardsList from "../../data/CardData.json";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card() {
  return (
    <>
      {CardsList.map((cardItem, index) => (
        <div className="card" key={cardItem.id}>
          <Link
            className="card__link"
            to={`/housingPage/${cardItem.id}`}
            key={index}
          >
            <img
              className="card__image"
              src={cardItem.cover}
              alt={cardItem.title}
            />
            <h2 className="card__title">{cardItem.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Card;
