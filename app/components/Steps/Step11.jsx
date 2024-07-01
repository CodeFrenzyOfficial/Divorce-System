import React, { useEffect, useState } from "react";
import useStore from "@/app/store/userStore";
const Step11 = ({ onNextStep }) => {
  const { formData, updateFormData } = useStore((state) => ({
    formData: state.formData.step11,
    updateFormData: state.updateFormData,
  }));

  const [isMilitary, setIsMilitary] = useState(formData.isMilitary || "");

  useEffect(() => {
    setIsMilitary(formData.isMilitary || "");
  }, [formData.isMilitary]);

  const handleChange = (e) => {
    setIsMilitary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isMilitary) {
      alert(
        "Please select whether you or your spouse is a member of the military."
      );
      return;
    }
    updateFormData("step11", { isMilitary });
    console.log("Military Information: ", isMilitary);
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white  rounded-lg">
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
