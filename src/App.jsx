import React from 'react';
import Navbar from './layout/Navbar/Navbar';
import HeroSection from './features/Hero/HeroSection';
import PortfolioSection from './features/Portfolio/PortfolioSection';
import AboutSection from './features/About/AboutSection';
import CallToActionSection from './features/CallToAction/CallToActionSection';
import Footer from './layout/Footer/Footer';
import { PORTFOLIO_ITEMS } from './features/Portfolio/portfolio.constants';
import { ABOUT_TEXT, DESIGNER_NAME } from './constants/appConfig';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-dark">
      <Navbar designerName={DESIGNER_NAME} />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection
          designerName={DESIGNER_NAME}
          aboutText={ABOUT_TEXT}
        />
        <PortfolioSection items={PORTFOLIO_ITEMS} />
        <CallToActionSection />
      </main>
      <Footer designerName={DESIGNER_NAME} />
    </div>
  );
};

export default App;