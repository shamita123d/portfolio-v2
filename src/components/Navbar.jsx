import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdClose, MdLightMode, MdMenu } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ShamitaDeogadelogo from "../assets/ShamitaDeogadelogo.jpg";

const Navbar = ({ setDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 mb-4 flex items-center justify-between relative">
      {/* Profile Picture and Name */}
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded mt-2"
          src={ShamitaDeogadelogo}
          alt="profilepic"
        />
        <h1 className="text-white font-bold animate-pulse text-2xl mx-2">
          Shamita
        </h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white p-2 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdLightMode /> : <CgDarkMode />}
        </button>
        <button
          className="text-white p-2 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-6 bg-gray-800 p-4 rounded-lg flex flex-col items-center gap-4 lg:hidden text-3xl">
          <a
            href="https://www.linkedin.com/in/shamitadeogade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/shamita123d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-all duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/shamita_deogade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-all duration-300"
          >
            <SiLeetcode className="w-8 h-8" />
          </a>
        </div>
      )}

      {/* Large Screen Icons */}
      <div className="m-8 flex items-center justify-center gap-6 text-3xl hidden lg:flex">
        <a
          href="https://www.linkedin.com/in/shamitadeogade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-all duration-300"
        >
          <FaLinkedin className="w-9 h-9" />
        </a>
        <a
          href="https://github.com/shamita123d"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-all duration-300"
        >
          <FaGithub className="w-9 h-9" />
        </a>
        <a
          href="https://leetcode.com/u/shamita_deogade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-all duration-300"
        >
          <SiLeetcode className="w-9 h-9" />
        </a>
        <button
          className="text-white p-2 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <MdLightMode className="w-9 h-9" />
          ) : (
            <CgDarkMode className="w-9 h-9" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
