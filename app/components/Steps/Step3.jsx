"use client";
import React, { useState } from "react";

const Step3 = ({ onNextStep }) => {
  const [formData, setFormData] = useState({
    numberOfChildren: "",
    isPregnant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // This would log the data to the console
    onNextStep(); // This would move to the next step in the form process
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white ">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Children and Pregnancy</h3>
        <label htmlFor="numberOfChildren" className="block font-medium mb-1">
          * How many children do you and your spouse have, if any?
        </label>
        <select
          name="numberOfChildren"
          id="numberOfChildren"
          value={formData.numberOfChildren}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-2"
          required
        >
          <option value="">Select</option>
          <option value="0">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <p className="text-sm text-gray-600 mb-4">
          OnlineDivorce.com can handle agreements involving children. If you
          have children—you and your current spouse are the parents through
          natural parentage or adoption—please tell us how many. NOTE: Only
          count children under 18 who are dependent on you and your spouse for
          support. If there are no children, select "None."
        </p>
        <label className="block font-medium mb-1">
          * Is either of you pregnant?
        </label>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="isPregnant"
              value="yes"
              checked={formData.isPregnant === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="isPregnant"
              value="no"
              checked={formData.isPregnant === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="isPregnant"
              value="not sure"
              checked={formData.isPregnant === "not sure"}
              onChange={handleChange}
              className="mr-2"
            />
            Not Sure
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded focus:outline-none focus:shadow-outline"
      >
        Save & Continue
      </button>
    </form>
  );
};

export default Step3;
