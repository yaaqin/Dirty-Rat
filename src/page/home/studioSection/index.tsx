import React from 'react';
import ipMan from '../../../assets/img/ipMan.jpg'
import { useNavigate } from 'react-router-dom';

const StudioSection = () => {
  const navigate = useNavigate()
  return (
    <section className=" font-droidSans flex z-0 flex-col justify-center items-center bg-black text-start text-white px-6 py-12">
      {/* Efek Slicing */}
      <div className="mx-auto flex flex-col gap-0 md:gap-12 md:flex-row items-start relative z-10">
        {/* Left side text */}
        <div className="hidden md:block w-1/2 mt-8 md:mt-0 relative">
          <img
            src={ipMan}
            alt="dirty rat Studio"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 m-auto z-10">
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-textSecondColor font-bold mb-6">
            External <br /> Development Studio
          </h1>
          <p className="text-lg sm:text-xl mb-12 text-textSecondColor">
          Dirty Rat Studio is a collective of dedicated artists specializing in high-quality character creation, hard surface and organic modeling, and environment design for AAA games and premium collectibles.
          </p>
          {/* <p className="text-lg sm:text-xl mb-12">
            We aim to leverage our expertise and acumen into long term partnerships
            that will help us reach the goals together and to make new great titles
            enjoyed by millions of players worldwide.
          </p> */}
          <button onClick={() => navigate('/contact')} className="bg-secondaryColor text-white px-6 py-2 rounded-md hover:bg-primaryColor transition duration-300">
            Get in Touch
          </button>
          <div className="relative mt-12">
            <h2 className="font-baloo text-8xl sm:text-9xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-textSecondColor to-orange-600">
              Dirty Rat
            </h2>
          </div>
        </div>

      </div>
    </section>

  );
};

export default StudioSection;
