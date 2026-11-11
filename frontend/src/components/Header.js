import React, { useState } from "react";
import aj from '../Assets/aj.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="bg-white shadow-2xl md:bg-blend-darken md:flex md:justify-between md:items-center md:h-20 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        <div className="flex-shrink-0">
          <div className="">
            <img src={aj} alt="" className="w-[80px] h-[70px] rounded-full" />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-black hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm16 5H4a1 1 0 100 2h16a1 1 0 100-2zm0 5H4a1 1 0 100 2h16a1 1 0 100-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:p-0`}
      >
        <ul className="md:flex flex-col md:flex-row md:space-x-10 md:mx-10">
          <li>
            <a
              href="#home"
              className="block md:inline-block text-black font-bold"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block md:inline-block text-black font-bold"
              onClick={closeMenu}

            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="block md:inline-block text-black font-bold"
              onClick={closeMenu}

            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block md:inline-block text-black font-bold"
              onClick={closeMenu}

            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
