import { useState, useEffect } from 'react';
import './App.css';
import Body from './Components/Layout/Body';
import Header from './Components/Layout/Header';
import NavBar from './Components/Layout/NavBar';
import SideNav from './Components/Layout/SideNav';
import Footer from './Components/Layout/Footer';
import TeslaAssist from './Components/Extra/TeslaAssist';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-full md:px-10">
      <div className={`w-full transition-all duration-300 ${scrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <NavBar />
      </div>
      <Header scrolled={scrolled} />

      <div className={`flex ${scrolled ? 'pt-[6rem]' : 'pt-2'}`}>
        <SideNav />
        <Body />
      </div>

      <Footer/>
      <TeslaAssist/>
    </div>
  );
}

export default App;