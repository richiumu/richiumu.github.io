
import React from 'react';
import Navbar from './src/layout/Navbar/Navbar';
import HeroSection from './src/features/Hero/HeroSection';
import PortfolioSection from './src/features/Portfolio/PortfolioSection';
import AboutSection from './src/features/About/AboutSection';
import CallToActionSection from './src/features/CallToAction/CallToActionSection'; // Added import
import Footer from './src/layout/Footer/Footer';
import { PORTFOLIO_ITEMS } from './src/features/Portfolio/portfolio.constants';
import { ABOUT_TEXT, DESIGNER_NAME } from './src/constants/appConfig';

const App: React.FC = () => {
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
        <CallToActionSection /> {/* Added component render */}
      </main>
      <Footer designerName={DESIGNER_NAME} />
    </div>
  );
};

export default App;