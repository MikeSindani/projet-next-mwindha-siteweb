"use client";
import Image from "next/image";
import maps from "@/svg/maps.svg";
import phone from "@/svg/phone.svg";
import mail from "@/svg/mail.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function SectionsContact() {
  return (
    <section
      id="contact"
      className="flex flex-col p-6 md:p-10 space-y-2 bg-white"
    >
      <div className="m-3 relative">
        <h1 className="text-md font-bold  text-center text-primary-color ">
          CONTACT US
        </h1>
        <p className="text-md text-slate-800 text-center">
          Contact us at any time for more information about us or our activities
        </p>
      </div>
      <ScrollAnimation animateIn="fadeIn" delay={300}>
        <div>
          <div className="flex flex-col">
            <div className="flex gap-2 max-md:flex-col-reverse">
              <div className="flex flex-col gap-3 w-full md:w-1/3 p-6 bg-white shadow-xl rounded-xl">
                <h2 className="text-black font-semibold text-xl md:text-2xl font-primary-font">
                    Schedule A Free Consultation
                </h2>
                <div className="p-3">
                  <form
                    className="flex gap-5 flex-col justify-center "
                    action="https://formsubmit.co/info@mwindha.coza "
                    method="POST"
                    id="info@mwindha.coza"
                  >
                    <div className="flex flex-col">
                      <label>
                        {" "}
                        <span className="label font-secondary-font text-orfex-vert">
                          Your Name
                        </span>{" "}
                      </label>
                      <input
                        className=" p-3 bg-slate-100  w-full  text-black text-sm"
                        type="text"
                        name="name"
                        placeholder="Nom "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>
                        {" "}
                        <span className="label font-secondary-font text-orfex-vert">
                          Your Email
                        </span>{" "}
                      </label>
                      <input
                        className=" p-3 bg-slate-100 text-black text-sm"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>
                        {" "}
                        <span className="label font-secondary-font text-orfex-vert">
                          Your Phone
                        </span>{" "}
                      </label>
                      <input
                        className=" p-3   w-full bg-slate-100 text-black text-sm"
                        type="tel"
                        name="phone"
                        placeholder="Numero de Téléphone"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="thank you for your message we will get back to you soon ..."
                    />
                    <input type="hidden" name="_template" value="basic" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="flex flex-col">
                      <label>
                        {" "}
                        <span className="label font-secondary-font text-orfex-vert">
                          Your Message
                        </span>{" "}
                      </label>
                      <textarea
                        className=" p-3   bg-slate-100 text-black text-sm"
                        placeholder="Share your requirements*"
                        name="message"
                      ></textarea>
                    </div>

                    <button className=" py-2 px-6 text-white font-bold uppercase w-36 bg-primary-color hover:opacity-80 transition-all  text-sm">
                      Send Mail
                    </button>
                  </form>
                </div>
              </div>
              <div id="maps" className="md:w-2/3 p-6 flex flex-col w-full">
                <div
                  className="md:m-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    alignItems: "start",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="flex flex-col gap-1 justify-center items-center w-36">
                    <Image src={maps} alt="Logo" width={50} height={50} />
                    <div>
                      <a href="maps.google.com" className="text-sm font-bold">
                      RIVERCLUB, SANDTON SOUTH AFRICA

                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center w-36">
                    <Image src={phone} alt="Logo" width={50} height={50} />
                    <div>
                      <a href="tel:+27729153576" className="text-sm font-bold">
                         +27 729153576
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center w-36">
                    <Image src={mail} alt="Logo" width={50} height={50} />
                    <div>
                      <a
                        href="mailto:info@mwindha.coza"
                        className="text-sm font-bold"
                      >
                      info@mwindha.coza
                      </a>
                    </div>
                  </div>
                </div>
                <div id="map" className="w-full h-96 bg-slate-50 md:m-3">
                   mwindha
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
