import React from "react";

const BlueButton = ({ children, className, onClick, disabled, type }) => {
  return (
    <button
      className={`bg-blue-color rounded-lg text-white text-xl font-medium py-3 hover:bg-blue-600 active:scale-95 duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default BlueButton;
