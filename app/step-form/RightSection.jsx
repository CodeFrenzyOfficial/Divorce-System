import React from "react";

const steps = [
  { id: 1, title: "Information About Yourself" },
  { id: 2, title: "Your Current Place Of Residence" },
  { id: 3, title: "Children And Pregnancy" },
  { id: 4, title: "Properties And Debts" },
  { id: 5, title: "Filing Party" },
  { id: 6, title: "Current Home" },
  { id: 7, title: "Community Property" },
  { id: 8, title: "Community Debts" },
  { id: 9, title: "Other Income Sources" },
  { id: 10, title: "Money Owed" },
  { id: 11, title: "Military Information" },
  { id: 12, title: "Summary" },
  { id: 13, title: "Processing Fee" },
];

const RightSection = ({ changeStep, activeStep }) => {
  return (
    <div className="hidden lg:grid col-span-1 info">
      <ul>
        {steps.map((step) => (
          <li
            key={step.id}
            className={`relative pl-[20px] py-[15px] border-l-[1px] ${
              activeStep === step.id
                ? "active border-l-[#106cc8] text-[#106cc8]"
                : "border-l-[#8e8e8e80] text-[#8e8e8e80]"
            } cursor-pointer`}
            onClick={() => changeStep(step.id)}
          >
            {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSection;
