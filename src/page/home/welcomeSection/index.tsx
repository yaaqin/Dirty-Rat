import React from 'react';
import videoSrc from '../../../assets/video/vikingGirl.mp4';

export default function WelcomeSection() {
  return (
    <section
      className="bg-green-900 py-[100px]"  // Pastikan ada tinggi yang ditentukan
      style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)' }} // Ini tetap di sini
    >
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
    </section>
  );
}
