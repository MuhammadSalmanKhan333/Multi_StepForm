import React from "react";

const Header = () => {
  return (
    <div className=" w-full flex justify-between items-center px-4 lg:px-36 py-4">
      <div className="">
        <img
          className="w-[70%] lg:w-[300px] lg:h-[40px]"
          src="/images/Logo.png"
          alt="Image not Find"
        />
      </div>
      <button className="lg:w-[171px] lg:h-[61px] px-8 py-2 lg:py-4 rounded-3xl lg:rounded-full text-center align-middle bg-[#4A3AFF] text-white text-md font-medium shadow-md text-lg ">
        Clone Now
      </button>
    </div>
  );
};

export default Header;
