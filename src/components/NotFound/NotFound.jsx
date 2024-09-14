import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text">
        <span className="notfound__text--ligne1">Oups! La page que</span>
        <span className="notfound__text--ligne2">vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
