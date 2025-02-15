import React from 'react';

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
];

const TeamSection = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-black rounded-2xl overflow-hidden shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-400">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
