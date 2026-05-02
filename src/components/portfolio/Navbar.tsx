import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      // className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-6"
      // className="sticky top-0 z-50 px-4 sm:px-8 py-4"
      className="sticky top-0 left-0 right-0 z-[100] w-full bg-black border-b border-white/10"    
      >

      {/* <nav className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-border/60 bg-black/40 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-soft"> */}
        <nav className="flex items-center justify-between w-full px-6 sm:px-10 py-3">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-lime text-black font-bold shadow-glow">
            S
          </span>
          <span className="hidden sm:inline text-white">Shrisaikumar</span>
        </a>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-lime transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium
          bg-lime text-black
          border-2 border-transparent
          transition-all duration-300 ease-out
          hover:border-white"
        >
          <Mail className="h-4 w-4" />
          Contact Me
        </a>
      </nav>
    </motion.header>
  );
}