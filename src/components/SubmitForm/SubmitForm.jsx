import React from "react";

const SubmitForm = () => {
  return (
    <div className="container flex flex-col items-center gap-4">
      <div className="siz-24 lg:size-32">
        <img src="/images/done.svg" alt="image not loaded" />
      </div>
      <div className="flex flex-col items-center text-center gap-4 max-w-[380px]">
        <h1 className="font-bold text-lg lg:text-2xl">
          Submit your quote request
        </h1>
        <p className="text-sm lg:text-lg lg:font-normal text-[#6F6C90]">
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
        <button
          type="submit"
          className="bg-[#4A3AFF] text-white py-3 px-6 lg:px-9 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitForm;
