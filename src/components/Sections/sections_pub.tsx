import quality from "@/svg/qualite.svg";
import team from "@/svg/teams.svg";
import solution from "@/svg/solution.svg"
import certification from "@/svg/certifi.svg"
import Image from "next/image";
export default function SectionsPub() {
  const features  = [
    {
      number: 1,
      icon: "👤",
      title: "Expertise You Can Trust",
      description: "With decades of collective experience in the financial industry, our team of certified professionals brings unparalleled expertise to the table. We stay ahead of the curve with the latest regulations and industry trends, ensuring your financial success.",
    },
    {
      number : 2, 
      icon: "✓",
      title: "Tailored Solutions",
      description: "No two businesses are the same, which is Why we offer personalized financial solutions. Whether you're a startup, a mid-sized company, or a large corporation, our services are customized to meet your unique needs.",
    },
    {
      number: 3,
      icon: "👥",
      title: "Comprehensive Services",
      description: "From Payroll, Accounting and tax planning to financial analysis and advisory, we offer a full spectrum of of services under one roof. We are your one-stop shop for all your payroll and financial needs",
    },
    {
      number: 4,
      icon: "👥",
      title: "CERTIFIED PROFESSIONALS",
      description: "At MWINDHA, we grasp the ever-changing landscape of South African business. Our approach blends insightful analysis, innovative strategies, and practical solutions to help you navigate uncertainties and seize opportunities. Whether a startup, established enterprise, or nonprofit, we're here to drive your long-term success.",
    },
  ];

  const taille_icons: number = 30;

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-3 p-4 py-16 bg-secondary-color">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 w-72 h-96 hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-white text-2xl mb-4">
                {feature.number == 1 && (
                  <Image
                    src={quality}
                    alt="Logo"
                    width={taille_icons}
                    height={taille_icons}
                  />
                )}
                {feature.number == 2 && 
                  <Image
                   src={solution}
                   alt="solution"
                   width={taille_icons}
                   height={taille_icons}
                  />
              }
                {feature.number == 3 && (
                  <Image 
                    src={team}
                    alt="Logo"
                    width={taille_icons}
                    height={taille_icons}
                  />
                )}
                {feature.number == 4 && (
                  <Image 
                    src={certification}
                    alt="certification"
                    width={taille_icons}
                    height={taille_icons}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 font-primary-font ">
                {feature.title}
              </h3>
              <p className="text-md text-gray-600">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
