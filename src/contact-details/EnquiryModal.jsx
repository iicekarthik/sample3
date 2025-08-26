import React from "react";
import EnquiryForm from "./EnquiryForm";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="w-full max-w-lg px-5">
        {/* Pass showClose and onClose only in modal */}
        <EnquiryForm onClose={onClose} showClose={true} />
      </div>
    </div>
  );
};

export default EnquiryModal;
