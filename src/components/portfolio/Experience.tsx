import { motion } from "framer-motion";

const timeline = [
  {
    period: "2026 — Present",
    role: "Frontend Developer Intern",
    company: "Inventino Jewels",
    points: [
      "Built product listings, cart, and multi-step checkout flow",
      "Integrated Razorpay payment gateway end-to-end",
      "Shipped with Next.js + Tailwind CSS, focused on UX & performance",
    ],
  },
  {
    period: "2025 — Present",
    role: "Self-Initiated Projects",
    company: "Independent",
    points: [
      "Built full stack apps with React, Next.js, Node.js, Express",
      "Designed REST APIs and integrated MongoDB",
      "Reusable component architecture and Context API state",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 sm:py-32 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-mono text-muted-foreground">// experience</p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight">Where I've been building</h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />
          <ul className="space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-0 sm:left-1 top-2 grid place-items-center h-7 w-7 rounded-full bg-lime text-primary-foreground text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl">
                    {t.role}{" "}
                    <span className="text-muted-foreground">· {t.company}</span>
                  </h3>
                  <span className="text-sm text-lime font-mono">{t.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="text-muted-foreground flex gap-3">
                      <span className="text-lime">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
