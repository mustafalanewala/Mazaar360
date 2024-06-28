import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navBar, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between px-8 bg-black py-4 text-white">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mr-4 tracking-wider">Mazaar360</h1>
        </div>
        <ul className="flex justify-center flex-1 px-4 cursor-pointer">
          <li className="px-2 mr-4 text-xl">Home</li>
          <li className="px-2 mr-4 text-xl">Mazaars</li>
          <li className="px-2 mr-4 text-xl">Map View</li>
          <li className="px-2 mr-4 text-xl">Community</li>
          <li className="px-2 mr-4 text-xl">Gallery</li>
        </ul>
        <div>
          <button className="px-6 py-1.5 bg-white text-xl font-semibold text-black rounded-md mr-4">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between px-8 bg-black py-4 text-white">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mr-4">Mazaar360</h1>
        </div>
        <div className="flex items-center">
          <div className="flex sm:hidden" onClick={navbarHandler}>
            {navBar ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav Links and Button */}
      {navBar && (
        <div className="sm:hidden fixed top-0 left-0 h-screen w-full bg-black text-white">
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="text-2xl font-semibold">Mazaar360</h1>
            <div onClick={navbarHandler}>
              <AiOutlineClose size={30} />
            </div>
          </div>
          <ul className="flex flex-col items-center justify-center mt-24">
            <li className="mb-6 font-bold text-4xl">Home</li>
            <li className="mb-6 font-bold text-4xl">Mazaars</li>
            <li className="mb-6 font-bold text-4xl">Map View</li>
            <li className="mb-6 font-bold text-4xl">Community</li>
            <li className="mb-6 font-bold text-4xl">Gallery</li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button className="px-10 py-2 text-4xl font-bold bg-white text-black rounded-md">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

{/* <button class="group relative w-28 h-12 text-neutral-50 bg-neutral-800 p-2 overflow-hidden">
  <p class="absolute  font-bold z-10"> Button</p>
</button> */}

export default Navbar;
