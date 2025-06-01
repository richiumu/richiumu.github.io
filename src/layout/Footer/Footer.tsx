import React from 'react';
import { SocialLink } from './footer.types';

interface FooterProps {
  designerName: string;
}

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.36 9.5 5.32v2.14H6.1v4h3.4v8h4.2v-8h3.55l.42-4z"/>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ designerName }) => {
  const socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: <FacebookIcon className="w-5 h-5" />, url: 'https://facebook.com/hatokokoa' },
  ];

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <footer className="bg-neutral-dark text-neutral-light py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-neutral-light hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {designerName}. 版權所有.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Liㄉ個人網站 - Powered by React & Tailwind CSS.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          最後更新於: {getCurrentDate()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;