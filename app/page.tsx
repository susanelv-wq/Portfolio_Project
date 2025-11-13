import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyBuilt } from "@/components/why-built"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Awards } from "@/components/awards"
import { References } from "@/components/references"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" key="latest">
      <Header />
      <Hero />
      <About />
      <WhyBuilt />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <References />
      <Contact />
      <Footer />
    </main>
  )
}
