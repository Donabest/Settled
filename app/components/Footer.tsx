import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Footer() {
  const footerLinks = {
    Product: ["Features", "How it works", "Pricing"],
    Company: ["About", "Faq"],
  };
  return (
    <footer className="bg-black text-white border-t border-gray-100 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-10 flex flex-col gap-8 md:gap-4 md:grid md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-syne font-semibold text-2xl italic tracking-tight text-shadow-lg">
            <h5>
              Sett<span className="text-[#00C853]">✓</span>ed
            </h5>
          </div>
          <p className="font-sans text-xs text-white leading-relaxed italic">
            Get paid faster. No stress.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-3 font-syne">
            <h4 className="tracking-wide text-lg font-medium text-white">
              {category}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link === "How it works" ? "Howitworks" : link}`}
                    className="text-sm  text-neutral-400  hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-start space-y-4  ">
          <h4 className="font-syne tracking-wide text-lg font-medium">
            Newsletter
          </h4>
          <p className="text-sm text-neutral-400 font-nunito italic  ">
            Get tips,product updates,and insight on better invoice{" "}
          </p>
          <div className="relative w-full font-sans text-sm italic ">
            <input
              type="text"
              id="news"
              className="w-full h-10 px-4 border border-neutral-600 outline-0 rounded-3xl"
              placeholder="email address"
            />
            <label
              htmlFor="news"
              className=" absolute right-4 top-2 flex justify-center items-center bg-white text-muted px-2 py-0.5 rounded-3xl cursor-pointer hover:text-black "
            >
              Subscribe <ArrowRight size={10} />
            </label>
          </div>
        </div>

        <div className=" col-span-4 flex flex-col justify-between  pt-8 font-syne text-neutral-400 border-t border-neutral-900 md:flex-row">
          <h5 className="w-80 font-nunito text-[15px]  ">
            Stop chasing. Start earning. Settled handles the money conversation
            so you can focus on your work.
          </h5>
          <p className="uppercase pt-8 md:pt-0">Terms & Condition</p>
          <p className="uppercase">Privacy Policy</p>
        </div>
      </div>

      <p className="font-syne text-neutral-500 text-center mt-12 pt-6 italic border-t border-neutral-800">
        &copy; {new Date().getFullYear()} Settled. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
