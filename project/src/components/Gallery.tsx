import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our beautiful salon and the stunning results of our beauty services. 📸✨
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-square group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => openLightbox(item.imageUrl)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-w-full max-h-[80vh] object-contain" 
            />
          </div>
        )}
      </div>
    </section>
  );
};