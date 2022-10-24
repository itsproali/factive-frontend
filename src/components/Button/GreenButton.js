import React from "react";

const GreenButton = ({ children, className, onClick, disabled, type }) => {
  return (
    <button
      className={`bg-secondary rounded-lg py-2 text-white font-medium hover:bg-green-600 active:scale-95 duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default GreenButton;
