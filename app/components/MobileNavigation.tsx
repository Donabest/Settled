"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../lib/type";

type props = {
  navLinks: navLinks[];
  open: boolean;
  close: () => void;
};
function MobileNavigation({ open, navLinks, close }: props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          className="divide-y divide-stone-300 space-y-2 pt-6 md:hidden"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          {navLinks.map((navlink, i) => (
            <motion.li
              key={i}
              className="text-[17px] transition-color py-2 px-4 text-muted hover:text-black"
              whileHover={{
                y: -2,
              }}
              transition={{
                type: "spring",
                ease: "easeInOut",
              }}
              onClick={close}
            >
              <Link href={navlink.to}>{navlink.link}</Link>
            </motion.li>
          ))}
          <li className="text-[17px] transition-color py-2  px-4 text-muted hover:text-black">
            Sign in
          </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;
