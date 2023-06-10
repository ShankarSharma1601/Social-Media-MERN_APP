import React, { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../redux/features/userSlice";
import axios from "axios";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.user);
  console.log(isLoading);

  // handle change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmPass(true);
    dispatch(loginStart());
    try {
      if (isSignUp) {
        if (data.password === data.confirmpassword) {
          const res = await axios.post(
            "http://localhost:8000/auth/register",
            data
          );
          dispatch(loginSuccess(res.data));
          console.log(res);
          //alert("Register Successful");
          navigate("/login");
        } else {
          setConfirmPass(false);
        }
      } else {
        const res = await axios.post("http://localhost:8000/auth/login", data);
        dispatch(loginSuccess(res.data));
        console.log(res);
        //alert("Login Successful");
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailed());
      console.log(error);
      alert("Something went wrong");
    }
  };

  // reset form
  const resetForm = () => {
    setConfirmPass(confirmPass);
    setData(initialState);
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <i
          className="fas fa-solid fa-dice-d20"
          style={{ fontSize: "48px", color: "blueviolet" }}
        ></i>
        <div className="Webname">
          <h1>Social Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              required
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                required
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account. Sign Up!"}
            </span>

            <button
              className="button infoButton"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : isSignUp ? "Signup" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
