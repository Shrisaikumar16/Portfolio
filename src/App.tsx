import { Navbar } from "./components/portfolio/Navbar"
import { Hero } from "./components/portfolio/Hero"
import { Marquee } from "./components/portfolio/Marquee"
import { About } from "./components/portfolio/About"
import { Skills } from "./components/portfolio/Skills"
import { Experience } from "./components/portfolio/Experience"
import { Projects } from "./components/portfolio/Projects"
import { Contact } from "./components/portfolio/Contact"

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}