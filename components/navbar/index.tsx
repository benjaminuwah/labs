"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { logo3 } from "@/public/images/logo";
import Image from "next/image";
import Link from "next/link";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import HeaderLink from "./Navigation/HeaderLink";

const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "#about" },
  { id: 2, label: "Capabilities", href: "#capabilities" },
  // { id: 2, label: "Solutions", href: "#solutions" },
  // { id: 2, label: "OEM & Partners", href: "#partners" },
  // { id: 2, label: "News", href: "#news" },
  // { id: 2, label: "Contact", href: "#contact-us" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    },
    [navbarOpen],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <>
      <nav
        className={`bg-white sticky top-0 z-20 w-full transition-all duration-300 ${
          sticky ? "shadow-lg" : "shadow-none bg-deep-navy"
        }`}
      >
        <div>
          <div className="container flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo3}
                alt="logo"
                width={200}
                height={200}
                className="h-auto w-30 md:w-40"
              />
            </Link>

            <div className="flex items-center gap-2 lg:gap-10">
              <nav className="hidden lg:flex grow items-center gap-4 xl:gap-6 justify-center text-deep-navy">
                {navLinks.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </nav>
              <Link
                href="/contact-us"
                rel="noopener noreferrer"
                className="hidden md:block bg-defence-gold text-white hover:bg-opacity-90 uppercase font-semibold py-2 px-6 md:py-4 md:px-8 rounded text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch{" "}
              </Link>

              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="block lg:hidden p-2 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              </button>
            </div>
          </div>
          {navbarOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
          )}
          <div
            ref={mobileMenuRef}
            className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
              navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
          >
            <div className="flex items-center justify-between gap-2 p-4">
              <button
                onClick={() => setNavbarOpen(false)}
                className="hover:cursor-pointer text-black"
                aria-label="Close menu Modal"
              >
                {/* <Icon
                  icon="material-symbols:close-rounded"
                  width={24}
                  height={24}
                  className="text-black hover:text-primary text-24 inline-block me-2"
                /> */}{" "}
                Menu
              </button>
            </div>
            <nav className="flex flex-col items-start p-4">
              {navLinks.map((item, index) => (
                <MobileHeaderLink
                  key={index}
                  item={item}
                  closeMenu={() => setNavbarOpen(false)}
                />
              ))}
              <Link
                href="/contact-us"
                rel="noopener noreferrer"
                className=" bg-black hover:bg-opacity-90 text-white font-semibold py-2 px-6 md:py-4 md:px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch{" "}
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
