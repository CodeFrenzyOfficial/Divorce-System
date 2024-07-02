"use client";

import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100  transition-all duration-300">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-primary-blue`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 transition-all duration-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How does OnlineDivorce.com work?",
    answer:
      "OnlineDivorce.com provides you with the tools and the resources which will break the process down to make it easy for you to get a divorce. Our 3 step process is easy to use and easy to understand.",
  },
  {
    question: "How much does OnlineDivorce.com cost?",
    answer:
      "At the time you create an account for your state's divorce service, a one time fee will be charged to your credit card. You will have access to your account for 30 days. There are no additional costs for using OnlineDivorce.com to help you prepare your divorce documents. We do offer additional services to help you with your divorce. You may visit our pricing section for more information on the cost and our guarantee.",
  },
  {
    question: "Does it matter where we were married? ",
    answer:
      "No, it does not matter where you were married. A divorce should be filed where you or your spouse reside. You do not file in the state or country where you married, but rather where you live. Check your state page for specific residency requirements.",
  },
  {
    question: "Can I use OnlineDivorce.com in my state?",
    answer: `Generally, if either spouse has lived in the state where you intend to file, you can use OnlineDivorce.com. Check your state page for specific residency requirements. The forms and instructions are state specific and will be provided in accordance with state law. OnlineDivorce.com cannot resolve contested cases. If you cannot come to an agreement and need to have a trial, you should contact an attorney.`,
  },
  {
    question: "Can I use OnlineDivorce.com if we have children?",
    answer: `Generally, if either spouse has lived in the state where you intend to file, you can use OnlineDivorce.com. Check your state page for specific residency requirements. The forms and instructions are state specific and will be provided in accordance with state law. OnlineDivorce.com cannot resolve contested cases. If you cannot come to an agreement and need to have a trial, you should contact an attorney.`,
  },
  {
    question: "Can I use OnlineDivorce.com if we have property and/or debt?",
    answer: `Yes. OnlineDivorce.com provides the documents necessary to divide property and debt.`,
  },
  {
    question:
      "What if we have children and my spouse and I live in different states?",
    answer: `You can use OnlineDivorce.com if you have children and you and your spouse live in different states. Typically, you will file in the state where the child(ren) reside. You should review each spouse's state requirements to learn what is required and help you decide the state where you will file.`,
  },
  {
    question: "How does payment work?",
    answer: `Users will be charged the $159 document preparation fee to receive their completed divorce forms. After that, subscribers will be sent email reminders before each monthly charge.`,
  },
  {
    question: "Does OnlineDivorce.com file for me?",
    answer: `Yes. For clients with a Platinum service, we will file with the court on their behalf. We also review the processed documents and serve the client’s spouse in some states. Upgrading to this service costs $379. However, the Platinum service is not available in all states and counties and does not include court filing fees.`,
  },
];

export default Faq;
