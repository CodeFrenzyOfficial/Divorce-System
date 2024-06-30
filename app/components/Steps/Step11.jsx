"use client";
import React, { useState } from "react";

const Step11 = ({ onNextStep }) => {
  const [isMilitary, setIsMilitary] = useState("");

  const handleChange = (e) => {
    setIsMilitary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Military Information: ", isMilitary); // Log the military status
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Military Information</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">
          * Are either you or your spouse a member of the United States
          Military?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="militaryStatus"
              value="Yes"
              checked={isMilitary === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="militaryStatus"
              value="No"
              checked={isMilitary === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
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

export default Step11;
