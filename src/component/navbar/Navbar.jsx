import React from "react";
import "./Navbar.css";
import logo from "../../Food Asset/content logo light.png";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="food logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="a__mont">
          <a
            className={activeLink === "home" ? "active" : " "}
            onClick={() => setActiveLink("home")}
            href="#home"
          >
            Home
          </a>
        </li>

        <li className="a__mont">
          <a
            className={activeLink === "product" ? "active" : " "}
            onClick={() => setActiveLink("product")}
            href="#product"
          >
            Product
          </a>
        </li>

        <li className="a__mont">
          <a
            className={activeLink === "faq" ? "active" : " "}
            onClick={() => setActiveLink("faq")}
            href="#faq"
          >
            Faq
          </a>
        </li>

        <li className="a__mont">
          <a
            className={activeLink === "contact" ? "active" : " "}
            onClick={() => setActiveLink("contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu  */}
    </div>
  );
};

export default Navbar;
