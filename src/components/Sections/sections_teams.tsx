"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role?: string;
  imageSrc: string;
}
const teamMembers: TeamMember[] = [
  {
    name: "M. PHILLIPE DAVID",
    role: "CEO",
    imageSrc:
      "https://img.freepik.com/free-photo/stylish-young-african-black-man-with-white-cup-coffee-posing-dark-studio_155003-23561.jpg?t=st=1728985849~exp=1728989449~hmac=2b32c93900a15f1a2266d2b8bc5fdf3c0c246814b42a83bccf5ac1ae718f935b&w=360",
  },
  {
    name: "M. CHRISTOPHE ",
    role : "RH",
    imageSrc: "https://img.freepik.com/premium-photo/marine-policy-analyst-leaning-forward-with-hands-clasp-2_975681-328138.jpg?w=740",
  },
  {
    name: "MELISSA MARIE",
    imageSrc: "https://img.freepik.com/premium-photo/beautiful-girl-wearing-suit-golden-hair-her-head_746565-187452.jpg?w=740",
  },
];

export default function SectionsTeam() {
  const [selectedMember, setSelectedMember] = useState<string | null>(teamMembers[0].name);

  return (
    <div className={`container mx-auto px-4 py-16 `}>
      <h1 className={`text-3xl font-bold text-center mb-2 font-primary-font`}>
        A team of shocks just for you
      </h1>
      <h2 className="text-md font-bold text-center text-primary-color mb-8 font-secondary-font">
        TEAMS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onMouseOver={() => setSelectedMember(member.name)}
          >
            <div className="relative w-64 h-96 mb-4 overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src={member.imageSrc}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
              {selectedMember === member.name && (
                <div className="absolute  bottom-0 bg-primary-color h-20 w-64 flex flex-col items-center justify-center transition-all duration-300">
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
        ))}
      </div>
    </div>
  );
}
