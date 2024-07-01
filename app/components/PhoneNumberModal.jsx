"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/app/store/userStore";

const PhoneNumberModal = ({ isOpen, closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const updatePhoneNumber = useStore((state) => state.setPhoneNumber);

  if (!isOpen) return null;

  const handleSubmit = () => {
    updatePhoneNumber(phoneNumber);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 w-full flex justify-center items-center p-4 z-20 mx-auto ">
      <div className="bg-white p-4 rounded max-w-[700px] w-full">
        <h1>Divorce Order Successfully Registered</h1>
        <p>
          Your order registration has been submitted successfully. After your
          payment is processed, your personal login will be accessible. Logging
          in will allow you to answer the additional questions required to
          complete your divorce paperwork. When completing the online
          questionnaire, help and explanations are provided for each question.
          Questions during the process? Call our support line to speak with a
          customer support specialist.
        </p>

        <p className="mt-4 text-blue-400">
          Please enter a phone number so that we can contact you in case there
          are any questions about your case
        </p>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="border p-2"
        />
        <div>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 w-full text-white p-2 mt-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberModal;
