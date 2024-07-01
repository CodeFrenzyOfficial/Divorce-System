import React, { useEffect, useState } from "react";
import useStore from "@/app/store/userStore";
const Step5 = ({ onNextStep }) => {
  const { formData, updateFormData } = useStore((state) => ({
    formData: state.formData.step5,
    updateFormData: state.updateFormData,
  }));

  const [petitioner, setPetitioner] = useState(formData.petitioner || "");

  useEffect(() => {
    setPetitioner(formData.petitioner || "");
  }, [formData.petitioner]);

  const handleChange = (e) => {
    setPetitioner(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!petitioner) {
      alert("Please choose who will be the petitioner in this case.");
      return;
    }
    updateFormData("step5", { petitioner });
    console.log("Chosen petitioner:", petitioner);
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white  rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Provide your case details</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Filing Party</h3>

        <label className="block font-medium mb-1">
          * Who will be the petitioner in this case?
        </label>
        <div className="flex items-center mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="petitioner"
              value="Myself"
              checked={petitioner === "Myself"}
              onChange={handleChange}
              className="mr-2"
            />
            Myself
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="petitioner"
              value="My Spouse"
              checked={petitioner === "My Spouse"}
              onChange={handleChange}
              className="mr-2"
            />
            My Spouse
          </label>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <i className="fas fa-info-circle mr-2"></i>
          It is necessary that only one of the spouses, not both, be designated
          as the Petitioner (party filing the case), even if the parties agree
          on the terms of their case. The Petitioner is simply the spouse that
          files the case and the other spouse is the Respondent.
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

export default Step5;
