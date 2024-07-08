import React from "react";

const MediationSupport = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white">
        <h1 className="text-5xl font-medium text-center  mb-6">
          Mediation support in Alabama
        </h1>
        <div className=" text-[#666666] text-base space-y-4">
          <p>In Alabama, divorce mediation can be required if:</p>
          <ul className="list-disc list-inside text-base">
            <li className="my-4">all parties agree;</li>
            <li className="my-4">
              upon the request of either party (they should make a motion with
              the court);
            </li>
            <li className="my-4">
              or if the trial court orders mediation at its discretion.
            </li>
          </ul>
          <p className="text-base mt-2">
            For those seeking to prepare their divorce papers using
            OnlineDivorce.com, divorce mediation as a form of alternative
            dispute resolution can be a great tool to prevent the case from
            going to court. This can be the simplest way to assure a fast, easy
            and affordable online divorce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediationSupport;
