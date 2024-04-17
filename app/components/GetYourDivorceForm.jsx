import Link from "next/link";
import Container from "./container";
import { CiBadgeDollar } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

const GetYourDivorceForm = () => {
  return (
    <>
      <Container className="w-full lg:w-[80%] grid place-items-center">

        <div className="w-full h-auto bg-slate-100 rounded-2xl p-4 lg:py-10 lg:px-14 space-y-16">

          <div className="flex flex-col-reverse justify-start items-start lg:flex-row lg:justify-between lg:items-center gap-4">
            <h2 className="text-3xl font-semibold text-black">Get your divorce forms online</h2>
            <img src="/img/logo.webp" alt="" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
            {/* Card  1*/}
            <div className="w-full p-1 lg:p-4">
              <div className="flex items-center gap-5">
                <FaHandHoldingDollar className="p-1 font-light bg-blue-600 text-white text-5xl rounded-lg" />
                <h2 className="text-xl font-semibold">Inexpensive</h2>
              </div>

              <ul className="w-full lg:w-full space-y-5 lg:mt-8 lg:list-disc my-4 lg:relative lg:left-5 text-gray-600 text-lg">
                <li>
                  Process avoids expensive attorneys
                </li>
                <li>
                  Streamlined tools and expert resources at your fingertips
                </li>
                <li>
                  Discounts on partner offers
                </li>
              </ul>

            </div>

            {/* Card  2*/}
            <div className="w-full p-1 lg:p-4">
              <div className="flex items-center gap-5">
                <CiBadgeDollar className="bg-blue-600 text-white text-5xl rounded-lg" />
                <h2 className="text-xl font-semibold">Experienced</h2>
              </div>

              <ul className="w-full lg:w-full space-y-5 lg:mt-8 lg:list-disc my-4 lg:relative lg:left-5 text-gray-600 text-lg">
                <li>
                  20+ years of experience
                </li>
                <li>
                  Up to date forms for all states and Canada
                </li>
              </ul>

            </div>

            {/* Card  3*/}
            <div className="w-full p-1 lg:p-4">
              <div className="flex items-center gap-5">
                <SiTicktick className="bg-blue-600 text-white text-5xl rounded-lg p-1" />
                <h2 className="text-xl font-semibold">Convenient</h2>
              </div>

              <ul className="w-full lg:w-full space-y-5 lg:mt-8 lg:list-disc my-4 lg:relative lg:left-5 text-gray-600 text-lg">
                <li>
                  Complete forms from the comfort of your home

                </li>
                <li>
                  Move at your own pace

                </li>
                <li>
                  Online resources, chat and phone support
                </li>
              </ul>

            </div>

          </div>

          <div className="grid place-items-center">
            <Link
              href={'/'}
              className="px-20 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-black/30"
            >
              Learn More
            </Link>
          </div>
        </div>

      </Container>
    </>
  );
};
export default GetYourDivorceForm;
