import React from 'react';
import { Sparkle, Scissors, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center bg-indigo-100 rounded-full px-3 py-1 text-sm text-indigo-600 mb-6">
              <Sparkle size={16} className="mr-1" />
              <span>Elegance for Every Occasion</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Experience Beauty at{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                White Angel
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover our premium beauty services with expert care and attention to detail. We bring out your natural beauty with our professional touch. ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Calendar size={18} className="mr-2" />
                Book Appointment
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-indigo-600 border border-indigo-200 font-semibold py-3 px-6 rounded-full flex items-center justify-center hover:bg-indigo-50 transition-colors"
              >
                <Scissors size={18} className="mr-2" />
                View Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">White Angel Beauty Parlour</h3>
                <p className="text-gray-600 mb-6">Your destination for beauty and relaxation.</p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {['Haircuts', 'Facials', 'Waxing', 'Massage', 'Henna', 'Nail Care'].map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-shadow"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">📅</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Open Daily</p>
                <p className="font-medium">9 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};