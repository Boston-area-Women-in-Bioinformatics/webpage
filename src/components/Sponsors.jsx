// src/components/SponsorSection.jsx
import React from 'react';

const SponsorSection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 text-center pt-12 pb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          <span class="gold">Gold </span> RNA Sponsor
        </h2>
        <a href="https://seqera.ia" target="_blank" rel="noopener noreferrer">
          <div className="border-4 border-gold bg-white rounded-xl p-4 shadow-lg inline-block">
            <img
              src="/sponsors/Logo_SeqeraL.png"
              alt="Gold RNA Sponsor: Seqera"
              className="mx-auto w-48 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
       
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center pb-12">
       <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          <span class="silver">Silver </span> DNA Sponsor
        </h2>
        <a href="https://www.nextrnatx.com/" target="_blank" rel="noopener noreferrer">
          <div className="border-4 border-silver bg-white rounded-xl p-4 shadow-lg inline-block">
            <img
              src="/sponsors/NextRNA-Logo-FullColor.jpg"
              alt="Silver RNA Sponsor: NextRNA"
              className="mx-auto w-48 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SponsorSection;
