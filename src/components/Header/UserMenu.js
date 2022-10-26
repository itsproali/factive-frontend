import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../../utils/useClickOutside";

const UserMenu = ({ setShowUserMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, theme } = useSelector((state) => state);
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowUserMenu(false);
  });

  const handleLogOut = () => {
    navigate("/login");
    dispatch({ type: "LOGOUT" });
  };

  // Data
  const data = [
    {
      icon: "settings_filled_icon",
      title: "Settings & Privacy",
    },
    {
      icon: "help_filled_icon",
      title: "Help & Support",
    },
    {
      icon: "report_filled_icon",
      title: "Give Feedback",
    },
    {
      icon: "logout_filled_icon",
      title: "Logout",
      function: handleLogOut,
    },
  ];

  return (
    <div
      className="h-[75vh] shadow-lg bg-primary dark:bg-dark-primary rounded-lg absolute top-[50px] right-0 p-3 overflow-y-auto scrollbar"
      ref={menu}
    >
      <Link
        to="/"
        className="flex items-center gap-4 hover:dark:bg-dark-third rounded my-2 p-2"
      >
        <img
          src={user?.picture}
          alt={user?.first_name}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-medium">
            {user?.first_name + " " + user?.last_name}
          </h2>
          <span className="text-blue-color text-sm">See your Profile</span>
        </div>
      </Link>

      <div className="h-[1px] w-full bg-secondary dark:bg-dark-secondary my-3"></div>

      {/* Theme Switch */}
      <h2 className="text-2xl font-semibold">Choose Theme</h2>
      <div className="w-64 sm:w-72">
        <label
          htmlFor="light"
          className="flex items-center justify-between gap-2 cursor-pointer py-2 px-4 hover:bg-third hover:dark:bg-dark-third rounded"
        >
          <span>Light</span>
          <input
            type="radio"
            name="theme"
            id="light"
            value="light"
            onInput={() => dispatch({ type: "LIGHT" })}
            defaultChecked={!theme}
          />
        </label>
        <label
          htmlFor="dark"
          className="flex items-center justify-between gap-2 cursor-pointer py-2 px-4 hover:bg-third hover:dark:bg-dark-third rounded"
        >
          <span>Dark</span>
          <input
            type="radio"
            name="theme"
            id="dark"
            value="dark"
            onInput={() => dispatch({ type: "DARK" })}
            defaultChecked={theme}
          />
        </label>
      </div>

      <div className="h-[1px] w-full bg-secondary dark:bg-dark-secondary my-3"></div>

      {/* Actions */}
      <div>
        {data.map((option) => (
          <div
            key={option.title}
            onClick={option?.function}
            className="flex items-center gap-3 justify-start p-2 cursor-pointer rounded-lg hover:bg-secondary dark:hover:bg-dark-secondary"
          >
            <div className="circle small_circle">
              <i className={option.icon}></i>
            </div>
            <div>
              <h2 className="text-color-primary font-semibold dark:text-dark-color-primary">
                {option.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
