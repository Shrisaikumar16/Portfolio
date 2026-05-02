import { motion } from "framer-motion";

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "REST APIs",
];

const loopItems = [...techStack, ...techStack];

export function Marquee() {
  return (
    <section className="bg-black border-t border-border/40 overflow-hidden w-full">
      <div className="py-4 whitespace-nowrap group">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
        >
          {loopItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-6 text-white text-lg font-serif"
              whileHover={{ scale: 1.05 }}
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 SMOOTH HOVER CONTROL */}
      <style>
        {`
          section:hover .flex {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}