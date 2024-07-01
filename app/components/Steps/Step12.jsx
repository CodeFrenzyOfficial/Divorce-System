"use client";
import React, { useState } from "react";
import useStore from "@/app/store/userStore";
import Modal from "../Modal";
import Step11 from "./Step11";
import Step10 from "./Step10";
import Step9 from "./Step9";
import Step8 from "./Step8";
import Step7 from "./Step7";
import Step6 from "./Step6";
import Step5 from "./Step5";
import Step4 from "./Step4";
import Step3 from "./Step3";
import Step2 from "./Step2";
import Step1 from "./Step1";
import StateModal from "../StateModal";
import PhoneNumberModal from "../PhoneNumberModal";

const Step12 = ({ onNextStep }) => {
  const formData = useStore((state) => state.formData);
  const userPassword = useStore((state) => state.password);

  const [modalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [isStateModalOpen, setStateModalOpen] = useState(false);
  const openModal = (stepComponent) => {
    setModalContent(stepComponent);
    setModalOpen(true);
  };

  const openStateModal = () => {
    setStateModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const setPassword = useStore((state) => state.setPassword);
  const [password, setPasswordLocal] = useState("");
  const [showPhoneNumberModal, setShowPhoneNumberModal] = useState(false);

  const handlePasswordSubmit = () => {
    setPassword(password);
    setShowPhoneNumberModal(true);
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="py-4">
        <h2 className="text-lg font-semibold mb-2">Account Information</h2>
        <div>
          <p className="text-sm">
            Please set your password so that you can access your information at
            any time.
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="w-1/2">
              <span>Password (minimum 5 characters)</span>
            </div>
            <div className="w-1/2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPasswordLocal(e.target.value)}
                placeholder="Required"
                className="border-2 border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handlePasswordSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Save & Continue
            </button>

            <PhoneNumberModal
              isOpen={showPhoneNumberModal}
              closeModal={() => setShowPhoneNumberModal(false)}
            />
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Your state of Residence</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">State</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step1.state}</span>
            <button
              onClick={() => openStateModal(<StateModal isOpen={true} />)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Information about yourself</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Name</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{`${formData.step1.firstName} ${formData.step1.middleName} ${formData.step1.lastName}`}</span>
            <button
              onClick={() =>
                openModal(<Step1 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg  mb-2">Your current place of residence</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Your current place of residence</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step2.postalCode}</span>
            <button
              onClick={() =>
                openModal(<Step2 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg  mb-2">Children & Pregnancy</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Children</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step3.numberOfChildren}</span>
            <button
              onClick={() =>
                openModal(<Step3 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg  mb-2">Property & Debts</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Property</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step4.ownsProperty}</span>
            <button
              onClick={() =>
                openModal(<Step4 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Your Information</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Who will file divorce</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step5.petitioner}</span>
            <button
              onClick={() =>
                openModal(<Step5 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Current Home</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Current Home</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step6.livingSituation}</span>
            <button
              onClick={() =>
                openModal(<Step6 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Community Property</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Community Property</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step7.divisionPlan}</span>
            <button
              onClick={() =>
                openModal(<Step7 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Community Debts</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Community Debts</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step8.divisionDebt}</span>
            <button
              onClick={() =>
                openModal(<Step8 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Other Income Sources</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Other Income Sources</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step9.userIncome}</span>
            <button
              onClick={() =>
                openModal(<Step9 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Money Owed</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Money Owed</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step10.oweSpouse}</span>
            <button
              onClick={() =>
                openModal(<Step10 onNextStep={() => closeModal()} />)
              }
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg mb-2">Military Information</h2>
        <div className="border rounded-md">
          <div className="flex justify-between items-center bg-gray-50 py-2 px-3 ">
            <span className="text-sm">Military Information</span>
          </div>
          <div className="flex justify-between items-center py-4 px-3  border-t">
            <span>{formData.step11.isMilitary}</span>
            <button
              className="text-blue-500 hover:underline"
              onClick={() =>
                openModal(<Step11 onNextStep={() => closeModal()} />)
              }
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={onNextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Save & Continue
        </button>
      </div>
      <Modal isOpen={modalOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
      <StateModal
        isOpen={isStateModalOpen}
        closeModal={() => setStateModalOpen(false)}
      />
    </div>
  );
};

export default Step12;
