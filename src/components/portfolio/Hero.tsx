import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.png";

const pills = [
  { label: "Next.js / React", className: "top-[18%] left-[6%]" },
  { label: "Node + Express", className: "top-[32%] right-[6%]" },
  { label: "MongoDB / SQL", className: "top-[58%] left-[2%]" },
  { label: "JavaScript", className: "top-[50%] right-[2%]" },
  { label: "DSA", className: "bottom-[18%] left-[14%]" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-x-hidden bg-background bg-grid scroll-mt-16"
    >
      {/* 🌟 RADIAL GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none z-0" />

      {/* 🌟 SOFT GREEN BLUR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-12 pb-16 text-center">

        {/* 🔥 STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs sm:text-sm text-lime backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for Full Stack Roles · 2026
        </motion.div>

        {/* 🔥 MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 font-serif text-balance text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-tight"
        >
          Hello, I'm <span className="italic">Shrisaikumar</span>
          <br />
          <span className="text-muted-foreground">
            Full Stack Developer
          </span>
        </motion.h1>

        {/* 🔥 IMAGE + FLOATING PILLS */}
        <div className="relative mt-4 sm:mt-6 mx-auto max-w-2xl h-[420px] sm:h-[520px]">

          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className={`absolute z-20 ${p.className}`}
            >
              <div
                className="rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border border-lime/50 bg-black/60 text-lime backdrop-blur shadow-glow animate-float"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {p.label}
              </div>
            </motion.div>
          ))}

          {/* 🔥 IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={portrait}
            alt="Shrisaikumar Sonari"
            className="relative z-10 mx-auto h-full w-auto object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* 🔥 CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-semibold text-black shadow-glow hover:scale-105 transition-all"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium 
            bg-background text-white border border-zinc-700
            transition-all duration-300 ease-out
            hover:border-lime 
            hover:shadow-[0_0_12px_rgba(132,255,0,0.5)]"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}