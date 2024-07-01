import React, { useEffect, useState } from "react";
import useStore from "../store/userStore";
import axios from "axios";

const StateModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const [states, setStates] = useState([]);
  const [stateLoading, setStateLoading] = useState(false);
  const { formData, updateFormData } = useStore((state) => ({
    formData: state.formData.step1.state,
    updateFormData: state.updateFormData,
  }));

  const handleOutsideClick = (e) => {
    if (e.target.dataset.modal) {
      closeModal();
    }
  };

  useEffect(() => {
    setStateLoading(true);
    axios
      .get("http://localhost:8000/api/readStates")
      .then((response) => {
        setStates(response.data.data.states);
        setStateLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching states:", error);
        setStateLoading(false);
      });
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputChange = (event) => {
    updateFormData("step1", { state: event.target.value });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-20"
      onClick={handleOutsideClick}
      data-modal="true"
    >
      {stateLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded max-w-xl w-full">
          <select
            name="state"
            id="state-select"
            value={formData}
            onChange={handleInputChange}
            className="w-full py-2 px-3 border rounded outline-none focus:shadow-outline"
          >
            {states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default StateModal;
