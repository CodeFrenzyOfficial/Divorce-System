import React from "react";

const FilingSection = () => {
  return (
    <div className="container mx-auto w-full p-4">
      <h1 className="text-5xl  text-start font-medium">Filing:</h1>
      <div className="leading-1 flex flex-col gap-2  text-[#666666]">
        <p className="text-base mt-2">
          OnlineDivorce.com begins the divorce process by presenting a simple
          online questionnaire. It can be filled out alone or with the
          assistance of a spouse. A signature from the other spouse must be
          obtained, after which the divorce forms may be filed at the local
          court.
        </p>
        <p className="text-base mt-2">
          In Alabama, this is typically done in the circuit court of the county
          in which the defendant resides or in the court of the county where the
          spouses resided when the breakdown of the marriage occurred. If the
          defendant is not currently a resident, the complaint for divorce
          should be filed in the county where the plaintiff resides.
        </p>
        <p className="text-base mt-2">
          The actual filing process is explained in the detailed court-filing
          instructions that we provide with the completed divorce forms. Clients
          can also obtain assistance from their local courthouse by calling or
          stopping by.
        </p>
        <p className="text-base mt-2">
          If there are any issues with the documents after the initial filing,
          clients may need to follow up. OnlineDivorce.com helps the client make
          small adjustments to their forms, as requested by the court, at no
          additional charge. The goal of the service is always to minimize
          stress and hassle.
        </p>
      </div>
    </div>
  );
};

export default FilingSection;
