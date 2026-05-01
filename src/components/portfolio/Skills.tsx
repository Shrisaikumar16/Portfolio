import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Context API"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "Razorpay Integration"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Concepts",
    items: ["Git / GitHub", "VS Code", "Chrome DevTools", "DSA", "Performance Opt.", "UI / UX"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-surface text-surface-foreground pb-24 sm:pb-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm font-mono text-muted-foreground">// stack</p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight">The toolkit I ship with</h2>
          </div>
          <span className="text-sm text-muted-foreground">Categorized by layer</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl bg-background text-foreground p-6 border border-border/50 hover:border-lime/60 transition-colors shadow-soft"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-lime text-primary-foreground mb-5 group-hover:rotate-6 transition-transform">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-lime" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
