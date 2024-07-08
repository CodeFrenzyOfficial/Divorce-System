import { dataJson } from "@/app/data/stateContent";
import React from "react";

const ChildSupportRules = () => {
  const { title, paragraphs } = dataJson.ChildSupportRules;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white">
        <h1 className="text-5xl font-medium text-center mb-6">{title}</h1>
        <div className="text-[#666666] text-base space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildSupportRules;
