"use client";
import { useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nav } from "motion/react-client";

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
  {
    link: "Contact",
    to: "#Contact",
  },
];
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <nav className=" shadow-xs backdrop-blur-2xl ">
      <div className="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto md:px-8">
        <div className="font-syne font-semibold text-2xl italic tracking-tight text-shadow-lg">
          <Link href="/">
            Sett<span className="text-[#00C853]">✓</span>ed
          </Link>
        </div>

        <ul className="hidden space-x-6 font-nunito font-semibold  md:flex ">
          {Nav.map((navlink) => (
            <li
              key={navlink.to}
              onClick={() => setActiveNav(navlink.link)}
              className={cn(
                activeNav === navlink.link ? "text-[#0F172A]" : "text-muted",
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
    </nav>
  );
}

export default Navbar;
