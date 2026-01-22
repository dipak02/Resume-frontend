import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Academic from './components/Academic'
import Main from './components/Main'
import Tools from './components/Tools'
import Services from './components/Services'
import Project from './components/Project'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
import BlogDetailPage from './components/BlogDetailPage';

function App() {
  return (
    <>
     
       <Navbar />
      <Routes>
       
   <Route 
  path='/' 
  element={
    <div id="home" className="w-full mx-auto px-1 py-6 space-y-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      <Main />
      <Tools />
      <Academic />
      <Services />
      <WorkExperience />
      <Project />
      <Contact />
      <Testimonials />
      <Blog />
      <Faqs />
      
    </div>
  } 
/>

        <Route path='/blog-page' element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
