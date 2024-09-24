import React from "react";
import Stepper from "../StepCounter/StepsCounter"; // Import the new Stepper component
import ContactDetails from "../Contact/ContactDetails";
import Services from "../ServicesForm/Services";
import ProjectBudget from "../ProjectBudget/ProjectBudget";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useFormik } from "formik";
import { formValidaion } from "../../Schemas";

const Form = ({ currentStep, setCurrentStep }) => {
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    company: "",
    price: "",
    service: [],
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidaion,
    onSubmit: (values, action) => {
      console.log("🚀 ~ Form ~ values:", values);
      action.resetForm();
      setCurrentStep(1);
    },
  });

  // const totalSteps = 4;

  return (
    <div className="bg-white min-h-[606px] rounded-[2rem] shadow-[0px_0px_16px_rgba(0,0,0,0.1)] px-6 py-4 md:px-10 md:py-5 w-[100%] mt-10 mb-8">
      <Stepper currentStep={currentStep} />
      <div className="border-t-[1px] border-gray-300 mb-16 w-[95%] mx-auto"></div>
      <form action="" className="" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <ContactDetails
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors}
            touch={touched}
          />
        )}
        {currentStep === 2 && (
          <Services
            setFieldValue={setFieldValue}
            value={values}
            error={errors}
          />
        )}
        {currentStep === 3 && (
          <ProjectBudget
            value={values}
            setFieldValue={setFieldValue}
            error={errors}
          />
        )}
        {currentStep === 4 && <SubmitForm />}
      </form>
    </div>
  );
};

export default Form;
