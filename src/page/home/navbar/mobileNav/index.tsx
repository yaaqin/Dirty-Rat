import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaArtstation, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { artStation, facebook, instagram, twitter } from '../../../../data/link';
import { SocialIcon } from '..';

const ComponentMobile = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Mengatur waktu delay agar transisi muncul setelah beberapa detik
    setTimeout(() => setShow(true), 200); // Delay transisi 100ms setelah render
  }, []);

  return (
    <section className="text-white flex flex-col justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Menu navigasi */}
        <div
          className={`space-y-2 mb-36 ${show ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'} transition-all duration-700`}
        >
          <p onClick={() => navigate('/')} className="text-xl hover:underline cursor-pointer font-bold">HOME</p>
          <p onClick={() => navigate('/contact')} className="text-xl hover:underline cursor-pointer font-bold">CONTACT</p>
          <p className="text-xl hover:underline cursor-pointer font-bold mt-2"><a href={artStation}>ARTSTATION</a></p>
        </div>

        {/* Ikon Sosial Media */}
        {/* <div
          className={`mt-52 space-x-6 flex justify-center  ${show ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'} transition-all duration-700`}
        >
          <a href={instagram} className="text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href={twitter} className="text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href={artStation} className="text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaArtstation size={24} />
          </a>
        </div> */}
        <div className="flex justify-center md:justify-end gap-6 items-center">
          <SocialIcon href={twitter} icon={<FaTwitter size={24} />} />
          <SocialIcon href={facebook} icon={<FaFacebookF size={24} />} />
          <SocialIcon href={instagram} icon={<FaInstagram size={24} />} />
          {/* <SocialIcon href="#" icon={<FaYoutube size={24} />} /> */}
        </div>
      </div>
    </section>
  );
};

export default ComponentMobile;
