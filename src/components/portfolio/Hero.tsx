import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.png";

const pills = [
  { label: "Next.js / React", className: "top-[18%] left-[6%]" },
  { label: "Node + Express", className: "top-[32%] right-[6%]" },
  { label: "MongoDB / SQL", className: "top-[58%] left-[2%]" },
  { label: "JavaScript", className: "top-[50%] right-[2%]" }, // Replaced UI/UX
  { label: "DSA", className: "bottom-[18%] left-[14%]" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background bg-grid"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-36 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs sm:text-sm text-lime"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for Full Stack Roles · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 font-serif text-balance text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight"
        >
          Hello, I'm <span className="italic">Shrisaikumar</span>
          <br />
          <span className="text-muted-foreground">Full Stack Developer</span>
        </motion.h1>

        <div className="relative mt-10 sm:mt-14 mx-auto max-w-2xl h-95 sm:h-115">
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className={`absolute z-20 ${p.className}`}
            >
              <div className="pill-outline rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                {p.label}
              </div>
            </motion.div>
          ))}

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={portrait}
            alt="Shrisaikumar Sonari, Full Stack Developer"
            width={1024}
            height={1024}
            className="relative z-10 mx-auto h-full w-auto object-contain drop-shadow-2xl"
          />
          {/* Stats Badge removed from here */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-4 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-6 py-3 text-sm font-medium hover:border-lime/60 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}