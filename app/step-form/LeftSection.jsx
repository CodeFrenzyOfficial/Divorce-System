import React from "react";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";
import Step5 from "../components/Steps/Step5";
import Step6 from "../components/Steps/Step6";
import Step7 from "../components/Steps/Step7";
import Step8 from "../components/Steps/Step8";
import Step9 from "../components/Steps/Step9";
import Step10 from "../components/Steps/Step10";
import Step11 from "../components/Steps/Step11";
import Step12 from "../components/Steps/Step12";
import Step13 from "../components/Steps/Step13";

const LeftSection = ({ activeStep, onNextStep }) => {
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <Step1 onNextStep={onNextStep} />;
      case 2:
        return <Step2 onNextStep={onNextStep} />;
      case 3:
        return <Step3 onNextStep={onNextStep} />;
      case 4:
        return <Step4 onNextStep={onNextStep} />;
      case 5:
        return <Step5 onNextStep={onNextStep} />;
      case 6:
        return <Step6 onNextStep={onNextStep} />;
      case 7:
        return <Step7 onNextStep={onNextStep} />;
      case 8:
        return <Step8 onNextStep={onNextStep} />;
      case 9:
        return <Step9 onNextStep={onNextStep} />;
      case 10:
        return <Step10 onNextStep={onNextStep} />;
      case 11:
        return <Step11 onNextStep={onNextStep} />;
      case 12:
        return <Step12 onNextStep={onNextStep} />;
      case 13:
        return <Step13 onNextStep={onNextStep} />;

      default:
        return <Step1 onNextStep={onNextStep} />;
    }
  };

  return <div>{renderStepContent(activeStep)}</div>;
};

export default LeftSection;
