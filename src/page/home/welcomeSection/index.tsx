import React from 'react';
import videoSrc from '../../../assets/video/vikingGirl.mp4';

export default function WelcomeSection() {
  return (
    <section
      className="bg-primaryColor py-[100px] relative">
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
      <div className="z-50 absolute top-0 left-0 w-0 h-0 border-l-[30px] bg-green-500 border-r-[30px] border-t-[60px] border-l-transparent border-r-transparent border-t-black"></div>
    </section>
  );
}
