"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownIsOpen, setDropdown] = useState(false)
  const navigation = [
    "Divorce Services",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div
      className="grid sticky top-0 lg:top-3 place-items-center
     z-[100] rounded-lg"
    >
      <div className="w-full lg:w-[95%] bg-gray-400/20 backdrop-blur-2xl rounded-lg">
        <nav className="container left-0 flex flex-wrap items-center justify-between p-5 mx-auto lg:justify-between xl:px-0 m-1 rounded-lg">
          {/* Logo  */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto relative">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                <span>
                  <img src="/img/logo.webp" alt="N" className="w-60" />
                </span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(!isOpen)}
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>

            <div
              className={`absolute flex flex-wrap w-full my-5 lg:hidden top-20 bg-gray-600 left-0 transition-all duration-300  z-20 ${isOpen
                ? "h-72 opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
                }`}
            >
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/"
                className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5 transition-all duration-200 hover:bg-opacity-80"
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
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex relative">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}
                  onClick={menu.includes("Divorce Services") ? () => { setDropdown(!dropdownIsOpen) } : null}>
                  <Link
                    href="/"
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {menu}
                      {menu.includes("Divorce Services") && (
                        <IoMdArrowDropdown className="text-black" />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* DropDown */}
            <div className={`hidden lg:block absolute top-32 left-1/3 w-40  ${dropdownIsOpen ? 'h-40' : 'h-0'} bg-black/90 text-white transition-all duration-200 z-20 overflow-hidden`}>
              <ul className="">
                <Link href={'#steps'} className="py-2 w-full transition-all duration-200 hover:bg-white hover:text-black cursor-pointer">How It Works</Link>
                <Link href={''} className="py-2 w-full transition-all duration-200 hover:bg-white hover:text-black cursor-pointer" >Why Us?</Link>
                <li className="py-2 w-full transition-all duration-200 hover:bg-white hover:text-black cursor-pointer">How It Works</li>
                <li className="py-2 w-full transition-all duration-200 hover:bg-white hover:text-black cursor-pointer">How It Works</li>
              </ul>
            </div>
            {
              dropdownIsOpen && <div className="fixed top-0 left-0 w-full h-screen z-10"
                onClick={() => setDropdown(false)}></div>
            }
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link
              href={"/"}
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-black/30"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
