import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
const CreateMenu = ({ secondaryColor, setShowCreateMenu }) => {
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowCreateMenu(false);
  });

  // Data
  const menuOptions = [
    {
      icon: "m_post_icon",
      title: "Post",
      description: "Share a post on news feed",
      path: "/",
    },
    {
      icon: "m_story_icon",
      title: "Story",
      description: "Share a photo or write something",
      path: "/",
    },
    {
      icon: "m_room_icon",
      title: "Room",
      description: "Video chat with anyone, on or off Factive.",
      path: "/",
    },
    {
      icon: "m_page_icon",
      title: "Page",
      description: "Connect and share with customer or fans.",
      path: "/",
    },
    {
      icon: "m_ad_icon",
      title: "Ad",
      description: "Advertise your business, brand or organization.",
      path: "/",
    },
    {
      icon: "m_group_icon",
      title: "Group",
      description: "Connect with people who share your interests.",
      path: "/",
    },
    {
      icon: "m_event_icon",
      title: "Event",
      description: "Bring people together with a public or private event",
      path: "/",
    },
    {
      icon: "m_post_mar",
      title: "Marketplace Listing",
      description: "Sell items to people in your community.",
      path: "/",
    },
  ];

  return (
    <div
      className="w-80 max-h-[90vh] shadow-lg bg-primary dark:bg-dark-secondary rounded-lg absolute top-[50px] right-0 py-3 px-2 overflow-auto scrollbar"
      ref={menu}
    >
      <h2 className="text-2xl font-bold text-color-primary dark:text-dark-color-primary">
        Create
      </h2>

      <div className="my-4">
        {menuOptions?.slice(0, 3)?.map((option) => (
          <Link
            key={option.title}
            to={option.path}
            className="flex items-start gap-3 justify-start p-2 rounded-lg hover:bg-secondary dark:hover:bg-dark-third"
          >
            <div className="circle small_circle">
              <i className={option.icon}></i>
            </div>
            <div className="">
              <h3 className="text-color-primary font-medium dark:text-dark-color-primary -mt-1">
                {option.title}
              </h3>
              <p className="text-xs text-color-secondary dark:text-dark-color-secondary">
                {option.description}
              </p>
            </div>
          </Link>
        ))}

        <div className="w-full h-[1px] bg-secondary dark:bg-dark-third my-4"></div>

        {menuOptions?.slice(3, 9)?.map((option) => (
          <Link
            key={option.title}
            to={option.path}
            className="flex items-start gap-3 justify-start p-2 rounded-lg hover:bg-secondary dark:hover:bg-dark-third"
          >
            <div className="circle small_circle">
              <i className={option.icon}></i>
            </div>
            <div className="">
              <h3 className="text-color-primary font-medium dark:text-dark-color-primary -mt-1">
                {option.title}
              </h3>
              <p className="text-xs text-color-secondary dark:text-dark-color-secondary">
                {option.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CreateMenu;
