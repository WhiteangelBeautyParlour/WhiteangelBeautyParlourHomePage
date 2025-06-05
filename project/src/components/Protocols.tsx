import React from 'react';
import { protocolData } from '../data/protocolData';
import { AlertCircle, Check } from 'lucide-react';

export const Protocols: React.FC = () => {
  return (
    <section id="protocols" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-3 py-1 text-sm text-indigo-600 mb-4">
            <AlertCircle size={16} className="mr-2" />
            <span>Important Information</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Customer & Staff Protocols</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To ensure a pleasant experience for everyone, please familiarize yourself with our protocols. 📝
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-6">
            <h3 className="text-xl font-semibold text-white">Guidelines & Policies</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {protocolData.map((protocol, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">
                      <span className="font-medium text-gray-900">{index + 1}. </span>
                      {protocol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 border-t border-indigo-100">
            <p className="text-center text-indigo-700 text-sm">
              Thank you for your cooperation. These protocols help us provide the best service to all our clients. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};