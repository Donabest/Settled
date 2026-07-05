import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import InvoicePreview from "./components/InvoicePreview";
import Pricing from "./components/Pricing";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function page() {
  return (
    <main className=" px-8 max-w-7xl mx-auto md:px-8">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      {/* <InvoicePreview /> */}
      <Pricing />
      <CTA />
    </main>
  );
}

export default page;
