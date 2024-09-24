import React from "react";

const Stepper = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];

  const getStepColor = (step) => {
    if (step < currentStep || currentStep === 4)
      return "bg-green-500 text-white";
    if (step === currentStep) return "bg-blue-500 text-white";
    return "bg-gray-300 text-gray-600";
  };
  const getProgressColor = (step) => {
    if (step < currentStep) return "bg-green-500";
    if (step === currentStep)
      return "bg-gradient-to-r from-blue-500 from-60% to-[#EFF0F6] to-40%";
    return "bg-[#EFF0F6]";
  };

  return (
    <div className="flex justify-center gap-10 sm:gap-32 my-8 ">
      {steps.map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold relative
              ${getStepColor(step)}`}
          >
            {step}
            {step !== 4 && (
              <div
                className={`hidden sm:block sm:absolute sm:left-14 sm:h-[6px] sm:rounded sm:w-24 ${getProgressColor(
                  step
                )}`}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
