import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../svg";

const HomeLeft = () => {
  const { user } = useSelector((state) => state);
  const [showAll, setShowAll] = useState(true);

  //   Data
  const homeLeftData = [
    {
      icon: "friends.png",
      title: "Friends",
    },
    {
      icon: "groups.png",
      title: "Groups",
    },
    {
      icon: "marketplace.png",
      title: "Marketplace",
    },
    {
      icon: "watch.png",
      title: "Watch",
    },
    {
      icon: "memories.png",
      title: "Memories",
    },
    {
      icon: "ad.png",
      title: "Ad Center",
    },
    {
      icon: "ads.png",
      title: "Ads Manager",
    },
    {
      icon: "weather.png",
      title: "Blood Donations",
    },
    {
      icon: "climate.png",
      title: "Climate Science Center",
    },
    {
      icon: "covid.png",
      title: "Covid-19 Information Center",
    },
    {
      icon: "campus.png",
      title: "Crisis Response",
    },
    {
      icon: "fund.png",
      title: "Digital Collectibles",
    },
    {
      icon: "emotional.png",
      title: "Emotional Health",
    },
    {
      icon: "events.png",
      title: "Events",
    },
    {
      icon: "pay.png",
      title: "Facebook Pay",
    },
    {
      icon: "fav.png",
      title: "Favourites",
    },
    {
      icon: "gaming.png",
      title: "Gaming Video",
    },
    {
      icon: "live.png",
      title: "Live videos",
    },
    {
      icon: "messenger.png",
      title: "Messenger",
    },
    {
      icon: "messkids.png",
      title: "Messenger Kids",
    },
    {
      icon: "recent.png",
      title: "Most recent",
    },
    {
      icon: "pages.png",
      title: "Pages",
    },
    {
      icon: "play.png",
      title: "Play games",
    },
    {
      icon: "recentad.png",
      title: "Recent ad activity",
    },
    {
      icon: "ad.png",
      title: "Reels",
    },
    {
      icon: "saved.png",
      title: "Saved",
    },
  ];

  const shortcuts = [
    {
      icon: "linkedin.png",
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/itsproali",
    },
    {
      icon: "me.png",
      title: "My Portfolio",
      link: "https://itsproali.netlify.app",
    },
  ];

  return (
    <div className="w-72 h-[89vh] pl-2 py-3 fixed top-14 left-0 overflow-y-auto scrollbar">
      <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-third hover:dark:bg-dark-third rounded-lg mb-2">
        <span>
          <img src={user.picture} alt="img" className="circle mini_circle" />
        </span>
        <span className="font-semibold">
          {user.first_name + " " + user.last_name}
        </span>
      </div>

      {homeLeftData
        .slice(0, showAll ? homeLeftData.length : 5)
        .map((option, i) => (
          <div
            key={i}
            className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-third hover:dark:bg-dark-third rounded-lg"
          >
            <span>
              <img
                src={`../../../left/${option.icon}`}
                alt="icon"
                className="inline-block h-7 w-7"
              />
            </span>
            <span className="font-medium">{option.title}</span>
          </div>
        ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className="w-full flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-third hover:dark:bg-dark-third rounded-lg font-semibold"
      >
        <div className={`circle mini_circle ${showAll && "rotate-180"}`}>
          <ArrowDown1 color="#000" />
        </div>
        <span>{showAll ? "See less" : "See more"}</span>
      </button>

      <div className="h-[1px] w-full bg-third dark:bg-dark-third my-2"></div>

      <div className="">
        <div className="flex items-center justify-between">
          <h4 className="text-color-secondary dark:text-dark-color-secondary text-lg font-semibold">
            Your shortcuts
          </h4>
          <Link to="/" className="text-blue-color hover:underline">
            Edit
          </Link>
        </div>
      </div>

      <div className="mt-2">
        {shortcuts.map((shortcut, i) => (
          <a
            href={shortcut.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-third hover:dark:bg-dark-third rounded-lg"
          >
            <span>
              <img
                src={`../../../icons/${shortcut.icon}`}
                alt="icon"
                className="inline-block h-7 w-7"
              />
            </span>
            <span className="font-medium">{shortcut.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeLeft;
