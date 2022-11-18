import React from "react";
import { useSelector } from "react-redux";
import { LiveVideo, Photo, Feeling } from "../../svg";
import "./Home.css";

const CreatePost = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="my-4 bg-white dark:bg-dark-secondary p-3 rounded-xl relative shadow">
      <div className="flex items-center gap-3">
        <img src={user.picture} alt="user" className="circle profile_circle" />
        <div className="w-full create_post">
          <input
            type="text"
            name="post"
            id="post"
            placeholder={`What's on your mind, ${user.first_name}?`}
            className=""
          />
        </div>
      </div>

      <div className="h-[1px] w-full bg-secondary dark:bg-dark-third my-3"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-third dark:hover:bg-dark-third">
          <LiveVideo color="#E42645" />
          <span className="font-medium text-color-secondary text-sm">Live Video</span>
        </button>

        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-third dark:hover:bg-dark-third">
          <Photo color="#41B35D" />
          <span className="font-medium text-color-secondary text-sm">Photo/video</span>
        </button>

        <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-third dark:hover:bg-dark-third">
          <Feeling color="#EAB026" />
          <span className="font-medium text-color-secondary text-sm">
            Feeling/activity
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
