"use client";
import React, { useState } from "react";

import { TbDiscountCheckFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import Footer from "../components/Footer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function page() {
  const [activeStep, setActiveStep] = useState(1);

  const onNextStep = () => {
    setActiveStep((currentStep) => currentStep + 1);
  };

  const changeStep = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="nav border-b-[1px] md:shadow-none	 shadow-[0_2px_4px_rgba(0,0,0,.200238)] ">
        <div className="max-w-[1420px] mx-auto py-[20px] ">
          <img
            className="mx-auto lg:w-[275px] lg:m-0 "
            src="/img/logo.webp"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto pb-[20px] px-[15px]">
        <div className="hidden lg:grid grid-cols-4 border-[1px] mt-10 ">
          <div className="col-span-1 text-center p-[10px] border-r-[1px]">
            <p className="text-[18px] flex justify-center items-center ">
              <TiTick className="text-[#3895f2] text-[20px]  lg:text-[30px]" />
              Step 1: Qualify for divorce
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px] border-r-[1px]">
            <p className=" text-[14px] lg:text-[18px]">
              Step 2: Provide your details
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px] border-r-[1px]">
            <p className="text-[14px] lg:text-[18px]">
              Step 3: Get your papers
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px]">
            <p className="text-[14px] lg:text-[18px]">
              Step 4: File for divorce
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-[20px]">
          <div className="col-span-2">
            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] font-normal">
              Provide your case details
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Please answer the following questions and then click the "Save &
              Continue" button
            </p>
          </div>

          <a href="#">
            <div className="col-span-1 flex items-center">
              <TbDiscountCheckFilled className="text-[70px] text-[#3895f2]" />

              <h2 className="text-[18px] md:text-[20px] lg:text-[22px]">
                Service Satisfaction Guaranteed
              </h2>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[25px] lg:mt-[50px]  gap-[60px]">
          <div className="col-span-2 px-[20px] lg:px-[30px] border-[1px]">
            <LeftSection activeStep={activeStep} onNextStep={onNextStep} />
          </div>
          <RightSection changeStep={changeStep} activeStep={activeStep} />
        </div>

        <div className="nav border-b-[1px] mt-[50px]">
          <div className=" mx-auto py-[20px]">
            <img
              className="mx-auto md:m-0 w-[275px]"
              src="/img/logo.webp"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4  border-b-[1px] py-[20px] ">
          <div className="col-span-1 text-start lg:text-center p-[10px] lg:flex justify-center items-center ">
            <div>
              <FaLocationDot className=" hidden lg:block text-[#3895f2] mr-[20px] text-[40px]" />
            </div>
            <div>
              {" "}
              <p className="text-[14px]  text-start  ">
                Address: OnlineDivorce.com LLC, 200
              </p>
              <p className="text-[12px]  text-start  ">
                {" "}
                Continental Drive, Suite 401, Newark, DE 19713
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:text-center p-[10px] lg:flex justify-center items-center ">
            <div>
              <FaPhone className="hidden lg:block text-[#3895f2] mr-[20px] text-[40px]" />
            </div>
            <div>
              {" "}
              <p className="text-[14px]  text-start  ">Phone: 1 877 503 0262</p>
              <p className="text-[14px]  text-start  ">
                Mon-Fri 10:00AM to 8:00PM EST
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:text-center p-[10px] lg:flex justify-center items-center ">
            <div>
              <CiGlobe className="hidden lg:block text-[#3895f2] mr-[20px] text-[40px]" />
            </div>
            <div>
              <p className="text-[14px]  text-start  ">Website:</p>
              <p className="text-[14px]  text-start  ">OnlineDivorce.com</p>
            </div>
          </div>

          <div className="col-span-1 text-center p-[10px] "></div>
        </div>

        <Footer />
      </div>
    </>
  );
}
