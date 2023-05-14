import React from "react";
import "./Header.css";
import foodHeader from "../../Food Asset/Header.png";
import foodApp from "../../Food Asset/Food.png";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-img">
        <img src={foodHeader} alt="header" />
      </div>

      <div className="app__header-content">
        <h3 className="h3__mont">Food app</h3>
        <h1 className="h1__pop">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="h__mont">Download the bella onoje’s food app now on</p>

        <div className="app__header-content-btn">
          <button type="submit" className="btn-red">
            Playstore
          </button>

          <button type="submit" className="btn-white">
            App store
          </button>
        </div>

        <div className="app__FoodImg">
          <img src={foodApp} alt="food 4 everyone" />
        </div>
      </div>
    </div>
  );
};

export default Header;
