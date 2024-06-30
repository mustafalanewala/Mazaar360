import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">Mazaar360</div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <a
            href="#"
            className="text-white text-xl font-medium mr-8 relative hover:before:content-[''] hover:before:absolute hover:before:w-1 hover:before:h-1 hover:before:bg-white hover:before:rounded-full hover:before:-bottom-1 hover:before:left-1/2 hover:before:transform hover:before:-translate-x-1/2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-xl font-medium mr-8 relative hover:before:content-[''] hover:before:absolute hover:before:w-1 hover:before:h-1 hover:before:bg-white hover:before:rounded-full hover:before:-bottom-1 hover:before:left-1/2 hover:before:transform hover:before:-translate-x-1/2"
          >
            Mazaars
          </a>
          <a
            href="#"
            className="text-white text-xl font-medium mr-8 relative hover:before:content-[''] hover:before:absolute hover:before:w-1 hover:before:h-1 hover:before:bg-white hover:before:rounded-full hover:before:-bottom-1 hover:before:left-1/2 hover:before:transform hover:before:-translate-x-1/2"
          >
            Map
          </a>
          <a
            href="#"
            className="text-white text-xl font-medium mr-8 relative hover:before:content-[''] hover:before:absolute hover:before:w-1 hover:before:h-1 hover:before:bg-white hover:before:rounded-full hover:before:-bottom-1 hover:before:left-1/2 hover:before:transform hover:before:-translate-x-1/2"
          >
            Community
          </a>
          <a
            href="#"
            className="text-white text-xl font-medium mr-8 relative hover:before:content-[''] hover:before:absolute hover:before:w-1 hover:before:h-1 hover:before:bg-white hover:before:rounded-full hover:before:-bottom-1 hover:before:left-1/2 hover:before:transform hover:before:-translate-x-1/2"
          >
            Garden
          </a>
          <button
            type="button"
            className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
          >
            Log In
          </button>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleNav}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleNav}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-4 mt-10">
          <a
            href="#"
            className="text-white font-bold text-4xl my-2 hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-bold text-4xl my-2 hover:underline"
          >
            Mazaars
          </a>
          <a
            href="#"
            className="text-white font-bold text-4xl my-2 hover:underline"
          >
            Map
          </a>
          <a
            href="#"
            className="text-white font-bold text-4xl my-2 hover:underline"
          >
            Community
          </a>
          <a
            href="#"
            className="text-white font-bold text-4xl my-2 hover:underline"
          >
            Gallery
          </a>
          <button
            type="button"
            className="py-3 px-7 my-4 inline-flex items-center gap-x-2 text-3xl font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
          >
            Log In
          </button>
        </div>
      </div>
      
      )}
    </nav>
  );
};

export default Navbar;
