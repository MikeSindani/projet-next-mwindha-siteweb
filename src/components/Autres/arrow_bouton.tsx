"use client"
import React from 'react';
import Image from "next/image";
import arrow from "@/svg/arrow-up.svg";

const ArrowUpButton = () => {
  const handleClick = () => {
    document.getElementById('start')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-0 right-0 mb-4 mr-4 p-2 bg-primary-color hover:bg-orange-700 text-white shadow-md"
    >
      <Image 
        src={arrow}
        alt="arrow"
        width={24}
        height={24} 
       />
       
    </button>
  );
};

export default ArrowUpButton;