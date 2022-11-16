import React from "react";
import { Dots, NewRoom, Search } from "../../svg";

const HomeRight = () => {
  const secondaryColor = "#65676b";

  const contacts = [
    {
      name: "Sheikh Sahariar Siam",
      img: "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/315296879_2071632616558377_1170859680328228597_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEHwuaLKDtMcsgx0Luz2D-1aCgJGMV64v1oKAkYxXri_buh3wgPFWuv8G-jfTSktrjkbJmvVhzmKK4jhhh2teI9&_nc_ohc=1UOAaH3AAZgAX_P6q5n&_nc_ht=scontent.fdac23-1.fna&oh=00_AfByuSxcirKP1Pw5XxItlW63UC4Q_9-GB7dkIQ6vgctxDw&oe=63799030",
    },
    {
      name: "Sk Saud Khan",
      img: "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/313179538_532030232070033_4361168080159234641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3HKrrxS9dBIhGB3rVWY4lmhn81i-UwKSaGfzWL5TApG7x6t8PPn1XhGKjkWhhjT3hKPE838snHsQURY0v3QPV&_nc_ohc=USLWOzXaLgoAX-uqHoy&tn=X0hBge_mtthrrRf7&_nc_ht=scontent.fdac23-1.fna&oh=00_AfCYjTz6pxBk_5P3p8wfh0NpwTD9x5Pp0H_mXZW8NMaulg&oe=6379DA84",
    },
    {
      name: "Abdur Rahman Tanoy",
      img: "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/313179538_532030232070033_4361168080159234641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3HKrrxS9dBIhGB3rVWY4lmhn81i-UwKSaGfzWL5TApG7x6t8PPn1XhGKjkWhhjT3hKPE838snHsQURY0v3QPV&_nc_ohc=USLWOzXaLgoAX-uqHoy&tn=X0hBge_mtthrrRf7&_nc_ht=scontent.fdac23-1.fna&oh=00_AfCYjTz6pxBk_5P3p8wfh0NpwTD9x5Pp0H_mXZW8NMaulg&oe=6379DA84",
    },
    {
      name: "Akram Sakib",
      img: "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/299192639_1727292417645551_1295120835020230048_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHYdZVktjk9U5xsLXfUiwREN9m6GCSRvFw32boYJJG8XFQWP8KhAa2x-UnsCl5-DbUYb4PBVs8ZWn_MhP2vMzVg&_nc_ohc=rF2PawKg5yAAX_6e8om&_nc_ht=scontent.fdac23-1.fna&oh=00_AfA5K3lJYhuMF8fqjS-uVJMgkvy7DV9shugquTrs9TwNPA&oe=637A3427",
    },
    {
      name: "Nasimur Rahman",
      img: "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/307761309_637118501112620_1934549091684210998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdQ4XgnjN45IUHi2xUyDmblY2MO1ZhO7CVjYw7VmE7sAQzpnIwv4IGrgsBdQgRuPDnm6xnx6fx9sHBLM7a7F-s&_nc_ohc=19SS073dyEQAX8mZfep&_nc_ht=scontent.fdac23-1.fna&oh=00_AfBzjMmhHdrtJP60d2easRagGV6YNiAbMxjkJXbs8rvsPA&oe=637A5FA7",
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
    <div className="w-72 h-[89vh] pr-2 py-3 fixed top-14 right-0 overflow-y-auto scrollbar">
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
