import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GreenButton from "../Button/GreenButton";
import Loading from "../Loading/Loading";

const RegisterForm = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear() - 10);

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "Must be 3 to 20 character")
      .max(20, "Must be 3 to 20 character")
      .required("What's your name"),
    last_name: Yup.string()
      .min(3, "Must be 3 to 20 character")
      .max(20, "Must be 3 to 20 character")
      .required("What's your name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter an email"),
    password: Yup.string()
      .required("Please enter a password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Choose a strong password. Must includes A-Z, a-z, 0-9"
      ),
    birth_date: Yup.number().required(),
    birth_month: Yup.number().required(),
    birth_year: Yup.number().required(),
    gender: Yup.string().required(),
  });

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/register`,
        values
      );
      const { success, message, ...others } = data;
      if (success) {
        navigate("/");
        dispatch({ type: "LOGIN", payload: others });
      }
    } catch (error) {
      setErr(error?.response?.data);
    }
    setLoading(false);
  };

  // Data
  const getDays = () => {
    return new Date(year, month, 0).getDate();
  };
  const years = Array.from(new Array(120), (val, index) => year - index);
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="blur_overlay py-10 overflow-auto">
      <div className="register shadow-lg w-[95%] sm:w-[30rem]">
        <div className="flex justify-between items-start gap-4 border-b pb-4">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-color-primary dark:text-dark-color-primary">Sign Up</h1>
            <span className="text-color-secondary dark:text-dark-color-secondary">It's quick and easy</span>
          </div>
          <button className="font-bold" onClick={() => setIsSignUp(false)}>
            <i className="exit_icon" />
          </button>
        </div>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birth_date: new Date().getDate(),
            birth_month: month,
            birth_year: year,
            gender: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="my-2">
              <div className="flex items-start flex-col sm:flex-row gap-2 sm:gap-3">
                {/* First Name */}
                <div className="relative w-full">
                  <Field
                    name="first_name"
                    type="text"
                    className={`register_input ${
                      errors.first_name && touched.first_name && "error-field"
                    }`}
                    placeholder="First name"
                  />
                  {errors.first_name && touched.first_name && (
                    <i className="error_icon absolute top-3 right-2 scale-75" />
                  )}
                  {errors.first_name && touched.first_name && (
                    <span className="text-error text-xs -mt-2">
                      {errors.first_name}
                    </span>
                  )}
                </div>
                {/* Last Name */}
                <div className="relative w-full">
                  <Field
                    name="last_name"
                    type="text"
                    className={`register_input  ${
                      errors.last_name && touched.last_name && "error-field"
                    }`}
                    placeholder="Last name"
                  />
                  {errors.last_name && touched.last_name && (
                    <i className="error_icon absolute top-3 right-2 scale-75" />
                  )}
                  {errors.last_name && touched.last_name && (
                    <span className="text-error text-xs -mt-2">
                      {errors.last_name}
                    </span>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="my-2 relative">
                <Field
                  name="email"
                  type="email"
                  className={`register_input ${
                    errors.email && touched.email && "error-field"
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && touched.email && (
                  <i className="error_icon absolute top-3 right-2 scale-75" />
                )}
                {errors.email && touched.email && (
                  <span className="text-error text-xs -mt-2">
                    {errors.email || err.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="my-2 mb-4 relative">
                <Field
                  name="password"
                  type="password"
                  className={`register_input ${
                    errors.password && touched.password && "error-field"
                  }`}
                  placeholder="Choose a strong password"
                  onFocus={() => setErr(null)}
                />
                {errors.password && touched.password && (
                  <i className="error_icon absolute top-3 right-2 scale-75" />
                )}
                {errors.password && touched.password && (
                  <span className="text-error text-xs -mt-2">
                    {errors.password}
                  </span>
                )}
              </div>
              {/* Date of Birth */}
              <div className="">
                <p
                  className="text-sm font-semibold text-color-secondary cursor-pointer"
                  title="At least 10 years old needed..!"
                >
                  Date of Birth <i className="info_icon scale-90"></i>
                </p>
                <div className="grid grid-cols-3 items-center gap-2 sm:gap-3">
                  <Field
                    name="birth_date"
                    id="birth_date"
                    component="select"
                    className="dropdown"
                  >
                    {days.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </Field>
                  <Field
                    name="birth_month"
                    id="birth_month"
                    component="select"
                    className="dropdown"
                    onBlur={(e) => setMonth(e.target.value)}
                  >
                    {months?.map((month, index) => (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </Field>
                  <Field
                    name="birth_year"
                    id="birth_year"
                    component="select"
                    className="dropdown"
                    onBlur={(e) => setYear(e.target.value)}
                  >
                    {years?.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>

              {/* Gender */}
              <div className="my-2">
                <div className="flex justify-between">
                  <p
                    className={`text-sm font-semibold cursor-pointer  ${
                      errors.gender ? "text-error" : "text-color-secondary"
                    }`}
                    title="Choose your gender"
                  >
                    Gender <i className="info_icon scale-90"></i>
                  </p>
                  {errors.gender && <i className="error_icon scale-75" />}
                </div>

                <div className="grid grid-cols-3 items-center gap-2 sm:gap-3">
                  <label htmlFor="male" className="gender">
                    <span>Male</span>
                    <Field name="gender" id="male" type="radio" value="male" />
                  </label>
                  <label htmlFor="female" className="gender">
                    <span>Female</span>
                    <Field
                      name="gender"
                      id="female"
                      type="radio"
                      value="female"
                    />
                  </label>
                  <label htmlFor="others" className="gender">
                    <span>Others</span>
                    <Field
                      name="gender"
                      id="others"
                      type="radio"
                      value="others"
                    />
                  </label>
                </div>
              </div>

              {/* Text */}
              <div className="text-xs text-gray-500">
                <p className="mb-3">
                  People who use our service may have uploaded your contact
                  information to Factive.{" "}
                  <span className="text-blue-color cursor-pointer hover:underline">
                    Learn more.
                  </span>
                </p>
                <p>
                  By clicking Sign Up, you agree to our{" "}
                  <span className="text-blue-color cursor-pointer hover:underline">
                    Terms
                  </span>
                  ,{" "}
                  <span className="text-blue-color cursor-pointer hover:underline">
                    Privacy Policy{" "}
                  </span>
                  and Cookies Policy. You may receive SMS notifications from us
                  and can opt out at any time.
                </p>
              </div>
              {/* Sign Up Button */}
              <div className="text-center mt-4">
                <GreenButton type="submit" className="px-20">
                  Sign Up
                </GreenButton>
              </div>
              {err && (
                <div className="text-center text-error mt-3">
                  <span>{err?.message}</span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
