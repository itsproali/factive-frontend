import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { id, first_name, last_name, username, picture } = useSelector(
    (state) => state.user
  );
  return (
    <>
      <h1 className="text-primary text-3xl font-semibold">
        Welcome to Factive | I am From Home
      </h1>
      <div className="my-12">
        <h1 className="text-3xl">User Information</h1>
        <h1>Id: {id}</h1>
        <h1>{first_name + " " + last_name}</h1>
        <h2>Username: {username}</h2>
        <img src={picture} alt="profile" />
      </div>
    </>
  );
};

export default Home;
