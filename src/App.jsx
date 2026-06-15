import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Education from './components/Education';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />

      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/education' element={<Education />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactSection />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;