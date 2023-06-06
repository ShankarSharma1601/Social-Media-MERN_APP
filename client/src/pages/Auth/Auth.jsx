import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
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
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account. Sign Up!
          </span>

          <button className="button infoButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>

          <button className="button infoButton" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
