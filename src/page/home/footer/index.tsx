import React from 'react';
import logos from '../../../assets/img/logo2/dirty rat bag logo white.png'
import { useNavigate } from 'react-router-dom';
import { facebook, instagram, twitter } from '../../../data/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from '../navbar';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-primaryColor text-textColor py-2 font-droidSans relative">
      <section className='w-full flex absolute justify-center z-0'>
        <img src={logos} className='h-36 md:h-48 mt-12 md:mt-0' alt="logo" />
      </section>

      <div className="max-w-7xl mx-auto h-48 px-6 flex flex-col md:flex-row justify-between items-center relative z-10">

        {/* Footer Text */}
        <div className="text-center mb-4 md:mb-0">
          <div className='flex justify-center w-full mb-2 mt-2 md:mt-0'>
            <div className="flex justify-center md:justify-end gap-6 items-center">
              <SocialIcon href={twitter} icon={<FaTwitter size={24} />} />
              <SocialIcon href={facebook} icon={<FaFacebookF size={24} />} />
              <SocialIcon href={instagram} icon={<FaInstagram size={24} />} />
              {/* <SocialIcon href="#" icon={<FaYoutube size={24} />} /> */}
            </div>
          </div>
          <section>
            <p className="text-sm">
              <a href="https://www.dirtyratstudio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.dirtyratstudio.com</a>
            </p>
            <p className="text-sm">&copy; Dirty Rat Studios LLC</p>
          </section>
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
