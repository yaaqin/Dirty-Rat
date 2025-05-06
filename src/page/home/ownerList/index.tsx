import { ownerData } from '../../../data/ownerlist';
import './style.css'

interface cardProps {
  nama: string
  img: string
  ig?: string
}

const ProfileCard = ({ img, nama, ig }: cardProps) => {
  return (
    <a href={ig} target="_blank" rel="noopener noreferrer" className={`relative transition-all duration-300 overflow-hidden`}>
   <img
  src={img}
  alt="Profile"
  className="team-img w-full h-60 object-cover"
/>
      <div className="absolute bottom-0 right-0 px-6 py-3 bg-primaryColor rounded-tl-xl text-white">
        <p className="text-sm capitalize">{nama}</p>
      </div>
    </a>

  );
};

const TeamSection = () => {
  return (
    <section className='bg-primaryColor text-white font-bold text-center pt-12'>
      <h1 className='text-4xl'>OUR TEAM</h1>
      <section className="h-auto flex items-center text-white py-16 px-6 font-droidSans">
        {/* <div className="max-w-7xl mx-auto flex justify-center mb-2">
        <img src={logos} className='h-48'></img>
      </div> */}
        <div className="flex gap-6 flex-wrap justify-center w-full">
          {ownerData.map((member) => (
            <ProfileCard img={member.profile} nama={member.nama} ig={member.ig} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default TeamSection;
