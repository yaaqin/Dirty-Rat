import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../../hook/gsap';

const Services = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Gunakan hook untuk bagian kiri (geser dari kiri)
  useGsapScrollTrigger(leftRef, 'left');

  // Gunakan hook untuk bagian kanan (geser dari kanan)
  useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="bg-primaryColor text-white py-16 px-6 font-droidSans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side text */}
        <div ref={rightRef} className="md:w-1/2 flex flex-wrap justify-start gap-4">
          <img 
            src="https://i.pinimg.com/236x/4b/68/38/4b6838bcd40d6b0d497e569e1cc71e59.jpg" 
            alt="Service Image 1"
            className="object-cover w-1/2 h-64 rounded-lg shadow-lg"
          />
          <img 
            src="https://i.pinimg.com/236x/ba/db/42/badb424664b60b8ccf6433a8a43d9499.jpg" 
            alt="Service Image 2"
            className="object-cover w-1/2 h-64 rounded-lg shadow-lg"
          />
        </div>

        {/* Right side images */}
        <div ref={leftRef} className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-lg mb-6">
            We tailor our services to match your specific platforms, whether it’s VR, Mobile, Broadcast, Console, or PC. We adapt to your preferred workflows, processes, styles, and methods to align seamlessly with your project and pipeline.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scene Layout and Design</li>
            <li>Unreal and Unity Specialist</li>
            <li>Asset Creation</li>
            <li>Look Development</li>
            <li>Hard Surface and Organic Modeling</li>
            <li>3D Prototyping</li>
            <li>PBR Texturing</li>
          </ul>
        </div>
       
      </div>
    </section>
  );
};

export default Services;
