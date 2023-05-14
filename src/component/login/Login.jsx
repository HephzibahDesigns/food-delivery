import React from "react";
import "./Login.css";
import LoginApp from "../../Food Asset/Login.png";

const Login = () => {
  return (
    <div className="app__login">
      <div className="app__login-content">
        <div className="app_login-border"></div>

        <h1 className="h2__pop">How the app works</h1>
      </div>

      <div className="app__login-acct">
        <img src={LoginApp} alt="account" />
        <div className="app__login-details">
          <p className="p__mont">Create an account</p>
          <h1 className="h1__mont">
            Create/login to an existing account to get started
          </h1>

          <p className="p__mont1 ">
            An account is created with your email and a desired password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
