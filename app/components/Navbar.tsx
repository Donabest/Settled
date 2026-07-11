"use client";
import { useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

const Nav = [
  {
    link: "Home",
    to: "/",
  },
  {
    link: "Features",
    to: "#Features",
  },
  {
    link: "How it works",
    to: "#HowItWorks",
  },
  {
    link: "Pricing",
    to: "#Pricing",
  },
];
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <nav className="fixed top-0 left-0 right-0 z-99 bg-[#f8fafc]/70  shadow-xs backdrop-blur-lg ">
      <div className="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto md:px-8">
        <div className="font-syne font-semibold text-2xl italic tracking-tight text-shadow-lg">
          <Link href="/">
            Sett<span className="text-[#00C853]">✓</span>ed
          </Link>
        </div>

        <ul className="hidden space-x-6 font-monserrat font-medium  md:flex ">
          {Nav.map((navlink) => (
            <li
              key={navlink.to}
              onClick={() => setActiveNav(navlink.link)}
              className={cn(
                activeNav === navlink.link ? "text-[#0F172A]" : "text-muted",
                "hover:text-[#0F172A]",
              )}
            >
              <Link href={navlink.to}>{navlink.link}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden space-x-4 font-nunito md:flex">
          <button
            type="button"
            className="shadow-sm px-6 py-1.5 cursor-pointer rounded-3xl"
          >
            Login
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-1.5 bg-black/90 text-white text-sm  cursor-pointer rounded-full  "
          >
            Get Started
            <ArrowRight size={15} />
          </button>
        </div>

        <button
          title="button"
          className={cn(
            openNav && "open",
            "z-30 block md:hidden focus:outline-none hamburger ",
          )}
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <MobileNavigation
        navLinks={Nav}
        open={openNav}
        close={() => setOpenNav(false)}
      />
    </nav>
  );
}

export default Navbar;
