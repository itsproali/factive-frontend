import React, { useState } from "react";
import { ArrowRight, Plus } from "../../svg";
import "./Home.css";

const Stories = () => {
  const [storyIndex, setStoryIndex] = useState(0);
  // Data
  const stories = [
    {
      img: "../../../stories/1.jpg",
      profile_pic: "../../../stories/profile1.jpg",
      profile_name: "Akram Sakib",
    },
    {
      img: "../../../stories/2.png",
      profile_pic: "../../../stories/profile2.jpg",
      profile_name: "Nasimur Rahman",
    },
    {
      img: "../../../stories/3.jpg",
      profile_pic: "../../../stories/profile3.png",
      profile_name: "Rafsan Jani",
    },
    {
      img: "../../../stories/4.jpg",
      profile_pic: "../../../stories/profile4.jfif",
      profile_name: "Abir Hossain Bishal",
    },
    {
      img: "../../../stories/5.jfif",
      profile_pic: "../../../stories/profile5.png",
      profile_name: "Faysal Ahmed",
    },
  ];

  return (
    <div className="bg-white dark:bg-dark-secondary p-2 md:p-4 rounded-xl relative shadow">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 xl:grid-cols-5 2:grid-cols-6 gap-x-2">
        {/* Create Story */}
        <div
          className={`rounded-lg w-full h-44 bg-primary dark:bg-dark-primary shadow-lg relative overflow-hidden cursor-pointer`}
        >
          <img
            src="../../../images/default_pic.png"
            alt="profile"
            className="absolute h-[75%] w-full object-cover brightness-[85%]"
          />
          <div className="absolute left-[50%] top-[65%] translate-x-[-50%] flex items-center justify-center border-[3px] border-white dark:border-dark-secondary bg-blue-color h-10 w-10 rounded-full p-1">
            <Plus color="#fff" />
          </div>
          <p className="absolute bottom-2 left-0 right-0 mx-auto text-center text-color-secondary font-medium text-xs">
            Create Story
          </p>
        </div>

        {stories
          .slice(storyIndex || 0, storyIndex ? storyIndex + 3 : stories.length)
          .map((story, i) => (
            <div key={i} className="story_container">
              <img src={story.img} alt="profile" className="story_img" />
              <img
                src={story.profile_pic}
                alt=""
                className="story_profile_pic"
              />
              <p className="absolute bottom-1 left-1 text-white font-semibold text-sm">
                {story.profile_name}
              </p>
            </div>
          ))}
      </div>

      {storyIndex !== 0 && (
        <button
          onClick={() => setStoryIndex(storyIndex - 3)}
          className="w-10 h-10 rounded-full bg-primary  flex items-center justify-center absolute top-[50%] translate-y-[-50%] -left-1 shadow-lg rotate-180"
        >
          <ArrowRight />
        </button>
      )}

      {stories.length > storyIndex + 3 && (
        <button
          onClick={() => setStoryIndex(storyIndex + 3)}
          className="w-10 h-10 rounded-full bg-primary  flex items-center justify-center absolute top-[50%] translate-y-[-50%] -right-1 shadow-lg"
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default Stories;
