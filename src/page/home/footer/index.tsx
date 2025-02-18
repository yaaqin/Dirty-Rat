import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-6 font-droidSans">
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
            <a href="https://www.dekogon.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.dirtyrat.com</a>
          </p>
          <p className="text-sm">&copy; Dirty Rat Studios LLC</p>
        </div>

        <img src='https://media.discordapp.net/attachments/1037202376496517161/1339268336177123398/dirtyrat_logo_1.png?ex=67b16615&is=67b01495&hm=9c068b9c78267d7d94910ea5522775836440e793972e3e3fc0bb5f0c24ea8748&=&format=webp&quality=lossless&width=233&height=233'
        className='h-36'></img>

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
