import React, { useState } from "react";

const Services = ({ setFieldValue, value, error }) => {
  const handleServiceSelect = (service) => {
    let services = value?.service || [];
    // means service is added already and now will be removed
    if (services.includes(service)) {
      services = services.filter((s) => s !== service);
    } else {
      services.push(service);
    }
    setFieldValue("service", services);
  };

  console.log(value?.service);

  return (
    <div className="flex flex-col w-[100%] gap-9 md:h-[22.4rem]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-[#170F49]">Our Services</h2>
        <p className="text-[#6F6C90] mb-4 text-lg">
          Please select which service you are interested in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => handleServiceSelect("development")}
          className={`border p-4 md:p-6 rounded-2xl shadow-md cursor-pointer flex gap-4 items-center
           ${value.service.includes("development") ? "border-blue-600" : ""}`}
        >
          <div className="p-3 rounded-full bg-[#dcd4f4]">
            <img
              className="size-5 md:size-8 rounded bg-white box-content"
              src="/images/webDev.png"
              alt="image not loaded"
            />
          </div>
          <p className="text-lg font-medium">Development</p>
        </div>
        <div
          onClick={() => handleServiceSelect("designing")}
          className={`border p-4 md:p-6 rounded-2xl shadow-md cursor-pointer flex gap-4 items-center
           ${value.service.includes("designing") ? "border-blue-600" : ""}`}
        >
          <div className="p-3 rounded-full bg-[#dcd4f4]">
            <img
              className="size-5 md:size-8 rounded bg-white box-content"
              src="/images/webDesign.png"
              alt="image not loaded"
            />
          </div>
          <p className="text-lg font-medium">Web Design</p>
        </div>
        <div
          onClick={() => handleServiceSelect("marketing")}
          className={`border p-4 md:p-6 rounded-2xl shadow-md cursor-pointer flex gap-4 items-center
           ${value.service.includes("marketing") ? "border-blue-600" : ""}`}
        >
          <div className="p-3 rounded-full bg-[#dcd4f4]">
            <img
              className="size-5 md:size-8 rounded-full box-content"
              src="/images/marketing.png"
              alt="image not loaded"
            />
          </div>
          <p className="text-lg font-medium">Marketing</p>
        </div>
        <div
          onClick={() => handleServiceSelect("others")}
          className={`border p-4 md:p-6 rounded-2xl shadow-md cursor-pointer flex gap-4 items-center
           ${value.service.includes("others") ? "border-blue-600" : ""}`}
        >
          <div className="p-3 rounded-full bg-[#dcd4f4]">
            <img
              className="size-5 md:size-8 rounded-xl box-content"
              src="/images/others.png"
              alt="image not loaded"
            />
          </div>
          <p className="text-lg font-medium">Others</p>
        </div>
        {error.service && <p>{error.service}</p>}
      </div>
    </div>
  );
};

export default Services;
