import React from "react";
import { Dots, NewRoom, Search } from "../../svg";

const HomeRight = () => {
  const secondaryColor = "#65676b";

  const contacts = [
    {
      name: "Sheikh Sahariar Siam",
      img: "/stories/profile1.jpg",
    },
    {
      name: "Sk Saud Khan",
      img: "/stories/profile2.jpg",
    },
    {
      name: "Abdur Rahman Tanoy",
      img: "/stories/profile3.png",
    },
    {
      name: "Akram Sakib",
      img: "/stories/profile4.jfif",
    },
    {
      name: "Nasimur Rahman",
      img: "/stories/profile5.png",
    },
    {
      name: "Riaz Ahmed Akhanda",
      img: "",
    },
    {
      name: "Mahid Hasan Nahiyyan",
      img: "",
    },
    {
      name: "Tonmoy Ghosh Bijoy",
      img: "",
    },
  ];
  return (
    <div className="hidden md:block w-72 h-[89vh] pr-2 py-3 fixed top-14 right-0 overflow-y-auto scrollbar">
      <div className="flex items-center justify-between">
        <h4 className="text-color-secondary dark:text-dark-color-secondary text-lg font-semibold">
          Sponsored
        </h4>
      </div>
      <div className="h-[1px] w-full bg-third dark:bg-dark-third my-2"></div>

      <div className="flex items-center justify-between">
        <h4 className="text-color-secondary dark:text-dark-color-secondary text-lg font-semibold">
          Contacts
        </h4>
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 flex items-center justify-center hover:bg-third hover:dark:bg-dark-third rounded-full p-2">
            <NewRoom color={secondaryColor} />
          </button>
          <button className="h-8 w-8 flex items-center justify-center hover:bg-third hover:dark:bg-dark-third rounded-full p-2">
            <Search color={secondaryColor} />
          </button>
          <button className="h-8 w-8 flex items-center justify-center hover:bg-third hover:dark:bg-dark-third rounded-full p-2">
            <Dots color={secondaryColor} />
          </button>
        </div>
      </div>

      <div className="">
        {contacts.map((contact, i) => (
          <div
            key={i}
            className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-third hover:dark:bg-dark-third rounded-lg"
          >
            <span>
              <img
                src={
                  contact.img ||
                  "https://res.cloudinary.com/itsproali/image/upload/v1666547800/factive/resources/default_pic_bm9wqp.png"
                }
                alt="img"
                className="inline-block h-7 w-7 rounded-full"
              />
            </span>
            <span className="font-medium">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRight;
