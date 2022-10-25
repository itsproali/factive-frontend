import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { } from "../../svg";
import useClickOutside from "../../utils/useClickOutside";

const ProfileMenu = ({ setShowProfileMenu }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowProfileMenu(false);
  });
  return (
    <div
      className="h-96 shadow-lg bg-primary dark:bg-dark-primary rounded-lg absolute top-[50px] right-0 p-3 overflow-y-auto"
      ref={menu}
    >
      {/* Theme Switch */}
      <h2 className="text-2xl font-semibold">Choose Theme</h2>
      <div className="w-64 sm:w-72">
        <label
          htmlFor="light"
          className="flex items-center justify-between gap-2 py-2 px-4 hover:bg-third hover:dark:bg-dark-third rounded"
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
          className="flex items-center justify-between gap-2 py-2 px-4 hover:bg-third hover:dark:bg-dark-third rounded"
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
    </div>
  );
};

export default ProfileMenu;
