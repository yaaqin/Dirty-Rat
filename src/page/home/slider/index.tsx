import { useEffect, useState } from 'react';
import { OurProject } from '../../../data/clientAndProject';
import './index.css'

interface SliderProps {
  width: string;
  height: string;
  quantity: number;
  images: string[];
  reverse?: boolean;
}

const Slider: React.FC<SliderProps> = ({ width, height, quantity, images, reverse }) => {
  return (
    <div className="slider" style={{ '--width': width, '--height': height, '--quantity': quantity } as React.CSSProperties}>
      <div className="list">
        {images.map((src, index) => (
          <div className="item flex items-center" style={{ '--position': index + 1 } as React.CSSProperties} key={index}>
            <img src={src} alt={`Slider image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const SliderPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % OurProject.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Hapus interval saat komponen unmount
  }, [OurProject.length]);
  return (
    <main className='flex flex-col gap-4 max-w-[1480px] mx-auto bg-green-900 py-24'>
      <h4 className='Text-center text-6xl text-center text-white mb-10 max-w-xl mx-auto font-bold'>Our Clients AND Projects</h4>
      <Slider width="200px" height="200px" quantity={OurProject.length} images={OurProject} reverse={true} />
    </main>
  );
};

export default Slider;
