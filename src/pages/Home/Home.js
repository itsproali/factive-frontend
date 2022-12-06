import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import CreatePost from "../../components/Home/CreatePost";
import HomeLeft from "../../components/Home/HomeLeft";
import HomeRight from "../../components/Home/HomeRight";
import Stories from "../../components/Home/Stories";
import ResendReminder from "../../components/ResendEmail/ResendReminder";

const Home = () => {
  const [isShow, setIsShow] = useState(true);
  const user = useSelector((state) => state.user);
  return (
    <>
      <Helmet>
        <title>Factive - Home</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Home Left Side */}
          <HomeLeft />

          {/* Home Middle Sections */}
          <div className="home_middle pt-16 sm:pt-20 mx-auto md:mx-10 lg:mx-[32vw] w-[97%] sm:w-[90%] md:w-[110%]">
            <Stories />
            {!user.verified && isShow && (
              <ResendReminder setIsShow={setIsShow} />
            )}
            <CreatePost />
          </div>

          {/* Home Right Side */}
          <HomeRight />
        </div>
      </div>
    </>
  );
};

export default Home;
