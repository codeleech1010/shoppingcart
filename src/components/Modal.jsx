import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-10" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-50">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
