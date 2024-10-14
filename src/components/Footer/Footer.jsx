"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/svg/logo.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-orfex-vert text-white">
      <div className="container m-auto flex flex-wrap items-start justify-between p-10">
        {/* Logo */}
        <div className="w-full md:w-1/4 p-2">
          <div className="flex flex-col justify-center gap-y-2">
            <div>
              <Image src={logo} alt="Logo" width={60} height={60} />
            </div>
            <p className="text-black text-md font-semi-bold">
              With over 10 years of experience, TaxConsult provides
              comprehensive tax services for individuals and businesses. We
              focus on delivering expert advice and seamless solutions to meet
              all your tax needs.
            </p>
          </div>
        </div>
        {/* Navigation */}
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-lg font-bold mb-4 text-black">Navigation</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-primary-color text-gray-900 text-md "
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <Link
                href="#services"
                className="hover:text-primary-color text-gray-900 text-md "
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#contact"
                className="hover:text-primary-color text-gray-900 text-md"
              >
                Contact us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#maps"
                className="hover:text-primary-color text-gray-900 text-md"
              >
                Maps
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#faq"
                className="hover:text-primary-color text-gray-900 text-md "
              >
                Questions fréquemment posées
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-lg font-bold mb-4 text-black">Social Media</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-blue-600 text-gray-900 text-sm">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-orange-500 text-gray-900 text-sm"
              >
                x
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500 text-gray-900 text-sm">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-three-color text-white p-6">
        <div className="container mx-auto text-center">
          <p className="mb-2 text-white font-meduim max-md:text-sm font-bold">
            © {currentYear} MWINDHA Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const FooterSkeleton = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-start p-10">
        {/* Logo */}
        <div className="w-full md:w-1/4 p-2">
          <div className="flex flex-col justify-center mb-4">
            <div className="h-12 w-auto bg-gray-300 rounded-full"></div>
            <div className="h-5 w-32 bg-gray-300 rounded-full mt-2"></div>
            <div className="h-5 w-48 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
        {/* Navigation */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
        {/* Réseaux sociaux */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
        {/* Informations de contact */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
      </div>
      <div className="bg-primary-color text-white p-6">
        <div className="container mx-auto text-center">
          <div className="h-5 w-48 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};
