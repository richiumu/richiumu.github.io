import React, { useState } from 'react';
import PortfolioGrid from './PortfolioGrid';
import Modal from '../../components/Modal'; 
import { highlightKotoneNames } from '../../utils/textHighlighter'; // Import the utility

const PortfolioSection = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const portfolioDescriptionText = "不用想了，這裡不會有譜面。\n我覺得我畫的ktn太爛了，不敢放上來 嗚嗚。";

  const renderPortfolioDescriptionWithBreaks = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {highlightKotoneNames(line)}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-neutral-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-neutral-light">
          我的作品集
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto whitespace-pre-line">
          {renderPortfolioDescriptionWithBreaks(portfolioDescriptionText)}
        </p>
        <PortfolioGrid items={items} onImageClick={openModal} />
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default PortfolioSection;