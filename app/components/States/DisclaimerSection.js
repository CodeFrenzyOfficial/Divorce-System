import { dataJson } from "@/app/data/stateContent";
import React from "react";

const DisclaimerSection = () => {
  const { mainText, links, additionalText } = dataJson.DisclaimerSection;
  return (
    <div className="container font-lato mx-auto w-full border-2 border-blue-300 p-4">
      <p className="text-sm">
        <span className="text-lg font-black">Disclaimer: </span>
        {mainText}
        <a
          href="https://www.onlinedivorce.com"
          className="text-blue-600  decoration-none"
        >
          {links[0].text}{" "}
        </a>
        is a website that provides access to self-guided online questionnaires.
        OnlineDivorce does not sell blank forms. You may be able to download
        blank forms from a government website depending on your state.
      </p>
      <p className="text-sm mt-2">
        {additionalText}{" "}
        <a href={links[1].url} className="text-blue-600 decoration-none">
          {links[1].text}
        </a>
        but are not covered by the attorney-client or work product privileges.
        Your access to OnlineDivorce's website is subject to and governed by our{" "}
        <a href={links[2].url} className="text-blue-600 decoration-none">
          {links[2].text}
        </a>
        . Any purchase from OnlineDivorce is subject to and governed by our{" "}
        <a href={links[3].url} className="text-blue-600 decoration-none">
          {links[3].text}
        </a>
        .
      </p>
    </div>
  );
};

export default DisclaimerSection;
