import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        { email, password }
      );
      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("user-token", token);
      }
      setTimeout(() => {
        navigate("/profilePage");
      }, 500);
    } catch (error) {
      alert("Error Login!");
      console.log(error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1 className="main-heading">Welcome</h1>
        <h2 className="sub-heading">Sign In</h2>
        <form onSubmit={handleSubmit} className="web-form">
          <div className="input-fields">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email"
              required
            />
          </div>
          <div className="input-fields">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            <input
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form-button">Sign In</button>
        </form>
        <Link to="/signup">
          <p className="account-links"> Create a new account</p>
        </Link>
      </div>
    </>
  );
};

export default Signin;
