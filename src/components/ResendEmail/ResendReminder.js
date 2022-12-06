import React, { useState } from "react";
import apiAgent from "../../utils/apiAgent";
import BlueButton from "../Button/BlueButton";
import Loading from "../Loading/Loading";

const ResendReminder = ({ setIsShow }) => {
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Send Verification email request to the server
  const sendEmail = async () => {
    try {
      setLoading(true);
      const { data } = await apiAgent.post(`/resend-verification-email`);
      if (data.success) {
        setSuccess(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.data.message) {
        setErr(error.response.data.message);
      } else {
        setErr(error.message);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-4 bg-white dark:bg-dark-secondary p-3 md:p-4 rounded-xl shadow">
      <div className="flex items-center justify-center">
        <img
          src={`${
            !(success || err)
              ? "/icons/email_sent.png"
              : err
              ? "/icons/email_error.png"
              : "/icons/email_confirm.png"
          }`}
          className="inline-block max-h-48 w-auto"
          alt="email"
        />
      </div>
      <div className="mt-6 mb-4">
        {!(success || err) ? (
          <p className="">
            Your email isn't verified. Please verify your account before it gets
            deleted after a month from creating.
          </p>
        ) : (
          <>
            {success && <p className="text-success">Verification Email sent</p>}
            {err && <p className="text-error">{err}</p>}
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-6">
        <button
          className="rounded-lg bg-error bg-opacity-40 py-2 px-4 text-color-primary dark:text-dark-color-primary font-semibold active:scale-95 duration-300 hover:bg-opacity-50"
          onClick={() => setIsShow(false)}
        >
          Not Now
        </button>
        <BlueButton
          onClick={() => sendEmail()}
          className="py-2 px-4 text-base"
          disabled={success}
        >
          Resend Email
        </BlueButton>
      </div>
    </div>
  );
};

export default ResendReminder;
