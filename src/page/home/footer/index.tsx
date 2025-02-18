import React from 'react';
import logos from '../../../assets/img/logo.png'

const Footer = () => {
  return (
    <footer className="bg-primaryColor text-textColor py-2 font-droidSans">
      <div className="mt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div> */}

        {/* Footer Text */}
        <div className="text-center mb-4 md:mb-0">
          <p className="text-sm">
            <a href="https://www.dirtyrat.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.dirtyrat.com</a>
          </p>
          <p className="text-sm">&copy; Dirty Rat Studios LLC</p>
        </div>

        <img src={logos} className='h-48'></img>

        {/* Links Section */}
        <div className="space-x-6 text-center">
          <a href="#contact" className="text-sm text-white hover:text-blue-500">Contact Us</a>
          <a href="#jobs" className="text-sm text-white hover:text-blue-500">Jobs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
