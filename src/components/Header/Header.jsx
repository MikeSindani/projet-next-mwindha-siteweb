"use client";
import React, { useState } from "react";
import { useRef } from "react";
import whastapp from "@/svg/whastapp.svg";
import picture from "@/svg/picture_header.svg";
import logoHorizontal from "@/svg/logo.svg";
import Image from "next/image";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Phone } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenuLogo = useRef(null);
  const closeMenuLogo = useRef(null);
  const openMenu = useRef(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    openMenu.current?.classList.toggle("hidden");
    openMenuLogo.current?.classList.toggle("block");
    openMenuLogo.current?.classList.toggle("hidden");
    closeMenuLogo.current?.classList.toggle("hidden");
  };

  // variable
  const taille_icons = 20;

  return (
    <header className=" md:h-[97dvh] h-[160dvh] left-0 w-full">
      <div className=" w-full bg-cover bg-center bg-secondary-color">
        <nav className="flex justify-between items-center p-4 h-20 z-30 bg-white">
          <div className="flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => handleMenu()}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <div ref={openMenuLogo} className="block">
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <div ref={closeMenuLogo} className="hidden">
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <Image src={logoHorizontal} alt="Logo" width={60} height={60} />
          </div>
          <div className="hover:text-white p-2 rounded-md hover:bg-primary-color flex items-center justify-center gap-2 md:hidden">
            <Image
              src={whastapp}
              alt="Logo"
              width={taille_icons}
              height={taille_icons}
            />
          </div>
          <ul className="flex justify-between items-center gap-5 max-md:hidden">
            <li>
              <a
                href="#"
                className="text-md font-meduim text-black hover:text-gray-200 font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-md font-meduim text-black hover:text-gray-200 font-bold"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#affiliation"
                className="text-md font-meduim text-black hover:text-gray-200 font-bold"
              >
                Affiliation
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-md font-meduim text-black hover:text-gray-200 font-bold"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-md font-meduim text-white hover:text-gray-200 font-bold py-2 px-8 bg-three-color "
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div className="container md:p-6  left-0 w-full h-full md:h-[75dvh] flex flex-col mx-auto">
          <div className="flex max-md:flex-col-reverse md:justify-around justify-center gap-3 items-center w-full p-8 md:p-6">
            <div className="text-center space-y-2 w-full md:w-1/2">
              <h1 className="md:text-5xl text-3xl font-bold text-black font-primary-font md:text-left my-5">
                We make Tax filing <br />
                simple and easy.
              </h1>
              <h1 className="text-md font-bold text-center  md:text-left text-primary-color ">
                ABOUT US
              </h1>
              <p className="text-md  text-black text-justify md:w-96 w-full m-2">
                We take care of your Finance, Accounting and Payroll so that you
                can focus on your core business operations. We also help you cut
                costs on labor. With almost a decade of experience in Finance,
                Accounting and Payroll, we provide comprehensive services for
                individuals and businesses. We focus on delivering expert advice
                and seamless solutions to meet all your Finance, Accounting
                and Payroll needs.
              </p>
              {/**  bouton  */}
              <div className="flex gap-2 my-3 max-md:justify-center">
                <div className="flex gap-2 my-3">
                  <a
                    href="#contact"
                    className="text-md font-meduim text-white hover:text-gray-200 font-bold py-2 px-6 bg-three-color "
                  >
                    <WhatsAppOutlined /> Learn more
                  </a>
                </div>
                <div className="flex gap-2 my-3">
                  <a
                    href="tel:+27729153576"
                    className="flex justify-center items-center text-md font-meduim text-white hover:text-gray-200 font-bold py-2 px-4 bg-primary-color "
                  >
                    {" "}
                    <Phone color="white" size={20} />
                    <span className="mx-2">+27 729153576</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center md:w-1/2 md:p-10">
              <Image
                src={picture}
                alt="Logo"
                className="max-md:w-64 max-md:h-64"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Menu latéral ici */}
      <aside
        className={`fixed top-0 right-0 w-64 h-screen bg-primary-color z-50 transform  transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Mwindha</h2>
          <ul>
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#affiliation"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Affiliation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-sm text-white hover:borfex-bleu"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
}

export default Header;
