import { useRef } from 'react'
import About from '~/components/About'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import Project from '~/components/Project'
import Technologies from '~/components/Technologies'

const App = () => {
  const projectRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const scrollToProject = () => {
    projectRef.current.scrollIntoView()
  }
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView()
  }
  const scrollContact = () => {
    contactRef.current.scrollIntoView()
  }

  return (
    <div className='w-full bg-gradient-to-br from-cyan-500 to-violet-500 px-1 text-white md:px-2 lg:px-padding-main'>
      <Header scrollToProject={scrollToProject} scrollToAbout={scrollToAbout} scrollContact={scrollContact} />
      <Intro ref={contactRef} />
      <Project ref={projectRef} />
      <Technologies />
      <About ref={aboutRef} />
      <Footer />
    </div>
  )
}
export default App
