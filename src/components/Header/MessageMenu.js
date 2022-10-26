import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
const CreateMenu = ({ setShowMessageMenu }) => {
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowMessageMenu(false);
  });

  return (
    <div
      className="w-80 max-h-[90vh] shadow-lg bg-primary dark:bg-dark-secondary rounded-lg absolute top-[50px] right-0 py-3 px-2 overflow-auto scrollbar"
      ref={menu}
    >
      <h2 className="text-2xl font-bold text-color-primary dark:text-dark-color-primary">
        Chat
      </h2>
    </div>
  );
};

export default CreateMenu;
