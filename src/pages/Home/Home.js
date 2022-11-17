import React from "react";
import { Helmet } from "react-helmet-async";
import CreatePost from "../../components/Home/CreatePost";
import HomeLeft from "../../components/Home/HomeLeft";
import HomeRight from "../../components/Home/HomeRight";
import Stories from "../../components/Home/Stories";
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
      <div className="min-h-screen ">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <HomeLeft />
          <div className="home_middle pt-20 mx-auto md:mx-10 lg:mx-[32vw] w-[90%] md:w-[110%]">
            <Stories />
            <CreatePost />
          </div>
          <HomeRight />
        </div>
      </div>
    </>
  );
};

export default Home;
