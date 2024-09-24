import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-[195px] flex items-center mt-3 md:mt-0 border-t-[1px] border-[#D9DBE9]">
      <div className="flex max-h-20 flex-col md:flex-row gap-6 md:gap-10 md:justify-between items-center w-[90%] md:w-[85%] mx-auto p-6 md:p-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start lg:h-[82px]">
          <img
            className="w-[80%] sm:[30%] lg:w-[262px] lg:h-[34px]"
            src="/images/Logo.png"
            alt="Logo not found"
          />
          <p className="text-gray-600 lg:text-[18px] text-center md:text-left font-normal leading-7">
            © 2021 BRIX Templates | All Rights Reserved
          </p>
        </div>

        {/* Subscribe Input */}
        <div className="relative w-full md:max-w-[350px] lg:max-w-[500px] shadow-md rounded-full">
          <form className="relative group">
            <input
              className="w-full lg:h-[73px] border-2 border-gray-300 px-4 py-3 rounded-full text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors duration-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button
              className="absolute right-2 top-1 lg:top-3 lg:h-[49px] bottom-1 bg-[#4A3AFF] px-4 sm:px-6 rounded-full text-white text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] shadow-md focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              type="submit"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
