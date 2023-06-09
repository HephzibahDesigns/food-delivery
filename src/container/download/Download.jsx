import React from "react";
import "./Download.css";
import Hero from "../../Food Asset/Hero.png";

const Download = () => {
  return (
    <div className="app__download" id="contact">
      <div className="app__download-image">
        <img src={Hero} alt="app on playstore" />

        <div className="app__download-content">
          <h1 className="app__download-content-h1">Download the app now.</h1>

          <p className="app__download-content-p">
            Available on your favorite store. Start your premium experience now
          </p>

          <div className="app__download-content-btn">
            <button type="submit" className="btn-play">
              Playstore
            </button>

            <button type="submit" className="btn-app">
              App store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
