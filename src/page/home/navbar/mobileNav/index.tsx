import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaArtstation } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ComponentMobile = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Mengatur waktu delay agar transisi muncul setelah beberapa detik
    setTimeout(() => setShow(true), 100); // Delay transisi 100ms setelah render
  }, []);

  return (
    <section className="text-white flex flex-col justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Menu navigasi */}
        <div
          className={`space-y-2 mb-36 ${show ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'} transition-all duration-700`}
        >
          <p onClick={() =>navigate('/')} className="text-xl hover:underline cursor-pointer font-bold">HOME</p>
          <p onClick={() =>navigate('/contact')} className="text-xl hover:underline cursor-pointer font-bold">CONTACT</p>
          <p className="text-xl hover:underline cursor-pointer font-bold">ARTSTATION</p>
        </div>

        {/* Ikon Sosial Media */}
        <div
          className={`mt-52 space-x-6 flex justify-center  ${show ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'} transition-all duration-700`}
        >
          <a href="#" className="text-blue-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-blue-400">
            <FaArtstation size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentMobile;
