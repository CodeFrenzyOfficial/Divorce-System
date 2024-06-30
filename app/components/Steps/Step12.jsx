"use client";
import React from "react";

const Step12 = ({ onNextStep }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow divide-y divide-gray-200">
      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Account Information</h2>
        <p className="text-sm">
          Please set your password so that you can access your information at
          any time.
        </p>
        <div className="flex justify-between items-center mt-2">
          <span>Password (minimum 5 characters)</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Your state of Residence</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Georgia</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">
          Information about yourself
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span>sadf sdf</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">
          Your current place of residence
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span>560000</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Children & Pregnancy</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Children: 3</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Property & Debts</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Property: No</span>
          <span>Community Property: Yes</span>
          <span>Community Debts: Yes</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Your Information</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Who will file divorce: Myself</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Current Home</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Together</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Other Income Sources</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Yes</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Money Owed</h2>
        <div className="flex justify-between items-center mt-2">
          <span>No</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Military Information</h2>
        <div className="flex justify-between items-center mt-2">
          <span>Yes</span>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={onNextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Step12;
