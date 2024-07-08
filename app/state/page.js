import dynamic from "next/dynamic";
import React from "react";

const TileSection = dynamic(() => import("../components/States/TitleSection"), {
  ssr: false,
});
const ArrowSection = dynamic(
  () => import("../components/States/ArrowSection"),
  {
    ssr: false,
  }
);
const DisclaimerSection = dynamic(
  () => import("../components/States/DisclaimerSection"),
  {
    ssr: false,
  }
);
const OnlineDivorceSection = dynamic(
  () => import("../components/States/OnlineDivorceSection"),
  {
    ssr: false,
  }
);
const FilingSection = dynamic(
  () => import("../components/States/FilingSection"),
  {
    ssr: false,
  }
);
const ResidencySection = dynamic(
  () => import("../components/States/ResidencySection"),
  {
    ssr: false,
  }
);
const CommitmentSection = dynamic(
  () => import("../components/States/CommitmentSection"),
  {
    ssr: false,
  }
);
const Banner1 = dynamic(() => import("../components/States/Banner1"), {
  ssr: false,
});
const ValidGround = dynamic(() => import("../components/States/ValidGround"), {
  ssr: false,
});
const Banner2 = dynamic(() => import("../components/States/Banner2"), {
  ssr: false,
});
const Custody = dynamic(() => import("../components/States/Custody"), {
  ssr: false,
});
const ChildSupportRules = dynamic(
  () => import("../components/States/ChildSupport"),
  {
    ssr: false,
  }
);
const Banner3 = dynamic(() => import("../components/States/Banner3"), {
  ssr: false,
});
const SpousalSupport = dynamic(
  () => import("../components/States/SpousalSupport"),
  {
    ssr: false,
  }
);
const PropertyDivision = dynamic(
  () => import("../components/States/PropertyDivision"),
  {
    ssr: false,
  }
);
const WhyChooseUs = dynamic(() => import("../components/States/WhyUs"), {
  ssr: false,
});
const MediationSupport = dynamic(
  () => import("../components/States/MediationSupport"),
  {
    ssr: false,
  }
);
const DivorceForms = dynamic(
  () => import("../components/States/DivorceForms"),
  {
    ssr: false,
  }
);
const Banner4 = dynamic(() => import("../components/States/Banner4"), {
  ssr: false,
});
const FilingFee = dynamic(() => import("../components/States/FilingFee"), {
  ssr: false,
});
const HowLong = dynamic(() => import("../components/States/HowLong"), {
  ssr: false,
});
const FaqAccordion = dynamic(() => import("../components/States/Faq"), {
  ssr: false,
});

const State = () => {
  return (
    <div className="flex flex-col gap-5  py-5">
      <TileSection />
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
