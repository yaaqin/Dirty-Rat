import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-green-900 text-white py-8 px-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-lg text-[#6b7280] hover:text-white">Home</a>
          <a href="#shop" className="text-lg text-[#6b7280] hover:text-white">Shop</a>
          <a href="#contact" className="text-lg text-[#6b7280] hover:text-white">Contact</a>
          <a href="#artstation" className="text-lg text-[#6b7280] hover:text-white">Artstation</a>
        </div>
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">Dirty Rat</div>
        </div>
         {/* Navbar Links */}
         <div className="hidden md:flex space-x-8">
          <a href="#" className="text-lg text-[#6b7280] hover:text-white">Home</a>
          <a href="#shop" className="text-lg text-[#6b7280] hover:text-white">Shop</a>
          <a href="#contact" className="text-lg text-[#6b7280] hover:text-white">Contact</a>
          <a href="#artstation" className="text-lg text-[#6b7280] hover:text-white">Artstation</a>
        </div>
        {/* Social Icons
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
        </div> */}
      </nav>
    </header>
  )
}
