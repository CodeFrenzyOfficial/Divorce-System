import React from "react";

import { TbDiscountCheckFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export default function page() {
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
        <div className="hidden lg:grid grid-cols-4 border-[1px] ">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[15px] lg:gap-[15px]">
              <div className="col-span-2 my-[15px]">
                <h1 className="text-[20px] md:text-[25px] lg:text-[30px]">
                  Information about yourself
                </h1>
              </div>

              <div className="col-span-2 lg:col-span-1 my-[15px]">
                <p className="text-[14px] lg:text-[16px] mr-[10px] ">
                  * Can you and your spouse agree to the division of property,
                  assets and all child related issues?
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
                <p className="text-[14px] lg:text-[16px] mr-[20px]">
                  * First Name
                </p>
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
                <p className="text-[14px] lg:text-[16px] mr-[20px]">
                  * Middle Name
                </p>
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
                <p className="text-[14px] lg:text-[16px] mr-[20px]">
                  * Last Name
                </p>
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
                <p className="text-[14px] lg:text-[16px] mr-[20px]">
                  * Email Address
                </p>
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
          </div>

          <div className="hidden lg:grid col-span-1 info ">
            <ul>
              <li className="text-[#106cc8] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#106cc8] ">
                <a href="#">Information About Yourself</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Your Current Place Of Residence</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Children And Pregnancy</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Properties And Debts</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Filing Party</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Current Home</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Community Property</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Community Debts</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Other Income Sources</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Money Owed</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Military Information</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Summary</a>
              </li>
              <li className="text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80] ">
                <a href="#">Processing Fee</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:hidden lg:grid grid-cols-4  ">
          <div className="col-span-1 text-center p-[10px] border-b-[1px]">
            <p className="text-[14px] flex justify-center items-center ">
              <TiTick className="text-[#3895f2] text-[18px]  lg:text-[30px]" />
              Step 1: Qualify for divorce
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px] border-b-[1px]">
            <p className=" text-[14px] lg:text-[18px]">
              Step 2: Provide your details
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px] border-b-[1px]">
            <p className="text-[14px] lg:text-[18px]">
              Step 3: Get your papers
            </p>
          </div>

          <div className="col-span-1 text-center p-[10px] border-b-[1px]">
            <p className="text-[14px] lg:text-[18px]">
              Step 4: File for divorce
            </p>
          </div>
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
              {" "}
              <p className="text-[14px]  text-start  ">Website:</p>
              <p className="text-[14px]  text-start  ">OnlineDivorce.com</p>
            </div>
          </div>

          <div className="col-span-1 text-center p-[10px] "></div>
        </div>

        <a href="#">
          <h2 className="text-[18px] text-[#3895f2] py-[5px]">
            Sample Documents by State
          </h2>
        </a>

        <p className="text-[12px] py-[5px]">
          © 2000-2024 OnlineDivorce.com, LLC OnlineDivorce.com, All Rights
          Reserved
        </p>

        <p className=" text-[14px]  py-[5px]">
          <b>Disclaimer:</b> OnlineDivorce is not a law firm and its services,
          website, forms or templates are not a substitute for the advice or
          services of an attorney. OnlineDivorce provides access to
          computer-aided self-help services at your specific direction.
          OnlineDivorce's website and written instructions provide general
          information about the divorce process only; we cannot give you any
          specific advice, opinions or recommendations as to your selection or
          completion of forms or your particular legal rights, remedies or
          options. OnlineDivorce.com is a website that provides access to
          self-guided online questionnaires. OnlineDivorce does not sell blank
          forms. You may be able to download blank forms from a government
          website depending on your state. Communications between you and
          OnlineDivorce are governed by our
          <a href="#"> Privacy Policy</a> but are <b>not covered</b> by the
          attorney-client or work product privileges. Your access to
          OnlineDivorce's website is subject to and governed by our{" "}
          <a href="#" className="text-[#3895f2]">
            Terms of Use
          </a>
          . Any purchase from OnlineDivorce is subject to and governed by our{" "}
          <a href="#" className="text-[#3895f2]">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </>
  );
}
