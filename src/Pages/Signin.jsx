import React from "react";
import "./CSS/Signin.css";
import { NavLink } from "react-router-dom";

const Signin = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign in</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already Have Account - <span><NavLink to={"/login"}>Login</NavLink></span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing , i agree to the terms of use & privacy policy. </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;