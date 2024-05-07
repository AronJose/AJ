import React, { useState } from "react";
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";
import img6 from "../Assets/6.png";
import netflix from '../Assets/netflix.webp'
import github from "../Assets/github.png";
import workbg from "../Assets/work-bg.png";
import arrowRight from "../Assets/arrow-symbol.png";
import arrowleft from "../Assets/arrow-left.png";

const projectData = [
  {
    id: 1,
    img1: img2,
    title: "User App",
    href: "https://github.com/AronJose/user-app",
    desc: "The user app facilitates seamless user registration, authentication, and profile management, enabling users to securely view, edit, and delete their profiles, with administrative controls for overseeing user accounts.",
  },
  {
    id: 2,
    img1: img1,
    title: "Todo",
    href: "https://github.com/AronJose/Todo-list-react",
    desc: "The Todo List app enhances productivity with seamless task management and organizational prowess. Its intuitive interface and robust functionality ensure efficient task creation, prioritization, and oversight",
  },
  {
    id: 3,
    img1: img3,
    title: "T-Style",
    href: "https://github.com/AronJose/T-style",
    desc: "I harnessed HTML, CSS, JavaScript, and Tailwind CSS to craft a visually stunning webpage, merging creativity with functionality to deliver an exceptional user experience.",
  },
  {
    id: 4,
    img1: img4,
    title: "MUI-Style",
    href: "https://github.com/AronJose/Material-UI-Style",
    desc: "HTML, CSS, JavaScript,React js and Material-UI to develop a dynamic and visually engaging user interface. This integration highlights a harmonious fusion of design and functionality, ensuring an immersive user experience.",
  },
  {
    id: 5,
    img1: img5,
    title: "io-chat",
    href: "https://github.com/AronJose/socket.io",
    desc: "I led a React.js and Node.js project integrating Socket.IO for a real-time chat application, spotlighting my expertise in harnessing innovative technologies to create interactive and seamless communication platforms",
  },
  {
    id: 6,
    img1: img6,
    title: "web.io-chat",
    href: "https://github.com/AronJose/websocket",
    desc: "The project seamlessly integrates React.js with Node.js, utilizing WebSocket technology for real-time communication. It prioritizes real-time data exchange, showcasing innovation and technical expertise in building modern, interactive applications.",
  },
  {
    id: 7,
    img1: netflix,
    title: "Netflix-Clone",
    href: "https://github.com/AronJose/websocket",
    desc: "The project seamlessly integrates React.js with Node.js, utilizing WebSocket technology for real-time communication. It prioritizes real-time data exchange, showcasing innovation and technical expertise in building modern, interactive applications.",
  },
  {
    id: 8,
    img1: netflix,
    title: "REact-Todo",
    href: "https://github.com/AronJose/websocket",
    desc: "The project seamlessly integrates React.js with Node.js, utilizing WebSocket technology for real-time communication. It prioritizes real-time data exchange, showcasing innovation and technical expertise in building modern, interactive applications.",
  },
];

function MyWorks() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPageWorks = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageWorks = () => {
    setCurrentPage(currentPage - 1);
  };


  return (
    <div className="font-serif h-full">
      <div className="container m-auto">
        <p className="md:text-3xl pl-2 tracking-widest md:pt-[50px] md:ml-14 font-bold text-start md:mb-4">
          My Works
        </p>
        <div className="flex justify-center md:m-8">
          <p className="font-bold md:text-5xl text-2xl pl-2">
            In every task, my essence breathes its tale.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {currentPage > 0 && (
            <div className="w-[70px] pr-8 hover:w-[75px]">
              <img src={arrowleft} alt="" onClick={prevPageWorks} />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-4">
            {/* ------------------array looping---------------------------- */}
            {projectData
              .slice(currentPage * 6, currentPage * 6 + 6)
              .map((work) => (
                <div
                  key={work.id}
                  className="border-4 md:w-[300px] md:h-[250px] text-white shadow rounded-2xl"
                  style={{ backgroundImage: `url(${workbg})` }}
                >
                  <div className="flex items-center justify-between pr-4">
                    <p className="font-extrabold text-xl p-5">{work.title}</p>
                    <a href={work.href}>
                      <img
                        src={github}
                        alt=""
                        className="w-6 h-6 bg-transparent hover:w-8 hover:h-8 hover:bg-yellow-500 rounded-full"
                      />
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src={work.img1}
                      alt=""
                      className="md:h-[175px] md:w-[400px] rounded-b-2xl"
                    />
                    <div className="absolute rounded-b-xl top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-900 bg-opacity-85 flex justify-center items-center">
                      <p className="text-white text-justify p-2">{work.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            {/* ---------------------------------------- */}
          </div>
          {projectData.length > (currentPage + 1) * 6 && (
            <div className="w-[51px] pl-8 hover:w-[55px] hover:rounded-full">
              <img src={arrowRight} alt="" onClick={nextPageWorks} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
