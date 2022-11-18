import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Friends,
  FriendsActive,
  Gaming,
  Home,
  HomeActive,
  Logo,
  Market,
  Messenger,
  Notifications,
  Plus,
  Search,
  Watch,
} from "../../svg";
import CreateMenu from "./CreateMenu";
import "./Header.css";
import MessageMenu from "./MessageMenu";
import NotificationMenu from "./NotificationMenu";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  const [active, setActive] = useState("Home");
  const user = useSelector((state) => state?.user);
  const secondaryColor = "#65676b";
  const blueColor = "#1876f2";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);

  const navigations = [
    {
      title: "Home",
      path: "/",
      icon: <Home color={secondaryColor} />,
      activeIcon: <HomeActive />,
    },
    {
      title: "Friends",
      path: "/friends",
      icon: <Friends color={secondaryColor} />,
      activeIcon: <FriendsActive />,
    },
    {
      title: "Watch",
      path: "/watch",
      icon: <Watch color={secondaryColor} />,
      activeIcon: <Watch color={blueColor} />,
    },
    {
      title: "Market",
      path: "/market",
      icon: <Market color={secondaryColor} />,
      activeIcon: <Market color={blueColor} />,
    },
    {
      title: "Gaming",
      path: "/gaming",
      icon: <Gaming color={secondaryColor} />,
      activeIcon: <Gaming color={blueColor} />,
    },
  ];
  return (
    <header className="bg-primary dark:bg-dark-secondary h-[56px] flex items-center justify-between gap-4 fixed top-0 left-0 z-50 px-2 lg:px-4 w-full drop-shadow text-color-primary dark:text-dark-color-primary">
      {/* Header Left */}
      <div className="flex items-center gap-2 relative">
        <Link to="/" onClick={() => setActive("Home")}>
          <Logo />
        </Link>
        <div className="search" onClick={() => setShowSearchMenu(true)}>
          <Search color={secondaryColor} />
          <input
            type="text"
            name="search"
            id="search"
            className="hidden"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Search Menu */}
      {showSearchMenu && (
        <SearchMenu
          secondaryColor={secondaryColor}
          setShowSearchMenu={setShowSearchMenu}
        />
      )}

      {/* Header Center */}
      <div className="hidden md:flex items-center justify-center gap-2">
        {navigations?.map((navigation) => (
          <Link
            key={navigation.title}
            to={navigation.path}
            onClick={() => setActive(navigation.title)}
            className={`px-6 lg:px-10 py-3 hover:bg-third dark:hover:bg-dark-third rounded transition-300 border-b-[3px] ${
              active === navigation.title
                ? "border-blue-color rounded-b-none"
                : "border-transparent"
            } `}
          >
            {active === navigation.title
              ? navigation.activeIcon
              : navigation.icon}
          </Link>
        ))}
      </div>

      {/* Header Right */}
      <div className="flex items-center gap-2 relative">
        <button
          className={`circle ${showCreateMenu && "active_circle"}`}
          onClick={() => setShowCreateMenu(!showCreateMenu)}
        >
          <span>
            <Plus color={showCreateMenu ? blueColor : secondaryColor} />
          </span>
        </button>
        <button
          className={`circle header_hidden ${
            showMessageMenu && "active_circle"
          }`}
          onClick={() => setShowMessageMenu(!showMessageMenu)}
        >
          <span>
            <Messenger color={showMessageMenu ? blueColor : secondaryColor} />
          </span>
        </button>
        <button
          className={`circle header_hidden ${
            showNotificationMenu && "active_circle"
          }`}
          onClick={() => setShowNotificationMenu(!showNotificationMenu)}
        >
          <span>
            <Notifications
              color={showNotificationMenu ? blueColor : secondaryColor}
            />
          </span>
        </button>
        <button className="" onClick={() => setShowUserMenu(!showUserMenu)}>
          <img
            src={user?.picture}
            alt="user"
            className="w-full h-full circle profile_circle"
          />
        </button>
        {showCreateMenu && <CreateMenu setShowCreateMenu={setShowCreateMenu} />}
        {showMessageMenu && (
          <MessageMenu setShowMessageMenu={setShowMessageMenu} />
        )}
        {showNotificationMenu && (
          <NotificationMenu setShowNotificationMenu={setShowNotificationMenu} />
        )}
        {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
      </div>
    </header>
  );
};

export default Header;
