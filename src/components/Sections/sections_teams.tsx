"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

interface TeamMember {
  name: string;
  role?: string;
  imageSrc: string;
}
const teamMembers: TeamMember[] = [
  {
    name: "",
    role: "CEO",
    imageSrc:
      "/image/icb.png",
  },
  {
    name: "",
    role : "RH",
    imageSrc: "/image/icba.png",
  },
  {
    name: "",
    role: "HR",
    imageSrc: "/image/sait.png",
  },
  {
    name: "",
    role: "HR",
    imageSrc: "/image/CIMA.png",
  },
];

export default function SectionsTeam() {
  const [selectedMember, setSelectedMember] = useState<string | null>(teamMembers[0].name);

  return (
    <div id="affiliation" className={`container mx-auto px-4 py-16 `}>
      <h1 className={`text-4xl font-bold text-center mb-2 font-primary-font`}>
         Our affiliation of choice and trust.
      </h1>
      <h2 className="text-md font-bold text-center text-primary-color mb-8 font-secondary-font uppercase">
         Our affiliation
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-3">
        {teamMembers.map((member, index) => (
          <ScrollAnimation key={index} animateIn="fadeIn" delay={300}>
          <div
            className="flex flex-col items-center cursor-pointer"
            onMouseOver={() => setSelectedMember(member.name)}
          >
            <div className="relative w-full h-36 overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src={member.imageSrc}
                alt={member.name}
                layout="fill"
                objectFit="contain"
              />
              {selectedMember === member.name && (
                <div className="absolute hidden bottom-0 bg-primary-color h-20 w-64 flex flex-col items-center justify-center transition-all duration-300">
                  <p className="text-white text-xl font-semibold text-center">
                    {member.name}
                  </p>
                  <div>
                    {member.role && (
                      <p className="text-white text-center font-bold">
                        {member.role}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
