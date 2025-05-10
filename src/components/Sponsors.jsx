// src/components/SponsorSection.jsx
import React from 'react';

const SponsorSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          <span class="gold">Gold </span> RNA Sponsor
        </h2>
        <a href="https://seqera.ia" target="_blank" rel="noopener noreferrer">
          <div className="border-4 border-gold rounded-xl p-4 shadow-lg inline-block">
            <img
              src="/sponsors/Logo_SeqeraL.png"
              alt="Gold RNA Sponsor Logo"
              className="mx-auto w-48 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SponsorSection;
