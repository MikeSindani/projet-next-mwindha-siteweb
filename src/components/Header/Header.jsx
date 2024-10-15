"use client";
import React, { useState } from "react";
import { useRef } from "react";
import whastapp from "@/svg/whastapp.svg";
import picture from "@/svg/picture_header.svg";
import logoHorizontal from "@/svg/logo.svg";
import Image from "next/image";

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
 const taille_icons   = 20;

  return (
    <header className=" md:h-[95dvh] h-[160dvh] left-0 w-full">
      <div className=" w-full h-full bg-cover bg-center bg-secondary-color">
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
              <Image src={whastapp} alt="Logo" width={taille_icons} height={taille_icons} />
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
                href="#team"
                className="text-md font-meduim text-black hover:text-gray-200 font-bold"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-md font-meduim text-white hover:text-gray-200 font-bold"
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
        <div className="container  left-0 w-full h-[110dvh] md:h-[75dvh] flex flex-col mx-auto">
          <div className="flex max-md:flex-col-reverse justify-between gap-3 items-center h-full w-full my-10 p-12 md:p-4">
            <div className="text-center space-y-3 w-full md:w-1/2">
              <h1 className="md:text-5xl text-3xl font-bold text-black font-primary-font md:text-left my-5">
                We make Tax filing <br />
                simple and easy.
              </h1>
              <h1 className="text-md font-bold  text-left text-primary-color ">
                ABOUT US
              </h1>
              <p className="text-md  text-black text-justify w-96 my-2">
                With over 10 years of experience, TaxConsult provides
                comprehensive tax services for individuals and businesses. We
                focus on delivering expert advice and seamless solutions to meet
                all your tax needs.
              </p>
              <div className="flex gap-2 my-3">
                <div>
                  <a
                    href="#contact"
                    className="text-md font-meduim text-white hover:text-gray-200 font-bold py-2 px-8 bg-three-color "
                  >
                    Learn more
                  </a>
                </div>
                <div>
                  <a
                    href="tel:"
                    className="text-md font-meduim text-white hover:text-gray-200 font-bold py-2 px-8 bg-primary-color "
                  >
                     +27 000000 00000
                  </a>
                </div>
              </div>
             
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2 ">
              <Image
                src={picture}
                alt="Logo"
                className="max-md:w-60 max-md:h-60 mr-4"
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
                href="#maps"
                className="block px-4 py-2 text-sm text-white hover:bg-orfex-bleu"
              >
                Maps
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
