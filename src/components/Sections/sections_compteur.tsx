import React from "react";
import Counter from "../Compteurs/Counter";

export default function SectionsCompteur() {
  return (
    <div className="flex gap-3 p-4 w-full  max-md:flex-col justify-center items-center bg-three-color">
      <div className="flex flex-col justify-start items-center md:mx-6">
        <div className="font-semi-bold text-4xl md:text-6xl text-white flex">
          <Counter targetNumber={200} timer={100} />+
        </div>
        <div className="font-light text-xs text-white">Sactifaits clients</div>
      </div>
      <div className="flex flex-col justify-start items-center md:mx-6">
        <div className="font-semi-bold text-4xl md:text-6xl text-white flex">
          <Counter targetNumber={10} timer={2} />
        </div>
        <div className="font-light text-xs text-white">Area of Expertise</div>
      </div>
      <div className="flex flex-col justify-start items-center md:mx-6">
        <div className="font-semi-bold text-4xl md:text-6xl text-white flex">
          <Counter targetNumber={100} timer={50} />+
        </div>
        <div className="font-light text-xs text-white">Projects handled</div>
      </div>
    </div>
  );
}
