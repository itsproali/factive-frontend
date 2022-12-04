import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  setTimeout(() => {
    window.open("/", "_self", "");
  }, 15000);

  const { email } = useSelector((state) => state.user);
  return (
    <div className="bg-secondary dark:bg-dark-secondary min-h-screen w-full flex items-center justify-center">
      <div className="w-[95%] sm:w-3/4 bg-white dark:bg-dark-third rounded-lg shadow-lg px-4 py-6 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <img src="/icons/email_sent.png" alt="email" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl uppercase text-color-secondary dark:text-dark-color-secondary mb-4">
              Just One More Step...
            </h2>
            <p className="text-color-secondary dark:text-dark-color-secondary mb-6 max-w-md">
              Please verify your email address so you can sign in if you ever
              forget your password. We've sent a confirmation email to:
            </p>
            <h5 className="font-bold text-blue-color">
              <a
                href="https://mail.google.com/mail/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {email}
              </a>
            </h5>
          </div>
        </div>
        <div className="w-full bg-divider-color h-[1.5px] mt-6 mb-2"></div>
        <p>
          <b>Note: </b>Now You can close this tab.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
