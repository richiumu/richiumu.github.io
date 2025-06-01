import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({ items, onImageClick }) => {
  return (
    // Changed from CSS Grid to CSS Columns for a masonry/mosaic effect
    // gap-8 will act as column-gap
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
      {items.map((item, index) => (
        <PortfolioItem
          key={item.id}
          item={item}
          onClick={() => onImageClick(item)}
          animationDelay={`${index * 0.1}s`}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;