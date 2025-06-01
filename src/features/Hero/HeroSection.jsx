import React from 'react';

const HeroSection = () => {
  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary via-purple-500 to-secondary text-white py-20 md:py-32 min-h-[calc(80vh)] flex items-center justify-center">
      <div className="absolute inset-0 bg-neutral-dark opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
          對，<span className="text-primary">技能樹亂點</span><br />這是我能想到最貼切的<span className="text-secondary">自我介紹</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          玩音遊、寫譜面、畫插畫、學史學、讀教程。
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-bold text-yellow-400">音遊仔歡迎直戳</span>
        </p>
        <a
          href="#portfolio"
          onClick={scrollToPortfolio}
          className="bg-primary hover:bg-primary/80 text-neutral-dark font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          這個按鈕沒用
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;