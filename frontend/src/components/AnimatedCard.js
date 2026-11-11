import React from "react";
import Innovature from "../Assets/innovature.png";
import Toobler from "../Assets/Toobler.jpeg";

const cardData = [
  {
    id: 1,
    img: Toobler,
    title: "Junior Software Engineer",
    place: "Kochi, Kerala, India",
    desc: "I am currently employed as a Junior Software Engineer, where I specialize in working with React and Node.js technologies.",
  },
  {
    id: 2,
    img: Innovature,
    title: "Associate Software Engineer",
    place: "Kochi, Kerala, India",
    desc: "I have worked as an Associate Software Engineer for approximately six months, during which time I gained valuable experience in utilizing Angular and Java Spring Boot frameworks.",
  },
];

function AnimatedCard() {
  return (
    <div className="mx-4 md:mx-[30px] mt-10">
      <h5 className="md:text-3xl tracking-widest md:pt-[30px] font-bold">
        Work Experience
      </h5>
      <div>
        <div>
          <p className="md:text-5xl md:p-4 sm:text-xl font-bold mb-5 md:mb-10 md:text-center">
            The culmination of my expertise
          </p>
        </div>
        {cardData.map((data) => {
          return (
            <div
              key={data.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-100 border-y-gray-200 my-5 md:my-0 p-4 md:p-6 rounded-lg"
            >
              <img
                src={data.img}
                alt=""
                className="w-full md:w-[150px] rounded-lg md:col-span-1"
              />
              <div className="col-span-2">
                <h4 className="font-bold text-lg md:text-2xl">{data.title}</h4>
                <p className="text-sm md:text-base text-gray-700">
                  {data.place}
                </p>
                <p className="text-sm md:text-base text-justify font-normal mt-2">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimatedCard;
