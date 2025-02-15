import React from 'react'

export default function Header() {
  return (
    <section className="relative h-screen flex w-full items-center justify-center">
      {/* Video Background */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/h_bPYxvCTRQ?autoplay=1&mute=1&loop=1&playlist=h_bPYxvCTRQ&controls=0&showinfo=0&modestbranding=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video"
      ></iframe>

      {/* Overlay Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Konten Logo */}
      <img className="relative text-white text-4xl font-bold w-1/5" src='https://media.discordapp.net/attachments/1037202376496517161/1339268336177123398/dirtyrat_logo_1.png?ex=67b16615&is=67b01495&hm=9c068b9c78267d7d94910ea5522775836440e793972e3e3fc0bb5f0c24ea8748&=&format=webp&quality=lossless&width=233&height=233'></img>
    </section>

  )
}
