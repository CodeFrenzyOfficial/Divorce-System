import { dataJson } from "@/app/data/stateContent";
import React from "react";

const ResidencySection = () => {
  const { title, introText, residencyRequirements, additionalInfo } =
    dataJson.ResidencySection;

  return (
    <div className="container mx-auto w-full p-4">
      <h1 className="text-3xl text-start font-medium">{title}</h1>
      <div className="leading-1 flex flex-col gap-2 text-[#666666]">
        <p className="text-base mt-2">{introText}</p>
        <ul className="list-disc list-inside">
          {residencyRequirements.map((requirement, index) => (
            <li key={index} className="text-base mt-2">
              {requirement}
            </li>
          ))}
        </ul>
        {additionalInfo.map((info, index) => (
          <p key={index} className="text-base mt-2">
            {info}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResidencySection;
