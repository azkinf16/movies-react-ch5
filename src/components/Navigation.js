import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Navigation() {
  return (
    <div className="flex items-center justify-between p-4 z-10 absolute w-full">
      <img
        src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
        alt="logo"
      />
      <div className="bg-transparent border-solid border-2 border-gray-400/50 rounded-full hover:ring-red-300 hover:ring-1 flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="What do you want to watch?"
        />
        <AiOutlineSearch size={25} style={{ color: "#F5B6B7" }} />
      </div>
      <div>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
          Login
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navigation;
