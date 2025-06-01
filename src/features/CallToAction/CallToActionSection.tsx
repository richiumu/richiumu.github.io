import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section id="call-to-action" className="py-12 md:py-16 bg-neutral-dark text-center">
      <div className="container mx-auto px-6">
        <p className="text-xl md:text-2xl text-neutral-light font-display">
          看完了嗎？ 可以點下面的Facebook Icon返回。
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;