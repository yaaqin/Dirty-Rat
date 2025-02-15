import React, { useRef } from 'react';
import './style.css'
import useGsapScrollTrigger from '../../../hook/gsap';

const About = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Gunakan hook untuk bagian kiri (geser dari kiri)
  useGsapScrollTrigger(leftRef, 'left');

  // Gunakan hook untuk bagian kanan (geser dari kanan)
  useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="relative bg-green-900 text-white py-16 px-6 z-10">
      {/* Efek Slicing */}
      <div className="max-w-7xl mx-auto flex gap-24 flex-col md:flex-row items-start relative z-10">
        {/* Left side text */}
        <div ref={leftRef} className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg mb-6">
            Dekogon is a distinguished 3D outsourcing studio based in North America, founded by seasoned veterans of the gaming industry and prioritizing communication, quality, and reliability.
            Our team comprises of over fifty exceptionally skilled artists with diverse talents and the expertise essential for any real-time project. Each project receives dedicated attention and direct management through assigned leads, ensuring consistency and high standards. Let us guarantee that your art achieves the utmost quality possible.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Right side image */}
        <div ref={rightRef} className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://i.pinimg.com/236x/c6/a7/a5/c6a7a5138313c2825a1f5e9bff0b7fc9.jpg"
            alt="dirty rat Studio"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

  );
};

export default About;
