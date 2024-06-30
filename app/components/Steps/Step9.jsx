"use client";
import React, { useState } from "react";

const Step9 = ({ onNextStep }) => {
  const [incomeSources, setIncomeSources] = useState({
    userIncome: "",
    spouseIncome: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeSources((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Income Sources:", incomeSources); // Log the choices
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl font-semibold mb-5">Other Income Sources</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">
          * Do you have sources of income other than your employment?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="userIncome"
              value="Yes"
              checked={incomeSources.userIncome === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="userIncome"
              value="No"
              checked={incomeSources.userIncome === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="userIncome"
              value="Not Sure"
              checked={incomeSources.userIncome === "Not Sure"}
              onChange={handleChange}
              className="mr-2"
            />
            Not Sure
          </label>
        </div>

        <h3 className="font-semibold mb-2">
          * Does your spouse have sources of income other than employment?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="spouseIncome"
              value="Yes"
              checked={incomeSources.spouseIncome === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="spouseIncome"
              value="No"
              checked={incomeSources.spouseIncome === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="spouseIncome"
              value="Not Sure"
              checked={incomeSources.spouseIncome === "Not Sure"}
              onChange={handleChange}
              className="mr-2"
            />
            Not Sure
          </label>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        This would include income from investments, inheritance, dividends,
        rental income, etc.
      </p>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded focus:outline-none"
      >
        Save & Continue
      </button>
    </form>
  );
};

export default Step9;
