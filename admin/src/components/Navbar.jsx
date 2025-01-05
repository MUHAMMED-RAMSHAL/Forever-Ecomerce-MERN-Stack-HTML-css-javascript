// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 justify-between px-[4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
