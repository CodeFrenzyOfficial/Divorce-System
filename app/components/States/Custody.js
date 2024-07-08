import { dataJson } from "@/app/data/stateContent";
import React from "react";

const Custody = () => {
  const {
    title,
    introduction,
    considerations,
    additionalConsiderations,
    jointCustody,
    jointCustodyConsiderations,
    legalImplications,
    image,
  } = dataJson.Custody;

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
          {introduction.map((text, index) => (
            <p key={index} className="text-base">
              {text}
            </p>
          ))}
          <ul className="list-disc list-inside text-base">
            {considerations.map((item, index) => (
              <li key={index} className="my-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2 text-[#666666]">
        <ul className="list-disc list-inside text-base">
          {additionalConsiderations.map((item, index) => (
            <li key={index} className="my-4">
              {item}
            </li>
          ))}
        </ul>
        {jointCustody.map((text, index) => (
          <p key={index} className="text-base">
            {text}
          </p>
        ))}
        <ul className="list-disc list-inside text-base">
          {jointCustodyConsiderations.map((item, index) => (
            <li key={index} className="my-4">
              {item}
            </li>
          ))}
        </ul>
        {legalImplications.map((text, index) => (
          <p key={index} className="text-base">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Custody;
