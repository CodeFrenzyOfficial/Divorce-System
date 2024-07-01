import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export default function Footer() {
    return (
        <div className="px-10">
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
            <div className="p-4">
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
        </div>
    )
}