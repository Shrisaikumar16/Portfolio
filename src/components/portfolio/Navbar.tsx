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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-6"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-border/60 bg-background/40 backdrop-blur-md px-4 sm:px-6 py-3">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid place-items-center h-8 w-8 rounded-lg bg-lime text-primary-foreground font-bold">
            S
          </span>
          <span className="hidden sm:inline">Shrisaikumar</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-lime px-4 sm:px-5 py-2 text-sm font-medium text-primary-foreground hover:shadow-glow transition-shadow"
        >
          <Mail className="h-4 w-4" />
          Contact Me
        </a>
      </nav>
    </motion.header>
  );
}
