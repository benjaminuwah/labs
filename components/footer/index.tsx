"use client";

import React from "react";
import { Phone, /* MapPin, */ Mail, Globe } from "lucide-react";
// import { LiaLinkedin } from "react-icons/lia";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      {/* Top Section */}
      <section className="bg-deep-navy text-white py-12 px-8 border-b border-gray-700">
        <div className="container mx-auto md:px-40 md:flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              FOR A SECURE FUTURE,
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-defence-gold">
              THE RIGHT SOLUTIONS PARTNER.
            </h2>
          </div>
          <div className="text-left mb-8 lg:mb-0">
            <p className="text-lg max-w-lg">
              Contact us for tailored solutions and trusted partnerships aligned
              to your operational needs.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact-us")}
            className="bg-defence-gold text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-defence-gold/80 transition-colors"
          >
            <span>GET IN TOUCH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="bg-deep-navy text-gray-300 py-10 px-8">
        <div className="container mx-auto flex flex-col justify-center gap-4">
          {/* <div className="flex flex-col items-center justify-center gap-2">
            <MapPin className="mt-0.5 h-4 w-4 text-defence-gold" />
            <span>ANKARA: </span>
            <span>
              ABUJA: Plot 414, Katampe Close, Katampe, Abuja, Nigeria.
            </span>
          </div> */}
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
            <Phone className="h-4 w-4 text-defence-gold" />
            <span> Turkey: +90 5333 258 840</span>
            <span> United Kingdom: +44 7511 581 476</span>
            <span> Nigeria: +234 903 0420 993</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-defence-gold" />
              <span>info@labdefencesolutions.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="h-4 w-4 text-defence-gold" />
              <span>www.labdefencesolutions.com</span>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            {/* <LiaLinkedin className="h-5 w-5 cursor-pointer hover:text-defence-gold transition-colors" /> */}
            {/*<BsTwitter className="h-5 w-5 cursor-pointer hover:text-defence-gold transition-colors" />*/}
            {/*<BsYoutube className="h-5 w-5 cursor-pointer hover:text-defence-gold transition-colors" />*/}
            {/*<BsInstagram className="h-5 w-5 cursor-pointer hover:text-defence-gold transition-colors" />*/}
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-black text-gray-400 py-6 px-8">
        <div className="container mx-auto flex justify-center">
          <p className=" mb-4 md:mb-0 text-center">
            © 2026 LAB Defence Solutions. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-defence-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-defence-gold transition-colors">
              Terms of Use
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
