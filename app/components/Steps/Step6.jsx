"use client";
import React, { useState } from "react";

const Step6 = ({ onNextStep }) => {
  const [livingSituation, setLivingSituation] = useState("");

  const handleChange = (e) => {
    setLivingSituation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Living Situation:", livingSituation); // Log the chosen option
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Current Home</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          * Are you and your spouse currently living together or living apart in
          separate residences?
        </h3>
        <div className="flex items-center">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="livingSituation"
              value="Together"
              checked={livingSituation === "Together"}
              onChange={handleChange}
              className="mr-2"
            />
            Together
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="livingSituation"
              value="Apart"
              checked={livingSituation === "Apart"}
              onChange={handleChange}
              className="mr-2"
            />
            Apart
          </label>
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

export default Step6;
