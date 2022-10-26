import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-dark-primary w-full py-6 px-2 lg:px-16">
      <div className="text-center">
        <p>
          Factive is a simple copy version of{" "}
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>
          . This Project is created for learning purpose
        </p>
        <div className="h-[2px] w-full bg-secondary dark:bg-dark-secondary my-3"></div>
        <p>
          <span>&copy; 2022 | </span> Developed by{" "}
          <a
            href="http://itsproali.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-color hover:underline font-semibold"
          >
            Mohammad Ali
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
