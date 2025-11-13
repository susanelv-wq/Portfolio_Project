import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" key="latest">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </main>
  )
}
