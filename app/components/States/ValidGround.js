import { dataJson } from "@/app/data/stateContent";
import React from "react";

const ValidGround = () => {
  const { title, introParagraphs, noFaultReasons, faultReasons, image } =
    dataJson.ValidGround;

  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-3xl text-[#666666] text-center font-bold my-4">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-auto">
          <img
            src={image}
            alt="Alabama Courthouse"
            className="h-auto w-auto rounded"
          />
        </div>
        <div className="md:w-2/3 md:pl-4 text-[#666666] flex flex-col gap-2 leading-4">
          {introParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base mt-2">
              {paragraph}
            </p>
          ))}
          <p className="text-base mt-2">
            No-fault reasons for divorce in Alabama include:
          </p>
          <ul className="list-disc list-inside text-base">
            {noFaultReasons.map((reason, index) => (
              <li key={index} className="my-4">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2 text-[#666666]">
        <p className="text-base mt-2">General fault-based reasons include:</p>
        <ul className="list-disc list-inside text-base max-w-screen-lg">
          {faultReasons.map((reason, index) => (
            <li key={index} className="mt-4">
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ValidGround;
