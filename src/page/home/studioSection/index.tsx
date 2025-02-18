import React from 'react';
import ipMan from '../../../assets/img/ipMan.jpg'

const StudioSection = () => {
  return (
    <section className=" pt-64 font-droidSans flex z-0 flex-col justify-center items-center bg-black text-start text-white px-6 py-12">
    {/* Efek Slicing */}
    <div className="max-w-7xl mx-auto flex gap-24 flex-col md:flex-row items-start relative z-10">
      {/* Left side text */}
      <div className="w-full mt-8 md:mt-0">
        <img
          src={ipMan}
          alt="dirty rat Studio"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right side image */}
      <div className="max-w-4xl m-auto z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          External <br /> Development <br /> Studio
        </h1>
        <p className="text-lg sm:text-xl mb-12">
          From first concept to engine integration: we provide world's best
          selling games with beautiful and well-optimized game art.
        </p>
        <p className="text-lg sm:text-xl mb-12">
          We aim to leverage our expertise and acumen into long term partnerships
          that will help us reach the goals together and to make new great titles
          enjoyed by millions of players worldwide.
        </p>
        <div className="relative">
          <h2 className="text-8xl sm:text-9xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Dirty Rat
          </h2>
        </div>
      </div>
      
    </div>
  </section>
    
  );
};

export default StudioSection;
