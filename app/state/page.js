import React from "react";
import TitleSection from "../components/States/TitleSection";
import ArrowSection from "../components/States/ArrowSection";
import DisclaimerSection from "../components/States/DisclaimerSection";
import OnlineDivorceSection from "../components/States/OnlineDivorceSection";
import FilingSection from "../components/States/FilingSection";
import ResidencySection from "../components/States/ResidencySection";
import CommitmentSection from "../components/States/CommitmentSection";
import Banner1 from "../components/States/Banner1";
import ValidGround from "../components/States/ValidGround";
import Banner2 from "../components/States/Banner2";
import Custody from "../components/States/Custody";
import ChildSupportRules from "../components/States/ChildSupport";
import Banner3 from "../components/States/Banner3";
import SpousalSupport from "../components/States/SpousalSupport";
import PropertyDivision from "../components/States/PropertyDivision";
import WhyChooseUs from "../components/States/WhyUs";
import MediationSupport from "../components/States/MediationSupport";
import DivorceForms from "../components/States/DivorceForms";
import Banner4 from "../components/States/Banner4";
import FilingFee from "../components/States/FilingFee";
import HowLong from "../components/States/HowLong";
import FaqAccordion from "../components/States/Faq";

const State = () => {
  return (
    <div className="flex flex-col gap-5  py-5">
      <TitleSection />
      <ArrowSection />
      <DisclaimerSection />
      <OnlineDivorceSection />
      <FilingSection />
      <ResidencySection />
      <CommitmentSection />
      <Banner1 />
      <ValidGround />
      <Banner2 />
      <Custody />
      <ChildSupportRules />
      <Banner3 />
      <SpousalSupport />
      <PropertyDivision />
      <WhyChooseUs />
      <MediationSupport />
      <DivorceForms />
      <Banner4 />
      <FilingFee />
      <HowLong />
      <FaqAccordion />
    </div>
  );
};

export default State;
