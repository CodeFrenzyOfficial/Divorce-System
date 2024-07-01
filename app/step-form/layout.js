"use client";

import { usePathname, useRouter } from "next/navigation";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { cn } from "../utils/helpers";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Layout({ children }) {
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      try {
        if (!userData) {
          toast("First Fill Form to Continue!");
          replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="max-w-[1420px] mx-auto py-10 px-6 lg:px-8">
      <div className="hidden lg:grid grid-cols-4 border-[1px] ">
        <div className="col-span-1 text-center p-[10px] border-r-[1px]">
          <p className="flex justify-center items-center lg:text-base">
            <TiTick className="text-primary-blue" />
            Step 1: Qualify for divorce
          </p>
        </div>

        <div className="col-span-1 text-center p-[10px] border-r-[1px]">
          <p className="text-base">Step 2: Provide your details</p>
        </div>

        <div className="col-span-1 text-center p-[10px] border-r-[1px]">
          <p className="text-base">Step 3: Get your papers</p>
        </div>

        <div className="col-span-1 text-center p-[10px]">
          <p className="text-base">Step 4: File for divorce</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-[20px]">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Provide your case details
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            Please answer the following questions and then click the "Save &
            Continue" button
          </p>
        </div>

        <div className="my-5 md:my-0 col-span-1 flex items-center">
          <TbDiscountCheckFilled className="text-[70px] text-primary-blue" />

          <h2 className="text-[18px] md:text-[20px] lg:text-[22px]">
            Service Satisfaction Guaranteed
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between mt-[25px] lg:mt-[50px] gap-[60px]">
        <div className="col-span-2 px-[20px] lg:px-[30px] border-[1px]">
          {children}
        </div>

        <div className="hidden lg:grid col-span-1">
          <ul>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/">Information About Yourself</Link>
            </li>

            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/1" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/1">
                Your Current Place Of Residence
              </Link>
            </li>

            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/2" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/2">Children And Pregnancy</Link>
            </li>

            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/3" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/3">Properties And Debts</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/4" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/4">Filing Party</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/5" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/5">Current Home</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/6" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="/step-form/steps/6">Community Property</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/7" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Community Debts</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/8" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Other Income Sources</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/8" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Money Owed</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/9" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Military Information</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/10" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Summary</Link>
            </li>
            <li
              className={cn(
                "text-[#8e8e8e80] relative pl-[20px] py-[15px] border-l-[1px] border-l-[#8e8e8e80]",
                pathname === "/step-form/steps/11" &&
                  "active text-primary-blue border-l-primary-blue"
              )}
            >
              <Link href="#">Processing Fee</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex justify-between items-center gap-5">
        <div className="text-center py-4 border-b-[1px]">
          <p className="flex justify-center items-center text-base">
            <TiTick className="text-primary-blue" />
            Step 1: Qualify for divorce
          </p>
        </div>

        <div className="text-center py-4 border-b-[1px]">
          <p className="text-base">Step 2: Provide your details</p>
        </div>

        <div className="text-center py-4 border-b-[1px]">
          <p className="text-base">Step 3: Get your papers</p>
        </div>

        <div className="text-center py-4 border-b-[1px]">
          <p className="text-base">Step 4: File for divorce</p>
        </div>
      </div>
    </div>
  );
}
