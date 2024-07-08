import { dataJson } from "@/app/data/stateContent";
import React from "react";

const OnlineDivorceSection = () => {
  const { title, image, paragraphs } = dataJson.OnlineDivorceSection;

  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-5xl text-center font-medium my-4">{title}</h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-auto">
          <img
            src={image}
            alt="Alabama Courthouse"
            className="h-auto w-auto rounded"
          />
        </div>
        <div className="md:w-2/3 md:pl-4 text-[#666666] flex flex-col gap-2 leading-4">
          {paragraphs.slice(0, 4).map((paragraph, index) => (
            <p key={index} className="text-base mt-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2 text-[#666666]">
        {paragraphs.slice(4, 6).map((paragraph, index) => (
          <p key={index} className="text-base mt-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OnlineDivorceSection;
