import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountActivate = () => {
  const [error, setError] = useState(null);
  const token = window.location.search.split("=")[1];
  const navigate = useNavigate();

  // Request to the server
  const callApi = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER}/activate`,
      { token }
    );
    if (data.success) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError(data.message);
    }
  };

  // Error Handling
  callApi().catch((err) => {
    if (err.response.data.message) {
      setError(err.response.data.message);
    } else {
      setError(err.message);
    }
  });

  return (
    <div className="bg-secondary dark:bg-dark-secondary min-h-screen w-full flex items-center justify-center">
      <div className="w-[95%] sm:w-3/4 bg-white dark:bg-dark-third rounded-lg shadow-lg p-4 sm:p-8 md:p-16">
        <div className="flex items-center justify-center">
          <img
            src={`${
              error ? "/icons/email_error.png" : "/icons/email_confirm.png"
            }`}
            alt="email"
          />
        </div>
        {error ? (
          <>
            <h2 className="text-color-secondary dark:text-dark-color-secondary text-2xl  md:text-4xl font-bold text-center">
              Error!
            </h2>
            <p className="text-xl text-error text-center mt-4">{error}</p>
          </>
        ) : (
          <>
            <div className="text-color-secondary dark:text-dark-color-secondary text-center mt-6">
              <h2 className="text-2xl  md:text-5xl font-bold">Thank You!</h2>
              <p className="text-xl mt-4">
                Your Account has been activated successfully
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountActivate;
