"use client";
import { dataJson } from "@/app/data/stateContent";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="w-full font-lato">
      <button
        onClick={toggle}
        className="flex items-center w-full p-4 text-right font-semibold cursor-pointer text-[#333333] focus:outline-none"
      >
        {isOpen ? (
          <AiOutlineMinus size={14} className="mr-2" />
        ) : (
          <AiOutlinePlus size={14} className="mr-2" />
        )}
        {title}
      </button>
      {isOpen && <div className="text-base text-[#666666] ml-6">{content}</div>}
    </div>
  );
};

const FaqAccordion = () => {
  const { title, faqItems, additionalInfo } = dataJson.FaqAccordion;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-medium text-center mb-6">{title}</h1>
      {faqItems.map((faq, index) => (
        <AccordionItem key={index} title={faq.question} content={faq.answer} />
      ))}
      <div className="text-[#222222] text-3xl mt-4">
        Here is how OnlineDivorce.com makes completing divorce papers easier:
      </div>
      <ul className="list-disc text-[#666666] list-inside text-base">
        {additionalInfo.map((info, index) => (
          <li key={index} className="my-4">
            <span className="text-[#222222] font-semibold">{info.bold}</span>
            {info.normal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqAccordion;
