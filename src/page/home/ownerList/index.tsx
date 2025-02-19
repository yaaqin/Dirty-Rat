import React from 'react';
import { ownerData } from '../../../data/ownerlist';
import logos from '../../../assets/img/logo.png'

interface cardProps {
  nama: string
  img: string
}

const ProfileCard = ({ img, nama }: cardProps) => {
  return (
    <div className="relative filter grayscale hover:grayscale-0 transition-all duration-300 overflow-hidden">
      <img
        src={img}
        alt="Profile"
        className="w-full h-60 object-cover transform transition duration-500 ease-in-out hover:scale-110"
      />
      <div className="absolute top-0 left-0 px-6 py-2 bg-primaryColor rounded-br-xl text-white">
        <p className="text-sm">COO</p>
      </div>
      <div className="absolute bottom-0 right-0 px-6 py-3 bg-primaryColor rounded-tl-xl text-white">
        <p className="text-sm capitalize">{nama}</p>
      </div>
    </div>

  );
};

const TeamSection = () => {
  return (
    <section className="bg-primaryColor h-auto flex items-center text-white py-16 px-6 font-droidSans">
      {/* <div className="max-w-7xl mx-auto flex justify-center mb-2">
        <img src={logos} className='h-48'></img>
      </div> */}
      <div className="flex gap-6 flex-wrap justify-center w-full">
        {ownerData.map((member) => (
          <ProfileCard img={member.profile} nama={member.nama} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
