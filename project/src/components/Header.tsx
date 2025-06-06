import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Ensure the sidebar is mounted after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        event.target !== document.querySelector('.mobile-menu-button')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
    <>
      <header 
        className={`fixed w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-1 sm:py-2' 
            : 'bg-transparent py-2 sm:py-4'
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="text-indigo-600 mr-2" size={20} />
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent truncate max-w-[200px] sm:max-w-xs md:max-w-none">
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
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu - Rendered outside the header */}
      {isMounted && (
        <>
          <div 
            ref={sidebarRef}
            className={`md:hidden fixed top-0 right-0 h-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } w-[70%] max-w-[250px] overflow-y-auto`}
            style={{ zIndex: 1000 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="font-semibold text-indigo-600">Menu</h2>
              <button 
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-4 py-4 flex flex-col">
              {['home', 'services', 'offers', 'gallery', 'testimonials', 'protocols', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors py-3 border-b border-gray-100 capitalize text-left flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Overlay when sidebar is open */}
          <div 
            ref={overlayRef}
            className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
            style={{ zIndex: 999 }}
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        </>
      )}
    </>
  );
};