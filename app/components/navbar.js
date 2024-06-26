"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";
import { DrawerDialog } from "./DrawerDialog";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownIsOpen, setDropdown] = useState(false);
  
  return (
    <div
      className="grid sticky top-0 lg:top-3 place-items-center
     z-[100] rounded-lg"
    >
      <div className="w-full lg:w-[95%] bg-gray-400/20 backdrop-blur-2xl rounded-lg">
        <nav className="container left-0 flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-4 m-1 rounded-lg">
          {/* Logo  */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto relative">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                <span>
                  <img src="/img/logo.webp" alt="N" className="w-52" />
                </span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(!isOpen)}
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:opacity-70 cursor-pointer"
            >
              {isOpen ? (
                <RxCross1 className="text-3xl" />
              ) : (
                <HiBars3BottomRight className="text-3xl" />
              )}
            </button>

            <div
              className={`absolute flex flex-wrap w-full my-5 lg:hidden top-20 bg-black/90 left-0 transition-all duration-300 z-20 ${
                isOpen
                  ? "h-48 opacity-100 pointer-events-auto"
                  : "h-0 opacity-0 pointer-events-none"
              }`}
            >
              {/* Navbar Items */}
              <>
                <Link
                  href="#services"
                  className="w-full grid place-items-center text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
                >
                  Divorce Services
                </Link>

                <Link
                  href="/disclaimer"
                  className="w-full grid place-items-center text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
                >
                  Disclaimer
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full grid place-items-center text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
                >
                  Contact Us
                </Link>
              </>

              <Link
                href="#"
                className="w-full text-center text-white bg-primary-blue rounded-md lg:ml-5 transition-all duration-200 hover:bg-opacity-80 grid place-items-center"
              >
                Get Started
              </Link>
            </div>

            {/* closing div */}
            {isOpen && (
              <div
                className="w-full h-screen fixed top-0 left-0 bg-transparent z-10"
                onClick={() => setOpen(false)}
              />
            )}
          </div>

          {/* menu  */}
          <div className="hidden text-center xl:flex lg:items-center">            
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex relative">              
              <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:opacity-70 cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-2"
                    onClick={() => setDropdown(!dropdownIsOpen)}
                  >
                    Divorce Services
                    <IoMdArrowDropdown className="text-black" />
                  </div>
                </div>
              </div>

              <Link href={"/disclaimer"}>
                <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:opacity-70 cursor-pointer transition-all duration-200">
                  <div className="flex items-center gap-2">Disclaimer</div>
                </div>
              </Link>

              <Link href={"/contact-us"}>
                <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:opacity-70 cursor-pointer transition-all duration-200">
                  <div className="flex items-center gap-2">Contact Us</div>
                </div>
              </Link>

            </ul>

            {/* DropDown */}
            <div
              className={`hidden lg:block absolute top-32 left-1/3 w-40  ${
                dropdownIsOpen ? "h-20" : "h-0"
              } bg-black/90 text-white transition-all duration-200 z-20 overflow-hidden flex flex-col`}
            >
              <div className="py-2 w-fulltransition-all duration-200 hover:bg-white hover:text-black cursor-pointer">
                <Link href={"/#steps"}>How It Works</Link>
              </div>

              <div className="py-2 w-fulltransition-all duration-200 hover:bg-white hover:text-black cursor-pointer">
                <Link href={"/#whyus"}>Why Us?</Link>
              </div>
            </div>
            {dropdownIsOpen && (
              <div
                className="fixed top-0 left-0 w-full h-screen z-10"
                onClick={() => setDropdown(false)}
              ></div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden mr-3 space-x-4 lg:flex">
              <DrawerDialog />
            </div>
            <div className="hidden mr-3 space-x-4 lg:flex">
              <Button innerText={"Get Started"} link={"/"} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
