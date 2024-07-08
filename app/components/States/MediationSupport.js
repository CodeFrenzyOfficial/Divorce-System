import { dataJson } from "@/app/data/stateContent";
import React from "react";

const MediationSupport = () => {
  const { title, introduction, conditions, description } =
    dataJson.MediationSupport;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white">
        <h1 className="text-5xl font-medium text-center mb-6">{title}</h1>
        <div className="text-[#666666] text-base space-y-4">
          <p>{introduction}</p>
          <ul className="list-disc list-inside text-base">
            {conditions.map((condition, index) => (
              <li key={index} className="my-4">
                {condition}
              </li>
            ))}
          </ul>
          <p className="text-base mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MediationSupport;
