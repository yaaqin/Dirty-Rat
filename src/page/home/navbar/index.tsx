import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ComponentMobile from './mobileNav';
import logo from '../../../assets/img/logo.png'
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className="text-white hover:text-gray-400 transition-colors duration-300">
    {icon}
  </a>
);
export default function MobileNavbar() {
  const navigate = useNavigate()
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className="bg-primaryColor text-white py-4 md:py-8 px-6 font-droidSans">
      <nav className="mx-auto flex items-center justify-between">
        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8 w-1/3">
          <a href="#" className="text-lg text-[#6b7280] hover:text-white hover:underline" onClick={() => navigate('/')}>Home</a>
          <a className="text-lg text-[#6b7280] hover:text-white hover:underline" onClick={() => navigate('/contact')}>Contact</a>
          <a href="#artstation" className="text-lg text-[#6b7280] hover:text-white hover:underline">Artstation</a>
        </div>
        {/* Logo */}
        <div className="flex md:hidden items-center px-auto space-x-4 w-1/2 md:w-1/3 justify-start md:justify-center">
          <div className="text-3xl md:text-6xl font-bold text-center font-baloo text-textColor">DIRTY RAT</div>
        </div>
        <section className='absolute hidden md:flex w-full justify-center'>
          <img src={logo} className='h-64 mx-auto mt-16' />
        </section>

        {/* Social Icons */}
        <div className="hidden md:flex justify-center md:justify-end gap-6 items-center w-1/3">
          <SocialIcon href="#" icon={<FaTwitter size={24} />} />
          <SocialIcon href="#" icon={<FaFacebookF size={24} />} />
          <SocialIcon href="#" icon={<FaInstagram size={24} />} />
          {/* <SocialIcon href="#" icon={<FaYoutube size={24} />} /> */}
        </div>

        {/* mobile navigate */}
        <section onClick={() => setNavOpen(!navOpen)} className='flex justify-end md:hidden '>
          {navOpen ? (
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="" />
              <path d="M7 17L16.8995 7.10051" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 7.00001L16.8995 16.8995" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          ) : (
            <svg fill="#fff" width="20px" height="20px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" /><path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" /><path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" /></svg>
          )}
        </section>
      </nav>
      {navOpen && <ComponentMobile />}
    </header>
  )
}
