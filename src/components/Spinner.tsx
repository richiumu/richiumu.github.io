import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string; // Tailwind color class like 'text-primary'
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'text-primary' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`animate-spin rounded-full border-t-2 border-b-2 border-transparent ${sizeClasses[size]} ${color}`} style={{borderTopColor: 'currentColor', borderBottomColor: 'currentColor', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}></div>
  );
};

export default Spinner;