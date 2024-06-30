"use client";
import React, { useState } from "react";

const Step10 = ({ onNextStep }) => {
  const [moneyOwed, setMoneyOwed] = useState({
    oweSpouse: "",
    spouseOweMe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoneyOwed((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Money Owed Details:", moneyOwed); // Log the chosen options
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Money Owed</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">* Do you owe your spouse money?</h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="oweSpouse"
              value="Yes"
              checked={moneyOwed.oweSpouse === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="oweSpouse"
              value="No"
              checked={moneyOwed.oweSpouse === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>

        <h3 className="font-semibold mb-2">
          * Does your spouse owe you money?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="spouseOweMe"
              value="Yes"
              checked={moneyOwed.spouseOweMe === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="spouseOweMe"
              value="No"
              checked={moneyOwed.spouseOweMe === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Money you owe each other could include unpaid child support or personal
        loans.
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

export default Step10;
