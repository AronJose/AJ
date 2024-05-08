import React from "react";
import aron from "../Assets/aron.jpg";
import bg from "../Assets/bg.jpg";

function Home() {
  return (
    <section
      id="home"
      className="md:pt-[82px] pt-[110px] relative overflow-hidden bg-cover bg-no-repeat lg:h-[600px] text-black w-full shadow-2xl md:bg-blend-darken"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto font-serif grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col md:justify-center lg:justify-center lg:items-start pl-2 ">
          <div className="flex space-x-5 md:pb-4">
            <h2 className="text-black font-extrabold lg:text-5xl md:text-3xl sm:text-lg font-sans">
              Hello,
            </h2>
            <h2 className="text-red-600 font-extrabold lg:text-5xl md:text-3xl sm:text-lg">
              I'm
            </h2>
          </div>
          <div className="flex flex-col justify-start lg:whitespace-nowrap ">
            <h1 className="text-black font-extrabold lg:text-[110px] sm:text-6xl text-5xl md:text-5xl font-sans">
              Aron Jose
            </h1>
            <div className="md:flex ">
              <h5 className="text-black font-extrabold md:text-2xl sm:text-lg font-sans p-2">
                Fullstack Developer
              </h5>
              {/* linkdin */}
              <a href="https://www.linkedin.com/in/aron-jose-5a5640201/">
                <button
                  type="button"
                  className="m-2 p-2 rounded w-[30px] h-[30px] text-white"
                  style={{ backgroundColor: "#0077b5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </a>
              {/* ------------------------------------- */}
              <a href="https://github.com/AronJose?tab=repositories">
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  class="mt-2 p-2 rounded w-[30px] h-[30px] text-white bg-gray-900"
                >
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="text-black text-base px-4 italic font-light md:leading-loose md:text-lg">
            <div className=" lg:flex lg:gap-2 whitespace-nowrap">
              <p>I am a passionate </p>
              <p className="font-bold ">Full-Stack Developer </p>
              <p>with expertise in the</p>
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
