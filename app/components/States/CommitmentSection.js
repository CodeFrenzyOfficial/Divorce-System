import { dataJson } from "@/app/data/stateContent";
import React from "react";

const CommitmentSection = () => {
  const { title, description, features } = dataJson.CommitmentSection;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-start">
        <h2 className="text-5xl font-medium mb-4">{title}</h2>
        <p className="mb-20 text-base">{description}</p>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start gap-2">
            <img
              src={feature.image}
              alt={feature.title.toLowerCase()}
              className="w-[50px] h-[50px] mb-2"
            />
            <h3 className="font-medium text-lg">{feature.title}</h3>
            <p className="text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitmentSection;
