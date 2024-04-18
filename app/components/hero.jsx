import Image from "next/image";
import Container from "./container";
import heroImg from "@/public/img/hero.png";
import Link from "next/link";
import HomeForm from "./HomeForm";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Start Your Divorce Online Without Lawyer Fees
            </h1>
            <p className="my-5 text-xl leading-9 mb-10 text-gray-500 lg:text-xl xl:text-[1.5rem] xl:leading-[2]">
              Our system pioneered the online divorce industry <br />For 24
              years over 500,000 people have used our tools Providing the best
              service on the market
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href={'/'}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-black/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Right Form/Image */}
        <div className="w-full lg:w-1/2 grid place-items-center">
          <HomeForm />
        </div>
      </Container>

      {/* Large Screen Steps */}
      <Container className={"hidden lg:block"}>
        <div className="w-full text-center" id="steps">
          <h2 className="text-black font-semibold text-4xl">
            Divorce made easy using our 4-step solution
          </h2>

          {/* Arrows Contianer */}
          <div className="flex justify-center items-center mt-10 ">
            {/* 1 */}
            <div className="flex items-center gap-10">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 text-center text-4xl flex justify-center items-center">
                1
              </div>
              <img src="/img/arrow.webp" alt="" className="w-1/2" />
            </div>

            {/* 2 */}
            <div className="flex items-center gap-10">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 text-center text-4xl flex justify-center items-center">
                2
              </div>
              <img src="/img/arrow.webp" alt="" className="w-1/2" />
            </div>
            {/* 3 */}
            <div className="flex items-center gap-10">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 text-center text-4xl flex justify-center items-center">
                3
              </div>
              <img src="/img/arrow.webp" alt="" className="w-1/2" />
            </div>
            {/* 4 */}
            <div className="flex items-center gap-10">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 text-center text-4xl flex justify-center items-center">
                4
              </div>
            </div>

          </div>

          {/* Text Container */}
          <div className="flex justify-center items-center gap-[8.3rem] capitalize text-2xl font-semibold text-gray-500  mt-8">
            <h2>check if you qualify</h2>
            <h2 className="relative -left-10">answer questions</h2>
            <h2 className="relative -left-8">review forms</h2>
            <h2 className="relative -left-5">file with court</h2>
          </div>

          <div className="my-20">
            <Link
              href={'/'}
              className="px-20 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-black/30"
            >
              Start Now
            </Link>
          </div>
        </div>
      </Container>

      {/* Mobile Screen Steps */}
      <Container className={"block lg:hidden py-20"}>
        <div className="w-full ">
          <h2 className="text-white font-semibold text-3xl">
            Divorce made easy using our 4-step solution
          </h2>

          <div className="mt-12 flex items-start gap-6">

            <div className="space-y-6 relative font-semibold">
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 text-center text-3xl flex justify-center items-center step-after">
                1
              </div>
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 text-center text-3xl flex justify-center items-center step-after">
                2
              </div>
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 text-center text-3xl flex justify-center items-center step-after">
                3
              </div>
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 text-center text-3xl flex justify-center items-center z-10">
                4
              </div>
            </div>

            <div className="space-y-14 mt-4 text-gray-600 text-left text-2xl capitalize">
              <h2>check if you qualify</h2>
              <h2>
                answer questions
              </h2>
              <h2>
                review forms
              </h2>
              <h2>
                file with court
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}


export default Hero;