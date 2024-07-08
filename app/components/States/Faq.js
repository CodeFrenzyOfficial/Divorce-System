"use client";
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
      {isOpen && (
        <div className="text-base text-[#666666] ml-6 ">{content}</div>
      )}
    </div>
  );
};

const FaqAccordion = () => {
  const faqData = [
    {
      question: "Can I really file for divorce in Alabama without a lawyer?",
      answer:
        "Alabama law contains a constitutional provision that allows people to represent themselves in the courts of the state. So, both plaintiff and defendant in a divorce case have the right to proceed pro se, i.e., without a lawyer. The filing requirements are the same for self-represented litigants as for those spouses who seek legal assistance. However, it should be noted that such a DIY procedure is not recommended for a contested divorce. Contested cases are more complex, and their outcome may be unfavorable without the help of a qualified lawyer. If the spouses decide to refuse litigation and settle their disputes out-of-court, the process may be completed with limited assistance, such as a couple of legal consultations, mediation, online divorce, or other alternative methods designed to make a divorce easier and less stressful.",
    },
    {
      question: "How can I file for divorce in Alabama without a lawyer?",
      answer:
        "Foremost, the spouses have to meet the Alabama residency requirements to be able to file for divorce within the state. Then the plaintiff, or the spouses jointly, should choose the ground for divorce, which must be indicated in the Complaint for Divorce. To start the divorce process, the plaintiff needs to prepare the initial divorce papers and also (if the case is uncontested) a Marital Settlement Agreement, where the spouses put all the terms of their separation in writing. After filing the completed divorce forms with the Circuit Court and paying a filing fee, the plaintiff has to serve the other spouse with copies of the documents, following the rules of civil procedure.",
    },
    {
      question:
        "How much does it cost to get an uncontested divorce in Alabama?",
      answer:
        "Although an uncontested divorce is typically much cheaper than a contested divorce, it is still not free. Since the circumstances for each divorce case are different, the cost required for the dissolution of marriage may vary significantly. Some spouses may hire an attorney for their uncontested case, some may attend mediation sessions or take parenting classes to resolve child-related issues, and some may proceed without any legal assistance. Only the court filing fee charged at the moment of applying for divorce is the same for all couples. In Alabama, the court filing fee varies from $200 - $330 depending on the county.",
    },
    {
      question: "How long do you have to live in Alabama to file for divorce?",
      answer:
        "For Alabama court to have jurisdiction over the case, the spouses must meet the residency requirements of the state. The law states that in cases of marriage dissolution, one of the spouses must have been a bona fide resident of Alabama for at least six months before the Complaint is filed with the court. Besides this, the spouses have to file for divorce in the county where either party currently lives.",
    },
    {
      question: "How long do you have to respond to divorce papers in Alabama?",
      answer:
        "A defendant served with the copies of divorce papers has 30 days to file an answer, except when service is made by publication. Alabama Family Law also implies a mandatory 30-days cooling-off period after a divorce petition is filed, so even if your spouse responds right away, 30 days is the soonest your divorce can be finalized, though most uncontested cases will take longer.",
    },
    {
      question: "How do you get a free divorce in Alabama?",
      answer:
        "A free divorce in Alabama is available only for those plaintiffs who are qualified to proceed without paying court costs due to their indigent status. They should file an Affidavit of Substantial Hardship and Order to ask the court for a fee waiver. In all other cases, the cheapest option to get a divorce in Alabama is to arrange a DIY divorce and pay only the court filing fee, which is mandatory, regardless of the type of divorce. However, preparing the required legal divorce papers correctly can be tricky and take a long time. To save time and effort and avoid mistakes, it is recommended to use an affordable and reliable divorce paperwork preparation service like OnlineDivorce.com.",
    },
    {
      question: "What papers do I need to file for a divorce in Alabama?",
      answer:
        "In Alabama, the initial divorce forms are the Complaint for Divorce and Summons. These forms are required to start the divorce procedure. Other divorce forms include the Vital Statistics Form, Affidavit of Residency, and Testimony of Plaintiff. If there are minor children of the marriage, the spouses must also complete the Child Support Guideline Notice of Compliance, Child Support Guideline Form, Child Support Obligation Income Statement, Child Support Information Sheet, and Standing Pre-Trial Order.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} title={faq.question} content={faq.answer} />
      ))}

      <p className=" text-3xl text-[#222222] mt-4">
        Here is how OnlineDivorce.com makes completing divorce papers easier:
      </p>
      <ul className="list-disc text-[#666666] list-inside text-base">
        <li className="my-4">
          <span className="text-[#222222] font-semibold">
            We provide the full divorce packet required by the local court
          </span>{" "}
          - clients do not need to drive to their local courthouse to get the
          blank forms or search for the right divorce forms online. In rare
          cases, local county forms can vary in color, paper material, size, or
          bar code, so they may need to be obtained directly from the county
          clerk's office.
        </li>
        <li className="my-4">
          <span className="text-[#222222] font-semibold">
            We complete the necessary forms for clients based on their answers
            given in a simple guided online interview
          </span>
          {""} - clients do not need to understand family law or read through
          complicated instructions to figure out how to fill out the forms
          themselves.
        </li>
        <li className="my-4">
          <span className="text-[#222222] font-semibold">
            We give detailed, easy to follow step-by-step instructions for
            filing a divorce with the court
          </span>{" "}
          - so the client knows exactly what to do to get his/her divorce
          finalized.
        </li>
        <li className="my-4">
          <span className="text-[#222222] font-semibold">
            We provide unlimited technical support
          </span>
          {""} - if a client needs assistance through the online process, he/she
          can always reach out to us via phone, email, or live chat, and we'll
          do our best to help.
        </li>
        <li className="my-4">
          <span className="text-[#222222] font-semibold">
            We save our clients time and money
          </span>{" "}
          - if divorcing spouses agree regarding the terms of their divorce,
          they typically don’t have to pay thousands to a lawyer to handle their
          divorce forms and don't need to spend hours trying to do it all by
          themselves.
        </li>
      </ul>
    </div>
  );
};

export default FaqAccordion;
