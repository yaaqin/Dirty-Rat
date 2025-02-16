import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className="text-white hover:text-gray-400 transition-colors duration-300">
    {icon}
  </a>
);
export default function Navbar() {
  return (
    <header className="bg-green-900 text-white py-4 md:py-8 px-6  font-baloo">
      <nav className="mx-auto flex items-center justify-between">
        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-lg text-[#6b7280] hover:text-white hover:underline">Home</a>
          <a href="#contact" className="text-lg text-[#6b7280] hover:text-white hover:underline">Contact</a>
          <a href="#artstation" className="text-lg text-[#6b7280] hover:text-white hover:underline">Artstation</a>
        </div>
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-3xl md:text-6xl font-bold">DIRTY RAT</div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 items-center">
            <SocialIcon href="#" icon={<FaTwitter size={24} />} />
            <SocialIcon href="#" icon={<FaFacebookF size={24} />} />
            <SocialIcon href="#" icon={<FaInstagram size={24} />} />
            <SocialIcon href="#" icon={<FaYoutube size={24} />} />
          </div>
      </nav>
    </header>
  )
}
