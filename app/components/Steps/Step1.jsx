"use client";
import React from "react";

const Step1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[15px] lg:gap-[15px]">
      <div className="col-span-2 my-[15px]">
        <h1 className="text-[20px] md:text-[25px] lg:text-[30px]">
          Information about yourself
        </h1>
      </div>

      <div className="col-span-2 lg:col-span-1 my-[15px]">
        <p className="text-[14px] lg:text-[16px] mr-[10px] ">
          * Can you and your spouse agree to the division of property, assets
          and all child related issues?
        </p>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <span className="text-[18px] mr-[20px]">
          <input className="mr-[5px]" type="radio" />
          Yes
        </span>

        <span className="text-[18px]">
          <input className="mr-[5px]" type="radio" />
          No
        </span>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <p className="text-[14px] lg:text-[16px] mr-[20px]">* First Name</p>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <input
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <p className="text-[14px] lg:text-[16px] mr-[20px]">* Middle Name</p>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <input
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="text"
          name=""
          id=""
          placeholder="Middle Name"
        />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <p className="text-[14px] lg:text-[16px] mr-[20px]">* Last Name</p>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <input
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="text"
          name=""
          id=""
          placeholder="Last Name"
        />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <p className="text-[14px] lg:text-[16px] mr-[20px]">* Email Address</p>
      </div>

      <div className="col-span-1">
        <input
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="email"
          name=""
          id=""
          placeholder="Email Address"
        />
      </div>

      <div className="col-span-2 grid place-items-center">
        <a className="" href="#">
          <button className=" w-full px-[30px] mt-[25px] lg:mt-[50px] font-semibold text-center text-white bg-[#106cc8] py-[16px]  border-[1px] rounded-[5px] mb-[10px] outline-none transition-all duration-200 hover:focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)] ">
            Save & Continue
          </button>
        </a>
      </div>
    </div>
  );
};

export default Step1;
