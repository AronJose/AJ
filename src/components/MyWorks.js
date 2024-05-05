import React from "react";
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";
import img6 from "../Assets/6.png";
import github from "../Assets/github.png";

const projectData = [
  {
    id: 1,
    img1: img2,
    title: "User App",
    desc: "This is the User App project.",
  },
  {
    id: 2,
    img1: img1,
    title: "Todo",
    desc: "This is the Todo project.",
  },
  {
    id: 3,
    img1: img3,
    title: "T-Style",
    desc: "This is the T-Style project.",
  },
  {
    id: 4,
    img1: img4,
    title: "MUI-Style",
    desc: "This is the MUI-Style project.",
  },
  {
    id: 5,
    img1: img5,
    title: "io-chat",
    desc: "This is the io-chat project.",
  },
  {
    id: 6,
    img1: img6,
    title: "web.io-chat",
    desc: "This is the web.io-chat project.",
  },
];

function MyWorks() {
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
        <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-4">
          {projectData.map((work) => (
            <div
              key={work.id}
              className="border-2 border-green-900 border-y-indigo-900 md:w-[400px] md:h-[350px] text-white shadow rounded-2xl bg-gradient-to-r from-green-700 to-blue-400">
              <div className="flex items-center justify-between pr-4">
                <p className="font-extrabold text-xl p-5">{work.title}</p>
                <img src={github} alt="" className="w-6 h-6 bg-transparent" />
              </div>
              <div className="relative">
                <img
                  src={work.img1}
                  alt=""
                  className="md:h-[275px] md:w-[400px] rounded-b-2xl"
                />
                <div className="absolute rounded-b-xl top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-700 bg-opacity-75 flex justify-center items-center">
                  <p className="text-white text-center">{work.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
