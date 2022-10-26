import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

const Home = () => {
  const { id, first_name, last_name, username, picture } = useSelector(
    (state) => state?.user
  );

  return (
    <>
      <Helmet>
        <title>Factive - Home</title>
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="mb-12">
          <h1 className="text-3xl">User Information</h1>
          <h1>Id: {id}</h1>
          <h1>{first_name + " " + last_name}</h1>
          <h2>Username: {username}</h2>
          <img src={picture} alt="profile" className="w-56" />
        </div>
      </div>
    </>
  );
};

export default Home;
