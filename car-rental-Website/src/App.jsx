import './App.css'
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Carlist } from './components/CarLists/Carlist';
import { Services } from './components/Services/Services';
import { Testimonial } from './components/testimonial/Testimonial'
import AOS from 'aos';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  //  Dark Mode Theme Switcher
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem('theme','dark');
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem('theme','light');
    }
  }, [theme])
  
  // AOS initizaliized
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <Navbar theme={theme} setTheme={setTheme}/>
    <Hero theme={theme}/>
    <About />
    <Services/>
    <Carlist/>
    <Testimonial/>
    <AppStoreBanner/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
