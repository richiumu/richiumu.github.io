import React, { useState } from 'react';
import { NavItem } from './navbar.types';

interface NavbarProps {
  designerName: string;
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ designerName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: '首頁', href: '#hero' },
    { label: '關於我', href: '#about' },
    { label: '作品集', href: '#portfolio' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-neutral-dark/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-display font-bold text-primary hover:text-primary/80 transition-colors">
          {designerName}
        </a>
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative text-sm font-medium px-3 py-2 rounded-md hover:text-primary transition-colors duration-200 
                         after:content-[''] after:absolute after:left-1/2 after:right-1/2 after:bottom-[6px] after:h-[2px] after:bg-primary 
                         after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-0"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-dark/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-neutral-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;