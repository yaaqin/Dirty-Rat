import React, { useRef } from 'react';
import './style.css'
import useGsapScrollTrigger from '../../../hook/gsap';
import witchImg from '../../../assets/img/witch.jpg';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate()
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Gunakan hook untuk bagian kiri (geser dari kiri)
  useGsapScrollTrigger(leftRef, 'left');

  // Gunakan hook untuk bagian kanan (geser dari kanan)
  useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="relative bg-primaryColor text-white py-16 px-6 z-0 font-droidSans w-full overflow-hidden">
      {/* Efek Slicing */}
      <div className="max-w-7xl mx-auto flex gap-24 flex-col md:flex-row items-start relative z-10">
        {/* Left side text */}
        <div ref={leftRef} className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 font-bold">ABOUT US</h2>
          <p className="text-lg mb-6">
            DirtyRat is a distinguished 3D outsourcing studio based in North America, founded by seasoned veterans of the gaming industry and prioritizing communication, quality, and reliability.
            Our team comprises of over fifty exceptionally skilled artists with diverse talents and the expertise essential for any real-time project. Each project receives dedicated attention and direct management through assigned leads, ensuring consistency and high standards. Let us guarantee that your art achieves the utmost quality possible.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-secondaryColor text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Right side image */}
        <div ref={rightRef} className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={witchImg}
            alt="dirty rat Studio"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

  );
};

export default About;
