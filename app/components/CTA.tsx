function CTA() {
  return (
    <section className=" py-20 border-t border-[#edf1f5]">
      <div className="relative flex flex-col justify-center items-center bg-white p-16 rounded-3xl overflow-hidden">
        <div className="mb-10 font-sans text-sm border border-gray-300 px-6 py-1.5 rounded-2xl">
          let settled.
        </div>
        <div className="flex flex-col justify-center items-center z-10 ">
          <h2 className="text-center text-3xl font-nunito font-bold  text-shadow-lg md:leading-14 md:text-5xl">
            You Did The Work.
            <br />
            <span className="text-center">
              Now Let Settled Handle The Rest.
            </span>
          </h2>
          <p className="text-center text-neutral-400 mt-4 text-sm font-sans italic">
            Free forever. No credit card required.
          </p>
          <button className="mt-6 bg-primary text-white px-8 py-2 rounded-3xl font-nunito italic cursor-pointer hover:bg-primary/80">
            Get started free →
          </button>
        </div>

        <div className="hidden absolute w-100 h-100 left-10 top-30 border-30 border-gray-50 rounded-full md:block"></div>
        <div className="absolute w-100 h-100 right-10 top-60 border-30 border-gray-50 rounded-full md:top-30"></div>
        <div className="hidden absolute left-8 top-1/2 -translate-y-1/2 w-48 h-64 rounded-2xl border-2 border-gray-200 opacity-30 rotate-[-8deg] md:block" />
        <div className="hidden absolute right-8 top-1/2 -translate-y-1/2 w-48 h-64 rounded-2xl border-2 border-gray-200 opacity-30 rotate-[8deg] md:block" />
      </div>
    </section>
  );
}

export default CTA;
