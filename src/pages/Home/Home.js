import React from "react";
import { Helmet } from "react-helmet-async";
import HomeLeft from "../../components/Home/HomeLeft";
// import { useSelector } from "react-redux";

const Home = () => {
  // const { id, first_name, last_name, username } = useSelector(
  //   (state) => state?.user
  // );

  return (
    <>
      <Helmet>
        <title>Factive - Home</title>
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="relative">
          <HomeLeft />
        </div>
      </div>
    </>
  );
};

export default Home;
