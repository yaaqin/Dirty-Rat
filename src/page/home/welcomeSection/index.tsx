import React from 'react'
import videoSrc from '../../../assets/video/vikingGirl.mp4';


export default function WelcomeSection() {
  return (
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
  )
}
