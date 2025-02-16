import React from 'react';

interface cardProps {
  img: string
}
// Dummy data for team members
const teamMembers = [
  {
    id: 1,
    name: "Mike Vasilev",
    role: "CEO",
    image: "https://i.pinimg.com/236x/68/1b/67/681b675f0c5f833f0e7fa84dad78a82e.jpg", // Ganti dengan URL gambar sesuai
  },
  {
    id: 2,
    name: "Yuliya Dikun",
    role: "CVO",
    image: "https://i.pinimg.com/236x/2a/07/36/2a0736b064272c56efdd8b482448964e.jpg", // Ganti dengan URL gambar sesuai
  },
  {
    id: 3,
    name: "Konstantin Ilyin",
    role: "COO",
    image: "https://i.pinimg.com/236x/dc/f6/b3/dcf6b3dde40619bf4c0b6dfbf2b9960a.jpg", // Ganti dengan URL gambar sesuai
  },
  {
    id: 1,
    name: "Mike Vasilev",
    role: "CEO",
    image: "https://i.pinimg.com/236x/68/1b/67/681b675f0c5f833f0e7fa84dad78a82e.jpg", // Ganti dengan URL gambar sesuai
  },
  {
    id: 2,
    name: "Yuliya Dikun",
    role: "CVO",
    image: "https://i.pinimg.com/236x/2a/07/36/2a0736b064272c56efdd8b482448964e.jpg", // Ganti dengan URL gambar sesuai
  },
];
const ProfileCard = ({ img }: cardProps) => {
  return (
    <div className="relative">
      <img
        src={img}
        alt="Profile"
        className="w-full h-60 object-cover "
      />
      <div className="absolute top-0 left-0 px-6 py-2 bg-primaryColor rounded-br-xl text-white">
        <p className="text-sm">COO</p>
      </div>
      <div className="absolute bottom-0 right-0 px-6 py-3 bg-primaryColor rounded-tl-xl text-white">
        <p className="text-sm">Andi Jutawan</p>
      </div>
    </div>

  );
};

const TeamSection = () => {
  return (
    <section className="bg-primaryColor text-white py-16 px-6 font-baloo">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
      {teamMembers.map((member) => (
          <ProfileCard img={member.image} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
