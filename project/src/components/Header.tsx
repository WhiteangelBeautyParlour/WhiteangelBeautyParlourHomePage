import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="text-indigo-600 mr-2" size={24} />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            White Angel Beauty Parlour
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'services', 'offers', 'gallery', 'testimonials', 'protocols', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-700 hover:text-indigo-600 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {['home', 'services', 'offers', 'gallery', 'testimonials', 'protocols', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100 capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};