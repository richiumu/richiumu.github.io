import React, { useState } from 'react';

interface SpoilerTextProps {
  children: React.ReactNode;
  className?: string;
}

const SpoilerText: React.FC<SpoilerTextProps> = ({ children, className }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  if (isRevealed) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      className={`inline-block bg-black text-transparent select-none rounded cursor-pointer hover:bg-black/80 transition-colors px-1 py-0.5 align-middle ${className ?? ''}`}
      onClick={() => setIsRevealed(true)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsRevealed(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-live="polite"
      aria-label="Hidden text. Click or press Enter/Space to reveal."
      title="Click or press Enter/Space to reveal"
    >
      {/* Children are rendered here to define the width/height of the black box.
          Their color is transparent, so they are not visible. */}
      {children}
    </span>
  );
};

export default SpoilerText;