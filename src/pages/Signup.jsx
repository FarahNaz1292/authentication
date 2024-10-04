import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHashtag, faLock } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: fullName,
        password,
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );
      if (response?.data?.isOtpSend) {
        setIsOtpSend(true);
      }
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const data = {
        otp,
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isOtpSend ? (
        <div className="form-container">
          <h2 className="sub-heading">Verify Opt</h2>
          <form onSubmit={handleOtp}>
            <FontAwesomeIcon icon={faHashtag} />
            <input
              type="text"
              placeholder="Enter Otp"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="form-button">Click to verify</button>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h1 className="main-heading">Welcome</h1>
          <h2 className="sub-heading">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-fields">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Please enter your full Name"
                required
              />
            </div>
            <div className="input-fields">
              <FontAwesomeIcon icon={faEnvelope} />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Please enter your password"
              />
            </div>
            <button className="form-button">Sign Up </button>
          </form>
          <div>
            <Link to="/signin">
              <p className="account-links">Already Have an Account?</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
