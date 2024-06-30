import React from "react";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";

const LeftSection = ({ activeStep }) => {
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <div>Step 4</div>;
      case 5:
        return <div>Step 5</div>;
      case 6:
        return <div>Step 6</div>;
      case 7:
        return <div>Step 7</div>;
      case 8:
        return <div>Step 8</div>;
      case 9:
        return <div>Step 9</div>;
      case 10:
        return <div>Step 10</div>;
      case 11:
        return <div>Step 11</div>;
      case 12:
        return <div>Step 12</div>;
      case 13:
        return <div>Step 13</div>;

      default:
        return <div>Select a step</div>;
    }
  };

  return <div>{renderStepContent(activeStep)}</div>;
};

export default LeftSection;
