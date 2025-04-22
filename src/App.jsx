import React from 'react'
import Nav from './sections/nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Clinet from './sections/Clinet'
import Contact from './sections/contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="w-full mx-auto">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Clinet />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
