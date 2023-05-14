import React from "react";
import "./Checkout.css";
import Payment from "../../Food Asset/Payment.png";

const Checkout = () => {
  return (
    <div className="app__checkout">
      <div className="app__checkout-payment">
        <div className="app__checkout-payment-image">
          <img src={Payment} alt="account" />

          <div className="app__checkout-payment-details">
            <p className="p__mont">Checkout</p>
            <h1 className="h1__mont">
              When you done check out and get it delivered.
            </h1>

            <p className="p__mont1 ">
              When you done check out and get it delivered with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
