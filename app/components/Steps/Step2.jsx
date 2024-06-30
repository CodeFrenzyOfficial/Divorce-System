"use client";
import React, { useState } from "react";

const Step2 = ({ onNextStep }) => {
  const [formData, setFormData] = useState({
    postalCode: "",
    knowsSpouseLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onNextStep();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[15px] lg:gap-[15px]"
    >
      <div className="col-span-2 my-[15px]">
        <h1 className="text-[20px] md:text-[25px] lg:text-[30px]">
          Your current place of residence
        </h1>
      </div>

      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          * Your ZIP/Postal Code
        </label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          placeholder="Enter your ZIP/Postal Code"
          required
        />
      </div>

      <div className="col-span-2">
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700">
            * Do you know the location of your spouse?
          </legend>
          <div className="mt-2 space-y-4">
            <div className="flex items-center">
              <input
                id="yes"
                name="knowsSpouseLocation"
                type="radio"
                value="yes"
                checked={formData.knowsSpouseLocation === "yes"}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="yes"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="no"
                name="knowsSpouseLocation"
                type="radio"
                value="no"
                checked={formData.knowsSpouseLocation === "no"}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="no"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                No
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-md"
        >
          Save & Continue
        </button>
      </div>
    </form>
  );
};

export default Step2;
