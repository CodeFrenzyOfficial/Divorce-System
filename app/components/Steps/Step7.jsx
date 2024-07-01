import React, { useEffect, useState } from "react";
import useStore from "@/app/store/userStore";

const Step7 = ({ onNextStep }) => {
  const { formData, updateFormData } = useStore((state) => ({
    formData: state.formData.step7,
    updateFormData: state.updateFormData,
  }));

  const [divisionPlan, setDivisionPlan] = useState(formData.divisionPlan || "");

  useEffect(() => {
    setDivisionPlan(formData.divisionPlan || "");
  }, [formData.divisionPlan]);

  const handleChange = (e) => {
    setDivisionPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!divisionPlan) {
      alert("Please select an option regarding your division plan.");
      return;
    }
    updateFormData("step7", { divisionPlan });
    console.log("Division Plan:", divisionPlan);
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white  rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Community Property</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          * Do you and your spouse plan to divide the things you bought together
          during the marriage equally?
        </h3>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="divisionPlan"
              value="Yes"
              checked={divisionPlan === "Yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="divisionPlan"
              value="No"
              checked={divisionPlan === "No"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="divisionPlan"
              value="Not Sure"
              checked={divisionPlan === "Not Sure"}
              onChange={handleChange}
              className="mr-2"
            />
            Not Sure
          </label>
        </div>
        <p className="text-sm text-gray-600">
          Property purchased this way is called “community property” and is
          usually divided equally. More information on this topic will be
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

export default Step7;
