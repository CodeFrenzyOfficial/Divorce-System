import { dataJson } from "@/app/data/stateContent";
import React from "react";
import { FaCheck } from "react-icons/fa";

const TileSection = () => {
  const {
    mainBannerText,
    description,
    serviceDescription,
    buttonText,
    onlineDivorceText,
    onlineDivorceList,
  } = dataJson.TileSection;
  return (
    <div className="mainbanner relative py-6 bg-[#106CC8] flex w-full  h-auto  md:min-h-[520px] md:max-h-[520px]">
      <div className="container mx-auto ">
        <div className="max-w-5xl py-5 font-lato w-full mx-auto">
          <div className="flex flex-col-reverse pt-28 md:pt-0 md:flex-row gap-4">
            <div className="start-form max-w-sm px-3 py-8 mx-auto">
              <h1 className="text-2xl">{mainBannerText}</h1>
              <p className="text-lg my-2">{description}</p>
              <div className="min-h-[100px] flex items-center p-3">
                <div className="relative bg-contain bg-center bg-no-repeat bg-[url(https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/banners/badge_empty_new.fb1e96bfaa99.svg)] h-32 w-32">
                  <h2 className="absolute top-[52px] left-7 right-0 bottom-0 text-sm">
                    $159
                  </h2>
                </div>
                <p className="text-lg font-semibold pl-2">
                  {serviceDescription}
                </p>
              </div>
              <button className="button-gradient w-full text-white font-bold py-2 px-4 rounded">
                {buttonText}
              </button>
            </div>
            <div className="text-white w-full mx-auto">
              <h1 className="font-bold text-3xl md:text-4xl">
                {onlineDivorceText}
              </h1>
              <ul className="py-3 list-disc space-y-1 ml-5 text-lg">
                {onlineDivorceList.map((item) => (
                  <li className="list-none py-2 flex items-center">
                    <span className="mr-2">
                      <FaCheck className="text-blue-400 text-4xl" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileSection;
