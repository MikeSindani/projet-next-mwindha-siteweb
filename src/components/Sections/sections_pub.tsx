import quality from "@/svg/qualite.svg"
import team from "@/svg/teams.svg"
import Image from "next/image";
export default function SectionsPub() {
  const features = [
    {
      icon: "👤",
      title: "Quality service",
      description: "We offer the best taxes with great speed",
    },
    {
      icon: "✓",
      title: "Reliability",
      description: "We offer the best taxes with great speed",
    },
    {
      icon: "👥",
      title: "Our teams",
      description: "We have a highly motivated and responsive team",
    },
  ];

  const taille_icons : number = 30;

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-3 p-4 py-16 bg-secondary-color">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl p-6 w-64">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-white text-2xl mb-4">
                {feature.title == "Quality service" && <Image src={quality} alt="Logo" width={taille_icons} height={taille_icons} />}
                {feature.title == "Reliability" && feature.icon}
                {feature.title == "Our teams" && <Image src={team} alt="Logo" width={taille_icons} height={taille_icons} />}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2 font-primary-font">
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
