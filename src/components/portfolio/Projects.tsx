import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Inventino Jewels",
    tag: "E-commerce Platform",
    description:
      "Production e-commerce experience: product listings, cart, multi-step checkout, and Razorpay-powered payments. Built for scale and a buttery-smooth UX.",
    stack: ["Next.js", "Tailwind", "Razorpay", "REST API"],
    accent: "bg-lime text-primary-foreground",
    featured: true,
  },
  {
    title: "Full Stack App Suite",
    tag: "React · Node · Express",
    description:
      "A collection of full stack apps with REST APIs, MongoDB / MySQL, auth flows, and a clean component-driven frontend.",
    stack: ["React", "Express", "MongoDB", "MySQL"],
    accent: "bg-foreground text-background",
  },
  {
    title: "Component Library",
    tag: "Design System",
    description:
      "Reusable, accessible components with Context API state and consistent design tokens — the foundation behind faster shipping.",
    stack: ["React", "TypeScript", "Tailwind"],
    accent: "bg-card text-card-foreground border border-border",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface text-surface-foreground py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm font-mono text-muted-foreground">// selected_work</p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight">Projects I'm proud of</h2>
          </div>
          <a
            href="https://github.com/Shrisaikumar16/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-soft min-h-80 flex flex-col justify-between ${p.accent} ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-wider opacity-70">{p.tag}</span>
                <a
                  href="#"
                  className="grid place-items-center h-11 w-11 rounded-full bg-background/20 backdrop-blur border border-current/20 group-hover:rotate-45 transition-transform"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl mt-8">{p.title}</h3>
                <p className="mt-4 text-base opacity-80 max-w-xl leading-relaxed">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-background/15 backdrop-blur border border-current/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}