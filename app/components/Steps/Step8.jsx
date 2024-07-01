import React, { useEffect, useState } from "react";
import useStore from "@/app/store/userStore";

const Step8 = ({ onNextStep }) => {
  const { formData, updateFormData } = useStore((state) => ({
    formData: state.formData.step8,
    updateFormData: state.updateFormData,
  }));

  const [divisionDebt, setDivisionDebt] = useState(formData.divisionDebt || "");

  useEffect(() => {
    setDivisionDebt(formData.divisionDebt || "");
  }, [formData.divisionDebt]);

  const handleChange = (e) => {
    setDivisionDebt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!divisionDebt) {
      alert("Please select an option regarding your debt division plan.");
      return;
    }
    updateFormData("step8", { divisionDebt });
    console.log("Debt Division Plan:", divisionDebt);
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white  rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Community Debts</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          * Do you and your spouse plan to divide the debt you owe for money you
          borrowed together during the marriage equally?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="divisionDebt"
              value="Yes"
              checked={divisionDebt === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="divisionDebt"
              value="No"
              checked={divisionDebt === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
        <p className="text-sm text-gray-600">
          The debt for money you borrow this way is called “community debt” and
          is usually divided equally. More information on this topic will be
          provided after you complete your registration.
        </p>
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

export default Step8;
