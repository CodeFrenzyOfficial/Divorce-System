"use client";
import React, { useState } from "react";

const Step4 = ({ onNextStep }) => {
  const [formData, setFormData] = useState({
    ownsProperty: "",
    hasDebts: "",
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
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl font-semibold mb-5">Provide your case details</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Properties and Debts</h3>

        <label className="block font-medium mb-1">
          * Do you and your spouse own any property (such as homes, cars,
          furniture)?
        </label>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="ownsProperty"
              value="yes"
              checked={formData.ownsProperty === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="ownsProperty"
              value="no"
              checked={formData.ownsProperty === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>

        <label className="block font-medium mb-1">
          * Do you and your spouse have any debts (such as credit cards,
          mortgages, personal loans)?
        </label>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="hasDebts"
              value="yes"
              checked={formData.hasDebts === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasDebts"
              value="no"
              checked={formData.hasDebts === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <i className="fas fa-info-circle mr-2"></i>
          Debts include credit cards, bank loans, personal loans, unpaid bills,
          home mortgages, etc.
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded focus:outline-none"
      >
        Save & Continue
      </button>
    </form>
  );
};

export default Step4;
