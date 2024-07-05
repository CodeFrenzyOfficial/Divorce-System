import React from "react";
import TitleSection from "../components/States/TitleSection";
import ArrowSection from "../components/States/ArrowSection";
import DisclaimerSection from "../components/States/DisclaimerSection";
import OnlineDivorceSection from "../components/States/OnlineDivorceSection";
import FilingSection from "../components/States/FilingSection";
import ResidencySection from "../components/States/ResidencySection";

const State = () => {
  return (
    <div className="flex flex-col gap-5  py-5">
      <TitleSection />
      <ArrowSection />
      <DisclaimerSection />
      <OnlineDivorceSection />
      <FilingSection />
      <ResidencySection />
    </div>
  );
};

export default State;
