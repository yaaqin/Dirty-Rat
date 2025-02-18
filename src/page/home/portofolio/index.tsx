import React from 'react';

const Portfolio = () => {
  return (
    <section className="relative bg-primaryColor py-16 font-droidSans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold">SUBSCRIBE TO OUR PORTFOLIO</h2>
        </div>

        {/* Image Row */}
        <div className="flex justify-between items-center gap-4">
          <div className="relative w-1/5 h-64 overflow-hidden">
            <img
              src="https://i.pinimg.com/236x/5d/b0/3d/5db03def206f73d268ad7688a8664cc5.jpg"
              alt="Portfolio Image 1"
              className="w-full h-full object-cover transform rotate-12"
            />
          </div>
          <div className="relative w-1/5 h-64 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/0b/71/66/0b7166b6393a86944ce945282f3c3058.jpg"
              alt="Portfolio Image 2"
              className="w-full h-full object-cover transform -rotate-12"
            />
          </div>
          <div className="relative w-1/5 h-64 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/7d/00/e2/7d00e21465a1a72333c243541f1933d5.jpg"
              alt="Portfolio Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-1/5 h-64 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/9c/c9/14/9cc914d6a91515150b75485412d26e36.jpg"
              alt="Portfolio Image 4"
              className="w-full h-full object-cover transform rotate-12"
            />
          </div>
          <div className="relative w-1/5 h-64 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/dd/f0/9c/ddf09caeb3547afc326bf544a1e31bed.jpg"
              alt="Portfolio Image 5"
              className="w-full h-full object-cover transform -rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
