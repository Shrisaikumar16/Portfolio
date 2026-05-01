import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-surface text-surface-foreground py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl text-balance"
        >
          Building with purpose, shipping for impact, engineering for scale.
        </motion.h2>

        <div className="mt-16">
          {/* Removed the grid columns to let this card take full width after removing the stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-background text-foreground p-8 sm:p-10 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground font-mono">// the_journey</p>
              <a href="#contact" className="grid place-items-center h-10 w-10 rounded-full bg-lime text-primary-foreground hover:rotate-45 transition-transform">
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
            <h3 className="mt-6 font-serif text-3xl sm:text-4xl">From AI & Data Science to Production Web Systems</h3>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a full stack developer specializing in <span className="text-foreground">Next.js, React, and Node.js</span>. 
              My academic foundation in Artificial Intelligence and Data Science provides me with a unique, systematic perspective on building scalable, data-driven web applications. 
              Currently, I'm building high-performance e-commerce experiences at Inventino Jewels, focusing heavily on frontend architecture, user experience, and writing code that holds up in production.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm sharpening my DSA skills daily — looking to join a high-velocity team
              where I can ship real products and grow into a well-rounded software engineer.
            </p>
          </motion.div>
          {/* Removed the stats sidebar completely */}
        </div>
      </div>
    </section>
  );
}