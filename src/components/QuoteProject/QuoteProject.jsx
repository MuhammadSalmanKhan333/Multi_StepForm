import React, { useState } from "react";
import Form from "../Form/Form";

const QuoteProject = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="bg-white w-full sm:max-w-[699px] mt-[3.2rem] min-h-[869.3px] mb-24">
      <div className="mx-auto w-[80%] flex flex-col gap-2 text-center">
        <h1 className="text-[34px] font-bold text-center leading-10">
          Get a Project Quote
        </h1>
        <p className="text-[18px] font-normal text-center text-gray-500 mt-3 leading-7">
          Please fill a form to receive a quote from your project. Feel free top
          add as much details as needed
        </p>
      </div>
      <div className="w-[100%]">
        <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div
          className={`flex justify-end ${
            currentStep > 1 ? "justify-between" : ""
          } max-w-full`}
        >
          {currentStep > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-white border border-[#4A3AFF] text-[#4A3AFF] py-2 px-4 rounded-full hover:bg-blue-100"
            >
              Previous step
            </button>
          )}
          {currentStep < 4 && (
            <button
              onClick={handleNext}
              className="bg-[#4A3AFF] text-white py-2 px-4 rounded-full hover:bg-[#4A3AFF]"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteProject;

{
  /* {currentStep === 2 ? "Submit" : "Next step"} */
}
