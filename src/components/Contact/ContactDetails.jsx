import React from "react";

const ContactDetails = ({ value, onChange, onBlur, error, touch }) => {
  return (
    <div className="flex flex-col w-[100%] gap-9 md:h-[22.4rem]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-2xl font-bold text-[#170F49]">
          Contact details
        </h2>
        <p className="text-[#6F6C90] mb-4 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={value.name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="John Carter"
            className="mt-3 block shadow-md text-lg w-full md:h-16 py-4 md:py-5 pl-5 pr-10 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] "
          />
          {error.name && touch.name ? (
            <p className="mt-2 ml-2 text-red-600">{error.name}</p>
          ) : (
            ""
          )}
          <div className="absolute top-[3.7rem] md:top-16 right-5 pointer-events-none">
            <img src="/images/name_Icon.png" alt="" className="size-5" />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={value.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Email address"
            className="mt-3 block shadow-md text-lg w-full md:h-16 py-4 md:py-5 pl-5 pr-10 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
          />
          {error.email && touch.email ? (
            <p className="mt-2 ml-2 text-red-600">{error.email}</p>
          ) : (
            ""
          )}
          <div className="absolute top-[3.7rem] md:top-16 right-5 flex items-center pointer-events-none">
            <img src="/images/email_Icon.png" alt="" className="size-5" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone_number"
            value={value.phone_number}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="(123) 456 - 7890"
            className="mt-3 block shadow-md text-lg w-full md:h-16 py-4 md:py-5 pl-5 pr-10 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
          />
          {error.phone_number && touch.phone_number ? (
            <p className="mt-2 ml-2 text-red-600">{error.phone_number}</p>
          ) : (
            ""
          )}
          <div className="absolute top-[3.7rem] md:top-16 right-5 flex items-center pointer-events-none">
            <img src="/images/phone_Icon.png" alt="" className="size-5" />
          </div>
        </div>

        {/* Company */}
        <div className="relative">
          <label
            htmlFor="company"
            className="block text-lg font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={value.company}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Company name"
            className="mt-3 block shadow-md text-lg w-full md:h-16 py-4 md:py-5 pl-5 pr-10 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
          />
          {error.company && touch.company ? (
            <p className="mt-2 ml-2 text-red-600">{error.company}</p>
          ) : (
            ""
          )}
          <div className="absolute top-[3.7rem] md:top-16 right-5 flex items-center pointer-events-none">
            <img src="/images/company_Icon.png" alt="" className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
