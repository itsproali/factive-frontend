import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BlueButton from "../Button/BlueButton";
import GreenButton from "../Button/GreenButton";
import Loading from "../Loading/Loading";

const LoginForm = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter an email"),
    password: Yup.string().required("Please enter a password"),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/login`,
        values
      );
      const { success, message, ...others } = data;
      if (success) {
        navigate("/");
        dispatch({ type: "LOGIN", payload: others });
        
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      setErr(error?.response?.data);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 bg-primary dark:bg-dark-primary shadow-lg rounded-xl w-full sm:w-96">
      {/* Formik Form */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="my-2 relative">
              <Field
                name="email"
                type="email"
                className={`input-field ${
                  (errors.email && touched.email) || err ? "error-field" : ""
                }`}
                placeholder="Enter email address"
              />
              {(errors.email && touched.email) || err ? (
                <i className="error_icon absolute top-4 right-2 scale-75" />
              ) : null}
              {(errors.email && touched.email) || err ? (
                <span className="text-error text-xs -mt-2">
                  {errors.email || err.message}
                </span>
              ) : null}
            </div>
            <div className="my-2 mb-4 relative">
              <Field
                name="password"
                type="password"
                className={`input-field ${
                  (errors.password && touched.password) || err
                    ? "error-field"
                    : ""
                }`}
                placeholder="Enter your password"
                onFocus={() => setErr(null)}
              />
              {(errors.password && touched.password) || err ? (
                <i className="error_icon absolute top-4 right-2 scale-75" />
              ) : null}
              {(errors.password && touched.password) || err ? (
                <span className="text-error text-xs -mt-2">
                  {errors.password || err?.message}
                </span>
              ) : null}
            </div>

            <BlueButton className="w-full" type="submit">
              Log In
            </BlueButton>
          </Form>
        )}
      </Formik>
      <div className="text-center my-3">
        <Link to="/" className="text-blue-color hover:underline">
          Forgotten Password?
        </Link>
      </div>
      <div className="h-[1.75px] w-full bg-secondary dark:bg-dark-secondary"></div>
      <div className="text-center">
        <GreenButton className="px-6 mt-6" onClick={() => setIsSignUp(true)}>
          Create New Account
        </GreenButton>
      </div>
    </div>
  );
};

export default LoginForm;
