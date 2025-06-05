import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}
    `.trim();
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919912319962?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact & Appointments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your beauty treatment or get in touch with us. We're looking forward to welcoming you! 💎
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Book an Appointment</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Facial">Facial</option>
                    <option value="Hair Cut">Hair Cut</option>
                    <option value="Waxing">Waxing</option>
                    <option value="Manicure/Pedicure">Manicure/Pedicure</option>
                    <option value="Hair Spa">Hair Spa</option>
                    <option value="Henna">Henna</option>
                    <option value="Summer Package">Summer Package</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Book via WhatsApp
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-6">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600 mt-1">
                        White Angel Beauty Parlour<br />
                        Tulip La Park, Left No. 1
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:9912319962" className="hover:text-indigo-600 transition-colors">
                          99123 19962
                        </a>
                      </p>
                      <p className="text-sm text-indigo-600 mt-1">
                        📍 Home Service Available
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-800">Business Hours</h4>
                      <p className="text-gray-600 mt-1">
                        Open Daily: 9:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-grow">
              <div className="aspect-video w-full h-full">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.854247119206!2d78.3603303749366!3d17.466688883434077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93001d37d429%3A0x42a568b0cd59a143!2sWhite%20angel%20beauty%20parlour%20(tulip)!5e0!3m2!1sen!2sin!4v1749141346826!5m2!1sen!2sin"className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="White Angel Beauty Parlour location" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};