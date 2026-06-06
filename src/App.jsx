import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Academic from './components/Academic'
import Main from './components/Main'
import Tools from './components/Tools'
import Services from './components/Services'
import Project from './components/Project'
// import Blog from './components/Blog'
import Contact from './components/Contact'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
// import BlogDetailPage from './components/BlogDetailPage';

function App() {
  const [typedText, setTypedText] = useState('')
  const [overlayVisible, setOverlayVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const welcomeMessage = "Hello! I'm Dipak Kumar Shah."

  useEffect(() => {
    let currentIndex = 0
    let timeoutId = null

    const typeNextCharacter = () => {
      if (currentIndex < welcomeMessage.length) {
        setTypedText(welcomeMessage.slice(0, currentIndex + 1))
        currentIndex += 1
        const delay = currentIndex === 1 ? 300 : 120
        timeoutId = setTimeout(typeNextCharacter, delay)
      } else {
        timeoutId = setTimeout(() => {
          setOverlayVisible(false)
          setShowContent(true)
        }, 800)
      }
    }

    timeoutId = setTimeout(typeNextCharacter, 400)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className={`fixed inset-0 z-[9999] bg-[#073224] text-white flex items-center justify-center px-6 py-8 transition-opacity duration-700 ${overlayVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="max-w-[95vw] text-center overflow-hidden">
          <h1 className={`text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] font-black tracking-tight text-emerald-300/25 leading-none text-center whitespace-normal max-w-[95vw] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${overlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {typedText}
            <span className={`inline-block w-[2px] h-[1.1em] ml-2 bg-white align-middle ${overlayVisible ? 'typewriter-cursor' : ''}`} />
          </h1>
        </div>
      </div>

      <div className={`transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
       <Navbar />
      <Routes>
       
   <Route 
  path='/' 
  element={
    <div id="home" className="min-h-screen w-full mx-auto px-0 py-0 space-y-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      <Main />
      <Tools />
      <Academic />
      <Services />
      <WorkExperience />
      <Project />
      <Contact />
      <Testimonials />
     
      <Faqs />
      
    </div>
  } 
/>

        
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
