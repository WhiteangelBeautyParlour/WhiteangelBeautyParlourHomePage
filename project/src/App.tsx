import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Offers } from './components/Offers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Protocols } from './components/Protocols';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
        <Gallery />
        <Testimonials />
        <Protocols />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;