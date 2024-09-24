const ProjectBudget = ({ value, error, touch, setFieldValue }) => {
  return (
    <div className="flex flex-col w-[100%] gap-9 md:h-[22.4rem]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-2xl font-bold text-[#170F49] ">
          What’s your project budget?
        </h2>
        <p className="text-[#6F6C90] mb-4 text-sm md:text-lg">
          Please select the project budget range you have in mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`border p-4 md:p-10 shadow-md rounded-2xl cursor-pointer flex gap-4 items-center ${
            value.price === "$5.000 - $10.000" ? "border-2 border-blue-600" : ""
          }`}
        >
          <input
            className="font-medium text-lg"
            id="first"
            type="radio"
            name="price"
            checked={value.price === "$5.000 - $10.000"}
            onChange={() => setFieldValue("price", "$5.000 - $10.000")}
          />
          <label htmlFor="first" className="font-medium text-lg cursor-pointer">
            $5.000 - $10.000
          </label>
        </div>
        <div
          className={`border p-4 md:p-10 shadow-md rounded-2xl cursor-pointer flex gap-4 items-center ${
            value.price === "$10.000 - $20.000"
              ? "border-2 border-blue-600"
              : ""
          }`}
        >
          <input
            className="font-medium text-lg"
            id="second"
            type="radio"
            name="price"
            checked={value.price === "$10.000 - $20.000"}
            onChange={() => setFieldValue("price", "$10.000 - $20.000")}
          />
          <label
            htmlFor="second"
            className="font-medium text-lg cursor-pointer"
          >
            $10.000 - $20.000
          </label>
        </div>
        <div
          className={`border p-4 md:p-10 shadow-md rounded-2xl cursor-pointer flex gap-4 items-center ${
            value.price === "$20.000 - $50.000"
              ? "border-2 border-blue-600"
              : ""
          }`}
        >
          <input
            className="font-medium text-lg"
            id="third"
            type="radio"
            name="price"
            checked={value.price === "$20.000 - $50.000"}
            onChange={() => setFieldValue("price", "$20.000 - $50.000")}
          />
          <label htmlFor="third" className="font-medium text-lg cursor-pointer">
            $20.000 - $50.000
          </label>
        </div>
        <div
          className={`border p-4 md:p-10 shadow-md rounded-2xl cursor-pointer flex gap-4 items-center ${
            value.price === "$50.000 +" ? "border-2 border-blue-600" : ""
          }`}
        >
          <input
            className="font-medium text-lg"
            id="fourth"
            type="radio"
            name="price"
            checked={value.price === "$50.000 +"}
            onChange={() => setFieldValue("price", "$50.000 +")}
          />
          <label
            htmlFor="fourth"
            className="font-medium text-lg cursor-pointer"
          >
            $50.000 +
          </label>
        </div>
        {error.price && <p className="text-red-600 ml-2">{error.price}</p>}
      </div>
    </div>
  );
};

export default ProjectBudget;
