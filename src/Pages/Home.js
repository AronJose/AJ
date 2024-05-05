import React from "react";
import aron from "../Assets/aron.jpg";

function Home() {
  return (
    <section id="home" className="pt-20 relative overflow-hidden bg-cover bg-no-repeat md:h-[600px] text-black bg-gradient-to-r from-sky-100 to-indigo-600 w-full">
      <div className="container mx-auto font-serif grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center md:pl-8 ">
          <div className="flex space-x-5 md:pb-8 ">
            <h2 className="text-black font-extrabold md:text-5xl sm:text-lg font-sans">
              Hello,
            </h2>
            <h2 className="text-red-600 font-extrabold md:text-5xl sm:text-lg">
              I'm
            </h2>
          </div>
          <div className="flex flex-col justify-start whitespace-nowrap">
            <h1 className="text-black font-extrabold md:text-[130px] sm:text-6xl text-3xl font-sans">
              Aron Jose
            </h1>
            <h5 className="text-black font-extrabold md:text-2xl sm:text-lg font-sans p-2">
              Fullstack Developer
            </h5>
          </div>
          <div className="text-black text-base px-4 italic font-light md:leading-loose md:text-lg ">
            <div className="md:flex gap-2">
              <p>I am a passionate </p><p className="font-bold">Full-Stack Developer </p><p>with expertise in the</p>
            </div>
            <p> MERN stack.</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={aron}
            alt=""
            className="md:ml-[160px] w-full md:max-w-[600px] sm:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
