import React, { useState } from 'react';
import { serviceData } from '../data/serviceData';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(serviceData.map(service => service.category))];
  
  const filteredServices = activeCategory === 'All' 
    ? serviceData 
    : serviceData.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of beauty services designed to enhance your natural beauty and provide relaxation. 💆‍♀️✨
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title} {service.emoji}</h3>
              
              <div className="space-y-2">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{item.name}</span>
                    <div className="flex flex-col items-end">
                      {item.prices.map((price, priceIdx) => (
                        <div key={priceIdx} className="flex items-center gap-2">
                          {price.label && (
                            <span className="text-xs text-gray-500">{price.label}</span>
                          )}
                          <span className="font-medium text-indigo-600">₹{price.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};