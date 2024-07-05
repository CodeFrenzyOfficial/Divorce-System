import React from "react";

const ResidencySection = () => {
  return (
    <div className="container mx-auto w-full p-4">
      <h1 className="text-3xl  text-[#666666] text-start font-medium">
        Residency:
      </h1>
      <div className="leading-1 flex flex-col gap-2  text-[#666666]">
        <p className="text-base mt-2">
          Every state has specific requirements where divorcing couples must
          establish residency before filing for divorce. Alabama is no
          exception.
        </p>
        <div>
          <ul className="list-disc list-inside">
            <li className="text-base mt-2">
              If both spouses are residents of Alabama, a divorce can be filed
              at any time.
            </li>
            <li className="text-base mt-2">
              If the defendant is a resident of Alabama but the filing spouse
              lives in another state, a divorce can be filed at any time.
            </li>
            <li className="text-base mt-2">
              If the filing spouse is a resident of Alabama, but the other
              spouse is not, the spouse filing for divorce must have been a
              resident of the state for a minimum of six months before filing
              for divorce, which must be alleged in the complaint and proved.
            </li>
          </ul>
          <p className="text-base mt-2">
            There are many ways to prove that residency has been established.
            The easiest way is if one or both spouses have a current and valid
            Alabama driver’s license, ID card, or voter’s registration card
            issued at least six months before filing for divorce.
          </p>
          <p className="text-base mt-2">
            If this is not the case, it may be possible to establish residency
            by having someone who knows you or your spouse testify that you have
            lived in the state for at least six months. This third party will
            have to sign the Affidavit of Residency. After being notarized, such
            a document can be used as proof the plaintiff meets Alabama
            residency requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidencySection;
