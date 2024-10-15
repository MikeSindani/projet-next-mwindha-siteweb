"use client"
import { useState, useEffect } from 'react';

const UnderConstructionModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        setShowModal(false);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 backdrop-blur-md z-10 bg-opacity-50 ${
        showModal ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-4 w-1/2 flex flex-col gap-y-3">
        <h2 className="text-2xl font-bold mb-2 font-primary-font">Page under construction</h2>
        <p className="text-gray-600 text-md">
          This page is currently under construction.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Close
        </button>
        <p className="text-gray-600 text-sm mt-2">
          {timer} seconds remaining...
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionModal;