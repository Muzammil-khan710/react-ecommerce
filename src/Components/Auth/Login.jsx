import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth-context";
import "./Auth.css";
import AuthBanner from "./AuthBanner";

const Login = () => {
  const { loginFunc } = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <section className="auth-wrapper">
      <AuthBanner />
      <div className="auth-container">
        <div className="auth-title">Log in</div>
        <form className="form">
          <label className="form-label">
            Enter your email
            <input
              className="form-input"
              type="text"
              value={userEmail}
              placeholder="name@mail.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <label className="form-label">
            Enter your password
            <input
              className="form-input"
              type="password"
              value={userPassword}
              placeholder="****"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
          <button
            className="auth-btn margin-top-sm"
            onClick={(e) => {
              loginFunc(e, userEmail, userPassword);
            }}
          >
            Submit
          </button>
        </form>
        <button
          className="auth-btn margin-top-sm"
          onClick={() => {
            setUserEmail("testuser@gmail.com");
            setUserPassword("testuser@123");
          }}
        >
          Guest Login
        </button>
        <Link className="margin-top-md auth-link" to="/Signup">
          Create a new account
        </Link>
      </div>
    </section>
  );
};

export { Login };
