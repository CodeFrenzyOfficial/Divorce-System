import React from "react";

const ArrowSection = () => {
  return (
    <div className=" container mx-auto w-full p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full ">
        <div className="flex flex-1 justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <img
              src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/step-1.6c4836466b86.png"
              alt="Check If You Qualify"
            />
            <p className="mt-2">Check If You Qualify</p>
          </div>
        </div>
        <img
          className="w-16 h-24 mx-2 md:w-24 md:h-12 md:mx-2 block md:block rotate-90 md:rotate-0"
          src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/arrows-right.a01219239061.svg"
          alt="Arrow"
        />

        <div className="flex flex-1 justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <img
              src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/step-2.612fa2fbd946.png"
              alt="Complete Questionnaire"
            />
            <p className="mt-2">Complete Questionnaire</p>
          </div>
        </div>
        <img
          className="w-16 h-24 mx-2 md:w-24 md:h-12 md:mx-2 block md:block rotate-90 md:rotate-0"
          src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/arrows-right.a01219239061.svg"
          alt="Arrow"
        />
        <div className="flex flex-1 justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <img
              src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/step-3.ec54c315452a.png"
              alt="Review Completed Forms"
            />
            <p className="mt-2">Review Completed Forms</p>
          </div>
        </div>
        <img
          className="w-16 h-24 mx-2 md:w-24 md:h-12 md:mx-2 block md:block rotate-90 md:rotate-0"
          src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/arrows-right.a01219239061.svg"
          alt="Arrow"
        />
        <div className="flex flex-1 justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <img
              src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/steps/step-4.913533ee6afe.png"
              alt="File for Divorce"
            />
            <p className="mt-2">File for Divorce</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowSection;
