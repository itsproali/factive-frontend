import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";
import useClickOutside from "../../utils/useClickOutside";

const SearchMenu = ({ secondaryColor, setShowSearchMenu }) => {
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  return (
    <div
      className="h-96 shadow-lg bg-primary dark:bg-dark-primary rounded-lg absolute top-0 left-0 py-2 px-3 overflow-auto scrollbar"
      ref={menu}
    >
      <div className="flex items-center justify-between gap-2">
        <button className="circle" onClick={() => setShowSearchMenu(false)}>
          <span className="search_menu_icon">
            <ArrowRight color={secondaryColor} />
          </span>
        </button>
        <div className="search search_menu">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Facebook"
            autoFocus
          />
        </div>
      </div>

      <div className="flex items-center justify-between my-3">
        <h2 className="font-semibold text-color-primary dark:text-dark-color-primary">
          Recent searches
        </h2>
        <Link to="/" className="text-blue-color hover:underline">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default SearchMenu;
