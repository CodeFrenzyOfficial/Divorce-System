import React from "react";

const Banner1 = () => {
  return (
    <div className=" w-full">
      <div className="banner1">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div className="basis-8/12 flex flex-col   items-start justify-center ">
            <h2 className="text-3xl font-bold text-white">
              Check if you qualify for an online divorce in Alabama
            </h2>
            <h2 className="text-lg font-bold text-white mt-4">
              Get your ready-to-file Alabama divorce paperwork
            </h2>
          </div>
          <div className="basis-4/12">
            <button className="button-gradient w-full max-w-[320px] min-h-[41px]  text-white">
              <a href="#">Start now for just $159</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
