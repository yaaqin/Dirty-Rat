import ipMan from '../../../assets/studioSection/about us photo.jpg'
import { useNavigate } from 'react-router-dom';

const StudioSection = () => {
  const navigate = useNavigate()
  return (
    <section className="pt-24 md:pt-0 font-droidSans flex z-0 flex-col justify-center items-center bg-black text-start text-white px-6 py-12">
      {/* Efek Slicing */}
      <div className="mx-auto flex flex-col gap-0 md:gap-12 md:flex-row items-start relative z-10">
        {/* Left side text */}
        <div className="hidden md:block w-1/2 mt-8 md:mt-0 relative">
          <img
            src={ipMan}
            alt="dirty rat Studio"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 pt-0 md:my-auto md:pb-32 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-textSecondColor font-bold mb-6 font-sans">
            ABOUT US
          </h1>
          <p className="text-lg sm:text-xl mb-12 text-textSecondColor">
            Dirty Rat Studio is a team of passionate and highly skilled artists with experience in top-tier studios and AAA game productions. We bring a deep understanding of industry pipelines, artistic excellence, and a commitment to delivering high-quality work. Our team thrives on creativity and problem-solving, ensuring every project meets the highest standards of craftsmanship.
          </p>
          <p className="text-lg sm:text-xl mb-12 text-textSecondColor">
          With a strong artistic vision and a dedication to pushing the limits of 3D artistry, we specialize in character and creature modeling, environment creation, and look development. Whether for film, games, or collectibles, we bring the same level of care and precision found in the biggest studios, delivering top-tier results with efficiency and expertise.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-secondaryColor border border-secondaryColor text-white px-6 py-2 rounded-md hover:bg-primaryColor transition duration-300">
            Get in Touch
          </button>
          {/* <div className="relative mt-12">
            <h2 className="font-baloo text-8xl sm:text-9xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-textSecondColor to-orange-600">
              Dirty Rat
            </h2>
          </div> */}
        </div>

      </div>
    </section>

  );
};

export default StudioSection;
