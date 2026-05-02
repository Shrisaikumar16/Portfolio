import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5 / CSS3", "Context API"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "Razorpay"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Concepts",
    items: ["Git / GitHub", "VS Code", "DevTools", "DSA", "Performance", "UI / UX"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#f8f8f8] text-black pt-10 pb-24 sm:pb-32 px-4 sm:px-8 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm font-mono text-gray-500">// stack</p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl">
              The toolkit I ship with
            </h2>
          </div>
          <span className="text-sm text-gray-500">Categorized by layer</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black text-white rounded-3xl p-6 shadow-soft hover:scale-[1.03] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-lime text-black grid place-items-center mb-5">
                <g.icon className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-serif mb-4">{g.title}</h3>

              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-gray-300 flex gap-2">
                    <span className="h-1 w-1 rounded-full bg-lime mt-2" />
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