import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { id, first_name, last_name, username, picture } = useSelector(
    (state) => state?.user
  );
  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, [id, navigate]);
  return (
    <>
      <Helmet>
        <title>Factive - Home</title>
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="my-12">
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
