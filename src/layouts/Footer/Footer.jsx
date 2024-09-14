import React from "react";
import "./Footer.scss";

function Footer() {
  const footerSrc = "src/assets/images/logo-footer.png";
  return (
    <footer className="footer">
      <div className="footer__background">
        <img className="footer__logo" alt="LOGO" src={footerSrc} />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
