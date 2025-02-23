import React from 'react';
import logos from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-primaryColor text-textColor py-2 font-droidSans relative">
      <section className='w-full flex absolute justify-center z-0'>
        <img src={logos} className='h-48' alt="logo" />
      </section>

      <div className="max-w-7xl mx-auto h-48 px-6 flex flex-col md:flex-row justify-between items-center relative z-10">

        {/* Footer Text */}
        <div className="text-center mb-4 md:mb-0">
          <p className="text-sm">
            <a href="https://www.dirtyratstudio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.dirtyratstudio.com</a>
          </p>
          <p className="text-sm">&copy; Dirty Rat Studios LLC</p>
        </div>

        {/* Links Section */}
        <div className="space-x-6 text-center">
          <a onClick={() => navigate('/contact')} className="text-sm text-white cursor-pointer hover:text-blue-500">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
