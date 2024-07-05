import React from "react";

const OnlineDivorceSection = () => {
  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-3xl  text-[#666666] text-center font-bold my-4">
        Online Divorce in Alabama
      </h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-auto">
          <img
            src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/seo_landing/get-divorce/alabama.png"
            alt="Alabama Courthouse"
            className="h-auto w-auto rounded"
          />
        </div>
        <div className="md:w-2/3 md:pl-4 text-[#666666] flex flex-col gap-2 leading-4 ">
          <p className="text-base ">
            For those seeking an inexpensive divorce in the state of Alabama,
            online divorce can be an easy, affordable and fast solution. Online
            divorce may be appropriate for couples who have an uncontested case.
          </p>
          <p className="text-base mt-2">
            The step-by-step process of preparing divorce documents at
            OnlineDivorce.com makes it easy for the client. The site helps
            prepare all the necessary divorce forms and provides detailed
            written instructions on how to file for divorce in Alabama.
          </p>
          <p className="text-base mt-2">
            Our divorce document preparation service can assist those who want
            their divorce papers completed in a quick and stress-free fashion.
            Alabama has unique divorce forms and filing requirements, and our
            online system provides the exact forms necessary along with
            instructions on how to file. We have helped thousands of people
            prepare their divorce documents for filing.
          </p>
          <p className="text-base mt-2">
            If the two spouses have an amicable agreement on the terms of the
            divorce, why should the process get drawn out, and why should money
            be spent on lawyers? Online divorces are often cheaper, quicker and
            easier.
          </p>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2  text-[#666666]">
        <p className="text-base mt-2">
          Online divorce can be a great option for those who want to save money
          and have the divorce finalized quickly to return to normal life. An
          increasing number of people are preparing documents for divorce online
          because it can be done in the comfort of one’s own home. Even for
          complex cases that involve children, property or other assets, the
          online route is possible.
        </p>
        <p className="text-base mt-2">
          The process at OnlineDivorce.com is 100% secure. We protect the
          client’s information, and nothing gets filed until the client
          personally submits the divorce papers to the court. Filing for divorce
          in Alabama with OnlineDivorce can be a simple solution to a difficult
          situation.
        </p>
      </div>
    </div>
  );
};

export default OnlineDivorceSection;
