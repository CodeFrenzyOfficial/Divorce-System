import React, { useEffect } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.dataset.modal) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-20"
      onClick={handleOutsideClick}
      data-modal="true"
    >
      <div className="bg-white p-4 rounded max-w-xl w-full">{children}</div>
    </div>
  );
};

export default Modal;
