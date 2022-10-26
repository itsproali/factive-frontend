import React from "react";
import { Helmet } from "react-helmet-async";

const Friends = () => {
  return (
    <>
      <Helmet>
        <title>Factive - Friends</title>
      </Helmet>
      <div className="min-h-screen pt-20">Hello Friends</div>
    </>
  );
};

export default Friends;
