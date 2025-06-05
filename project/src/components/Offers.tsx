import React from 'react';
import { offerData } from '../data/offerData';
import { Clock, Check } from 'lucide-react';

export const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-3 py-1 text-sm text-indigo-600 mb-4">
            <Clock size={16} className="mr-2" />
            <span>Limited Time</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Summer Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive summer packages designed to give you the perfect beauty treatment at great value. 🌞
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerData.map((offer, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className={`h-2 ${offer.accentColor}`}></div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">₹{offer.price}</span>
                  <span className="text-gray-500 text-sm ml-1">only</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {offer.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {offer.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 md:p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">
                Massage Special Offer
              </h3>
              <p className="text-indigo-100">
                Get 5 Body Massages & Enjoy 1 FREE! 💆‍♀️ Limited time offer.
              </p>
            </div>
            <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-opacity self-start">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};