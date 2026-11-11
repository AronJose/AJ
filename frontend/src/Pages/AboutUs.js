import React from "react";
import education from "../Assets/education.png";

const mySkills = [
  {
    id: 1,
    img: education,
    year: "2022",
    title: "Postgraduate",
    clg: "Santhigiri College,",
    desc: "Vazhithala, Thodupuzha",
  },
  {
    id: 2,
    img: education,
    year: "2020",
    title: "Bachelor Degree",
    clg: "St. Thomas College, ",
    desc: "Pala,Kottayam",
  },
];
const myDetails = [
  {
    id: 1,
    key: "Name",
    value: "Aron Jose",
  },
  {
    id: 2,
    key: "Date of Birth",
    value: "19-June-1998",
  },
  {
    id: 3,
    key: "Occupation",
    value: "Software Engineer",
  },
  {
    id: 4,
    key: "Phone",
    value: "+91 9074484624",
  },
  {
    id: 5,
    key: "Email",
    value: "aronjose63@gmail.com",
  },
  {
    id: 6,
    key: "Nationality",
    value: "India",
  },
];

function AboutUs() {
  return (
    <div className="relative">
      <span className="absolute -top-[60px]" id="about"></span>
      <div className="text-black font-serif ">
        <div className="container px-4 sm:px-10">
          <div className="text-balance space-y-3 flex flex-col items-start shadow-sm">
            <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl tracking-widest mt-5">
              About Me
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 ">
              <div>
                <p className="leading-loose text-base sm:text-lg md:text-xl px-2 text-justify">
                  With a comprehensive IT background spanning React.js, Node.js,
                  JavaScript, and TypeScript. I bring a results-oriented
                  approach to every project. Proficient in crafting intuitive
                  user interfaces. I specialize in styling with Material UI,
                  Tailwind CSS, Bootstrap, and CSS. Driven by innovation and
                  fueled by a passion for problem-solving. I thrive in
                  collaborative environments, leveraging excellent teamwork
                  skills to deliver technical solutions that exceed
                  expectations. Highly motivated and adaptable. I possess strong
                  interpersonal abilities that enable seamless communication and
                  effective collaboration with diverse teams.
                </p>
                <div className="">
                  {myDetails.map((details, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 m-2  mt-6 text-base sm:text-sm md:text-xl lg:text-2xl"
                    >
                      <p className="font-semibold text-base">{details.key}:</p>
                      <p className="text-base sm:text-base  ">
                        {details.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-0 sm:ml-10 mt-6 sm:mt-0">
                <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl tracking-widest ">
                  Education
                </h1>
                <div className="flex flex-col items-start md:ml-4 sm:ml-0 mt-4 text-base sm:text-base md:text-lg lg:text-xl text-justify">
                  <p>
                    A proper education sets people up to grow personally,
                    professionally, and socially.
                  </p>
                  {mySkills.map((education) => (
                    <div
                      key={education.id}
                      className="pt-10 flex w-full sm:w-aut0"
                    >
                      <div className="hover:rotate-45 hover:transition hover:ease-in-out hover:delay-300 ">
                        <img
                          src={education.img}
                          alt=""
                          className="w-20 sm:w-16 md:w-20 mr-4 sm:mr-2 rounded-full "
                        />
                      </div>
                      <div className="m-1">
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.year}
                        </p>
                        <p className="font-bold text-base sm:text-lg md:text-xl">
                          {education.title}
                        </p>
                        <div className="lg:flex">
                          <p className="text-sm sm:text-base md:text-base">
                            {education.clg}
                          </p>
                          <p className="text-sm sm:text-sm md:text-base">
                            {education.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
