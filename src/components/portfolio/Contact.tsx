import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "shrisai225@gmail.com", href: "mailto:shrisai225@gmail.com" },
  { icon: Github, label: "GitHub", value: "@Shrisaikumar16", href: "https://github.com/Shrisaikumar16/" },
  { icon: Linkedin, label: "LinkedIn", value: "in/shrisaikumar-sonari", href: "https://www.linkedin.com/in/shrisaikumar-sonari-8a9ab7211/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-lime"
        >
          // let's_build_together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-serif text-5xl sm:text-7xl tracking-tight text-balance"
        >
          Have a role in mind? <span className="italic text-lime">Let's talk.</span>
        </motion.h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          I'm open to full-time full stack and frontend roles. Drop a message — I usually reply within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:shrisai225@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all"
          >
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
          {/* Resume Download Link */}
          <a
            href="/resume.pdf"
            download="Shrisaikumar_Sonari_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-lime/60 transition-colors"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-5 text-left hover:border-lime/60 transition-colors"
            >
              <l.icon className="h-5 w-5 text-lime mb-3" />
              <div className="text-xs font-mono text-muted-foreground">{l.label}</div>
              <div className="mt-1 font-medium flex items-center justify-between">
                {l.value}
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-border/60 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 Shrisaikumar Sonari</span>
          <span className="font-mono">Crafted with React + TanStack Start</span>
        </footer>
      </div>
    </section>
  );
}