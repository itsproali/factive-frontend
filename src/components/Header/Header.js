import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Home,
  HomeActive,
  Friends,
  FriendsActive,
  Watch,
  Gaming,
  Logo,
  Market,
  Messenger,
  Notifications,
  Plus,
  Search,
} from "../../svg";
import "./Header.css";
import CreateMenu from "./CreateMenu";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  const [active, setActive] = useState("Home");
  const { picture } = useSelector((state) => state?.user);
  const secondaryColor = "#65676b";
  const blueColor = "#1876f2";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);

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
    <header className="bg-primary dark:bg-dark-primary h-[56px] flex items-center justify-between gap-4 fixed top-0 left-0 z-50 px-2 lg:px-4 w-full drop-shadow text-color-primary dark:text-dark-color-primary">
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
            className={`px-6 lg:px-10 py-3 hover:bg-forth dark:hover:bg-dark-forth rounded transition-300 border-b-[3px] ${
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
          onClick={() => setShowCreateMenu(true)}
        >
          <span>
            <Plus color={showCreateMenu && blueColor} />
          </span>
        </button>
        <button className="circle">
          <span>
            <Messenger />
          </span>
        </button>
        <button className="circle">
          <span>
            <Notifications />
          </span>
        </button>
        <button className="" onClick={() => setShowUserMenu(true)}>
          <img
            src={picture}
            alt="user"
            className="w-full h-full circle profile_circle"
          />
        </button>
        {showCreateMenu && <CreateMenu setShowCreateMenu={setShowCreateMenu} />}
        {showUserMenu && (
          <UserMenu setShowUserMenu={setShowUserMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
