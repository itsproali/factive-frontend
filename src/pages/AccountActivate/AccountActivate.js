import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const AccountActivate = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = window.location.search.split("=")[1];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Request to the server
  const callApi = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/activate`,
        { token }
      );
      if (data.success) {
        setTimeout(() => {
          navigate("/");
          dispatch({type: "VERIFY"})
        }, 4000);
      }
    } catch (err) {
      if (err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
    }
    setLoading(false);
  };

  // Call function & Error Handle
  useEffect(() => {
    callApi();
  }, []);
  
  if (loading) {
    return <Loading />;
  }
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
