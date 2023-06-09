import React from "react";
import "./Footer.css";
import logo from "../../Food Asset/content logo light.png";

import FooterIcons from "../footer/FooterIcons.js";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-content">
        <img src={logo} alt="food logo" />

        <div className="app__footer-icons">
          {FooterIcons.map((image, index) => (
            <img src={image} alt="footer icons" key={index} />
          ))}
        </div>

        <p className="app__footer-content-p">
          Copywright 2020 Bella Onojie.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
