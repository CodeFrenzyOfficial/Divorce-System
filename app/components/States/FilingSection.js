import { dataJson } from "@/app/data/stateContent";
import React from "react";

const FilingSection = () => {
  const { paragraphs } = dataJson.FilingSection;

  return (
    <div className="container mx-auto w-full p-4">
      <h1 className="text-3xl  text-start font-medium">Filing:</h1>
      <div className="leading-1 flex flex-col gap-2  text-[#666666]">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base mt-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilingSection;
