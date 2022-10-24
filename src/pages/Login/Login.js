import React, { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm";
import { Helmet } from 'react-helmet-async';
import "../../styles/icons/icons.css";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="bg-lightGray">
      <Helmet>
        <title>Factive - Log In or Sign Up to continue</title>
      </Helmet>
      <div className="container mx-auto min-h-screen py-16 flex flex-col lg:flex-row items-center justify-evenly gap-16">
        <div className="text-center lg:text-left lg:ml-auto">
          <img
            src="../../icons/factive.svg"
            alt="Factive logo"
            className="block mb-6 w-72"
          />
          <h2 className="text-xl lg:text-2xl max-w-xs lg:max-w-md">
            Factive helps you to connect and share with the people in your life
          </h2>
        </div>
        <div className="w-[90%] sm:w-auto mx-auto">
          {/* Login Form */}
          <LoginForm setIsSignUp={setIsSignUp} />
          {/* Register Form */}
          {isSignUp && <RegisterForm setIsSignUp={setIsSignUp}/>}
        </div>
      </div>
    </div>
  );
};

export default Login;
