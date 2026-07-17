import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MyToolbox from './components/MyToolbox'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />

      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>

      <div id="about" className="scroll">
        <About />
      </div>

      <div id="toolbox" className="scroll-mt-12">
        <MyToolbox />
      </div>

      <div id="resume" className="scroll-mt-12">
        <Resume />
      </div>

      <div id="projects" className="scroll-mt-12">
        <Project />
      </div>

      <div id="contact" className="scroll-mt-12">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
