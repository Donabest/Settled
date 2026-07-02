import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

function Hero() {
  return (
    <header className="max-w-7xl h-[50vh] mx-auto mt-35">
      <div className="text-center space-y-4">
        <h1 className="text-[6vw] font-nunito font-medium text-center tracking-tight leading-20">
          Stop Chasing Clients.<br></br>{" "}
          <span className="font-light text-[5vw] italic">
            Start Getting Paid.
          </span>
        </h1>
        <p className="w-1/2 mx-auto font-sans text-[12px] text-muted">
          Settled turns your completed projects into professional invoices,
          Create professional invoices in seconds, share on WhatsApp, and
          confirmed transactions without the stress of chasing anyone down.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            type="button"
            className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-black/80  transition-colors cursor-pointer"
          >
            Get started free
          </button>
          <button
            type="button"
            className="text-[#0F172A] px-6 py-2.5 rounded-full border border-[#0F172A]/20 hover:bg-black/5 drop-shadow-2xl shadow-2xl transition-colors cursor-pointer"
          >
            See how it works
          </button>
        </div>
      </div>

      <div className="absolute -left-7 top-[50%] -rotate-6 ">
        <CardOne />
      </div>

      <div className="absolute -right-3 top-[50%] -rotate-6">
        <CardTwo />
      </div>
    </header>
  );
}

export default Hero;
