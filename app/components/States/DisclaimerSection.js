import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="container font-lato mx-auto w-full border-2 border-blue-300 p-4">
      <p className="text-sm">
        <span className="text-lg font-black">Disclaimer: </span>
        OnlineDivorce is not a law firm and its services, website, forms, or
        templates are not a substitute for the advice or services of an
        attorney. OnlineDivorce provides access to computer-aided self-help
        services at your specific direction. OnlineDivorce's website and written
        instructions provide general information about the divorce process only;
        we cannot give you any specific advice, opinions, or recommendations as
        to your selection or completion of forms or your particular legal
        rights, remedies, or options.
        <a
          href="https://www.onlinedivorce.com"
          className="text-blue-600  decoration-none"
        >
          OnlineDivorce.com
        </a>
        is a website that provides access to self-guided online questionnaires.
        OnlineDivorce does not sell blank forms. You may be able to download
        blank forms from a government website depending on your state.
      </p>
      <p className="text-sm mt-2">
        Communications between you and OnlineDivorce are governed by our{" "}
        <a href="#" className="text-blue-600  decoration-none">
          Privacy Policy
        </a>
        but are not covered by the attorney-client or work product privileges.
        Your access to OnlineDivorce's website is subject to and governed by our{" "}
        <a href="/#" className="text-blue-600  decoration-none">
          Terms of Use
        </a>
        . Any purchase from OnlineDivorce is subject to and governed by our{" "}
        <a href="/#" className="text-blue-600  decoration-none">
          Terms of Service
        </a>
        .
      </p>
    </div>
  );
};

export default DisclaimerSection;
