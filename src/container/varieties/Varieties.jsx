import React from "react";
import "./Varieties.css";
import Delicious from "../../Food Asset/Delicious.png";

const Varieties = () => {
  return (
    <div className="app__varieties">
      <div className="app__varieties-explore">
        <div className="app__varieties-details">
          <p className="p__mont">Explore varieties</p>
          <h1 className="h1__mont">
            Shop for your favorites meal as e dey hot.
          </h1>

          <p className="p__mont1 ">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>

        <div className="app__varieties-content">
          <img src={Delicious} alt="delicious food" />
        </div>
      </div>
    </div>
  );
};

export default Varieties;
