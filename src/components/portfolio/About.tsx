import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="bg-[#f8f8f8] text-black pt-24 sm:pt-32 pb-10 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl text-balance"
        >
          Building with purpose, shipping for impact, engineering for scale.
        </motion.h2>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-black text-white p-8 sm:p-10 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-gray-400 font-mono">// the_journey</p>
              <a
                href="#contact"
                className="grid place-items-center h-10 w-10 rounded-full bg-lime text-black hover:rotate-45 transition"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>

            <h3 className="mt-6 font-serif text-3xl sm:text-4xl">
              From AI & Data Science to Production Web Systems
            </h3>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a full stack developer specializing in{" "}
              <span className="text-white font-medium">
                Next.js, React, and Node.js
              </span>.
              My academic foundation in AI & Data Science helps me build scalable,
              data-driven web apps.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Currently building production-grade systems and sharpening my DSA
              daily — aiming for high-impact engineering roles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}