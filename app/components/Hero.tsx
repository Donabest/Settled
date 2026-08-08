import { ArrowRight } from "lucide-react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Link from "next/link";

function Hero() {
  return (
    <header className="max-w-7xl  mx-auto mt-50">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-nunito font-medium text-center tracking-tight leading-16 md:leading-20 md:text-[6vw]">
          Stop Chasing Clients.<br></br>
          <span className="font-light text-4xl italic md:text-[5vw]">
            Start Getting Paid.
          </span>
        </h1>
        <p className=" mx-auto font-sans text-[12px] text-muted md:w-1/2">
          Settled turns your completed projects into professional invoices,
          Create professional invoices in seconds, share on WhatsApp, and
          confirmed transactions without the stress of chasing anyone down.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-10 font-monserrat font-medium">
          <Link
            href=""
            type="button"
            className="flex justify-center items-center gap-2  bg-black text-white px-6 py-4 rounded-sm hover:bg-black/80  cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-0.5"
          >
            Get started free
            <ArrowRight size={15} />
          </Link>
          <Link
            href="#HowItWorks"
            type="button"
            className="text-[#0F172A] px-6 py-4 border border-[#0F172A]/20 rounded-sm cursor-pointer shadow-2xs transition-all duration-250 ease-in-out hover:shadow-2xl hover:-translate-y-0.5 hover:bg-black/5 "
          >
            See how it works
          </Link>
        </div>
      </div>

      <div className="absolute top-[13%] -left-9 md:-left-7 md:top-[50%] -rotate-6 ">
        <CardOne />
      </div>

      <div className="absolute top-[75%] -right-8 md:-right-3 md:top-[50%] -rotate-6">
        <CardTwo />
      </div>
    </header>
  );
}

export default Hero;
