import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Navlinks from "@/components/Navlinks"
import Education from "@/components/Education"
import ScrollReveal from "@/components/ScrollReveal"
import { useState } from "react"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <section className="min-h-screen overflow-x-hidden relative dark:bg-black/70 dark:text-white transition-colors duration-200">
        <Navbar show={isMenuOpen} setShow={setIsMenuOpen}/>
        
        <main className={`transition-all duration-500 ${
          isMenuOpen ? "blur-sm opacity-50 pointer-events-none" : "opacity-100"
        }`}>
          <ScrollReveal yOffset={30} delay={0.1}>
            <Hero/>
          </ScrollReveal>
          
          <ScrollReveal>
            <About/>
          </ScrollReveal>

          <ScrollReveal>
            <Skills/>
          </ScrollReveal>

          <ScrollReveal>
            <Projects/>
          </ScrollReveal>

          <ScrollReveal>
            <Education/>
          </ScrollReveal>

          <ScrollReveal>
            <Contact/>
          </ScrollReveal>
        </main>
        <div className={`transition-all duration-500 ease-in-out ${isMenuOpen ? "blur-sm opacity-40 pointer-events-none" : ""}`}>
          <Navlinks/>
        </div>
        {/* <Footer/> */}
      </section>
    </>
  )
}

export default App
