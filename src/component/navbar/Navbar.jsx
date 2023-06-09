import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Food Asset/content logo light.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [toggle, setToggle] = useState(true);

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
      <div className="app__navbar-mobile ">
        {toggle ? (
          <RxHamburgerMenu
            fontSize={27}
            color="000"
            onClick={() => {
              setToggle(false);
            }}
          />
        ) : (
          <div className="app__navbar-mobile-view scale-up-center">
            <MdClose
              fontSize={27}
              color="000"
              onClick={() => {
                setToggle(true);
              }}
            />

            <ul className="app__navbar-mobile-links">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
