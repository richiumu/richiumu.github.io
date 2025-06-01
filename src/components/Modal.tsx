import React, { useEffect } from 'react';
import { PortfolioItemType } from '../features/Portfolio/portfolio.types';

interface ModalProps {
  item: PortfolioItemType;
  onClose: () => void;
}

const CloseButtonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 animate-fade-in-up"
      onClick={onClose} // Close on backdrop click
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
        style={{animationDuration: '0.3s'}}
      >
        <div className="relative">
          <img
            src={item.imageUrl.replace('/600/400', '/1200/800')} // Request larger image
            alt={item.title}
            className="w-full h-auto max-h-[60vh] object-contain bg-gray-700" // Darker placeholder for image
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <CloseButtonIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold font-display text-primary mb-2">{item.title}</h3>
          <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-2 py-1 rounded-full mb-4">{item.category}</span>
          <p className="text-neutral-light leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;