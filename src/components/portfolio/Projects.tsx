import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Inventino Jewels",
    tag: "E-commerce Platform",
    description:
      "Production e-commerce experience with smooth UX and Razorpay integration.",
    stack: ["Next.js", "Tailwind", "Razorpay"],
    featured: true,
    link: "#contact",
  },
  {
    title: "SigmaGPT (ChatGPT Replica)",
    tag: "React · Node · Express · MongoDB",
    description:
      "Architected a high-concurrency chat ecosystem using the MERN stack, leveraging Socket.io to reduce message latency by 40%. Engineered a custom stream-handling service for GPT-4 API integration, ensuring fluid text generation and state management via React Context API. Secured the platform with JWT-based authentication and bcrypt, utilizing a normalized MongoDB schema for efficient nested history retrieval.",
    stack: ["React", "Express", "MongoDB", "Node"],
    link: "https://sigma-gpt-project-frontend-rhgb.vercel.app/login",
  },
  {
    title: "Wanderlust (Airbnb Replica)",
    tag: "React · Node · Express · MongoDB",
    description:
      "Directed the development of a scalable marketplace featuring full CRUD functionality and secure Passport.js authentication. Integrated interactive map visualizations and dynamic location tracking through the Mappls API. Optimized asset delivery by engineering a Cloudinary media pipeline, resulting in 30% faster image loading speeds.",
    stack: ["React", "Express", "MongoDB", "Node"],
    link: "https://major-project-evzg.onrender.com/listings",
  },
];

export function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="projects"
      className="bg-[#f8f8f8] text-black py-24 sm:py-32 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm font-mono text-gray-500">// selected_work</p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl">
              Projects I'm proud of
            </h2>
          </div>

          <a
            href="https://github.com/Shrisaikumar16/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium
            bg-lime text-black transition-all duration-300 ease-out hover:opacity-90 self-start"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              // target="_blank"
              target={p.link.startsWith("#") ? "_self" : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}

              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}

              className={`group relative overflow-hidden rounded-3xl p-8 
              transition-all duration-300 cursor-pointer block
              ${
                p.featured
                ? "bg-lime text-black md:col-span-2 shadow-glow"
                : i % 2 === 1
                ? "bg-white text-black border border-gray-200 shadow-soft hover:scale-[1.03] hover:-translate-y-1"
                : "bg-black text-white shadow-soft hover:scale-[1.03] hover:-translate-y-1"
              }`}
            >

              {/* 🔥 CURSOR GLOW */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(132,255,0,0.15), transparent 60%)`,
                }}
              />

              {/* TOP ROW */}
              <div className="flex justify-between relative z-10">
                <span className="text-xs font-mono opacity-70">{p.tag}</span>

                {/* HOVER ARROW */}
                <div
                  className={`h-10 w-10 rounded-full border flex items-center justify-center
                  opacity-0 translate-y-2 scale-90
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                  ${p.featured || i % 2 === 1 ? "border-black text-black" : "border-white text-white"}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-3xl font-serif mt-6 relative z-10">
                {p.title}
              </h3>

              <p className="mt-3 opacity-80 relative z-10">
                {p.description}
              </p>

              {/* STACK */}
              <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs rounded-full border border-current/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}