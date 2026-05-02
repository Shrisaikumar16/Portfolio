import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "shrisai225@gmail.com", href: "mailto:shrisai225@gmail.com" },
  { icon: Github, label: "GitHub", value: "@Shrisaikumar16", href: "https://github.com/Shrisaikumar16/" },
  { icon: Linkedin, label: "LinkedIn", value: "in/shrisaikumar-sonari", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32 px-4 sm:px-8 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">

        <p className="text-sm font-mono text-lime">// let's_build_together</p>

        <h2 className="mt-4 font-serif text-5xl sm:text-7xl">
          Have a role in mind? <span className="text-lime italic">Let's talk.</span>
        </h2>

        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          I'm open to full-time roles. Drop a message — I reply within 24 hours.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          {/* HIRE ME */}
          <a
            href="mailto:shrisai225@gmail.com"
            className="bg-lime text-black px-6 py-3 rounded-full shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white 
            bg-zinc-900/90 border border-zinc-700 
            transition-all duration-300 ease-out
            hover:border-lime 
            hover:shadow-[0_0_12px_rgba(132,255,0,0.4)]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4 items-start">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              
              className="group bg-black/80 border border-border rounded-2xl p-6 text-left
              transform will-change-transform
              transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:scale-105 hover:-translate-y-1
              hover:border-lime
              hover:shadow-[0_0_20px_rgba(132,255,0,0.6),0_0_40px_rgba(132,255,0,0.25)]"
            >
              {/* ICON */}
              <l.icon className="h-5 w-5 text-lime mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />

              {/* LABEL */}
              <div className="text-xs text-muted-foreground">{l.label}</div>

              {/* VALUE + ARROW */}
              <div className="mt-1 flex justify-between items-center font-medium">
                {l.value}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-20 text-sm text-muted-foreground flex justify-between flex-wrap gap-2">
          <span>© 2026 Shrisaikumar Sonari</span>
          <span>Crafted with React</span>
        </footer>
      </div>
    </section>
  );
}