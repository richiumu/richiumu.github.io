import React from 'react';

const PortfolioItem = ({ item, onClick, animationDelay = '0s' }) => {
  return (
    <div
      className="group bg-gray-800 rounded-xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up break-inside-avoid-column mb-8"
      onClick={onClick}
      style={{ animationDelay }}
    >
      {/* Removed fixed aspect ratio (aspect-w-16 aspect-h-9) to allow variable heights */}
      <div className="relative overflow-hidden"> {/* Using overflow-hidden for image scaling effect consistency */}
        <img
          src={item.thumbnailUrl || item.imageUrl}
          alt={item.title}
          // Changed h-full to h-auto to maintain image aspect ratio and allow natural height
          className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <h3 className="text-white text-xl font-bold font-display">{item.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">{item.category}</span>
        <h3 className="text-xl font-bold font-display text-neutral-light mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;