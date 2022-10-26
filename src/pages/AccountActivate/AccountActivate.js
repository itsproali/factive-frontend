import React from "react";
import { useParams } from "react-router-dom";

const AccountActivate = () => {
  const { token } = useParams();
  console.log(token);
  return <div className="min-h-screen bg-secondary">
    
  </div>;
};

export default AccountActivate;
