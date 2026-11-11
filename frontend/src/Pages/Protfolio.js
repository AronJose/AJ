import React from "react";
import frontend from "../Assets/frontend.jpg";
import BackEnd from "../Assets/BackEnd.svg";
import uiux from "../Assets/uiux.jpg";
import Slicer from "../components/Slicer";
import sd from "../Assets/software.avif";
import AnimatedCard from "../components/AnimatedCard";
import MyWorks from "../components/MyWorks";

const mySkills = [
  {
    id: 1,
    img: frontend,
    title: "Front-End Web Development",
    desc: "Developing a user-friendly interface to engage more possible customers",
  },
  {
    id: 2,
    img: BackEnd,
    title: "Back-End Web Development",
    desc: "Developed and maintained high-performance backend systems, resulting in significant boosts to website traffic and conversion rates.",
  },
  {
    id: 3,
    img: uiux,
    title: "UI/UX Design",
    desc: "Designing the visual elements of an interface involves careful consideration of colors, typography, and images to create an appealing and cohesive user experience.",
  },
  {
    id: 4,
    img: sd,
    title: "Software Development",
    desc: "Designing the visual elements of an interface involves careful consideration of colors, typography, and images to create an appealing and cohesive user experience.",
  },
];

function Protfolio() {
  return (
    <div className="relative">
      <span className="absolute -top-[60px]" id="portfolio"></span>
      <div className="mx-auto font-serif px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4   ">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h5 className="font-semibold text-xl">Feature it services</h5>
            <h1 className="font-bold md:text-5xl sm:text-3xl text-3xl">
              Industries I'm Offering
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xl pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 text-justify">
              As the complexity of software systems increases, the field of
              architecture becomes multi-disciplinary with a focus on
              technological expertise.
            </p>
          </div>
        </div>

        {/*----------------------------------- FrontEnd Development ----------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {mySkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200 rounded-3xl shadow-2xl"
            >
              <img
                src={skill.img}
                alt=""
                className="w-full rounded-t-3xl h-[203px]"
              />
              <div className="p-5">
                <h5 className="my-5 text-2xl font-bold tracking-tight text-gray-900">
                  {skill.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-justify">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --------------Slider----------------- */}
        <div className="m-8">
          <Slicer />
        </div>
        <AnimatedCard />
      </div>
      <div>
        <MyWorks />
      </div>
    </div>
  );
}

export default Protfolio;
