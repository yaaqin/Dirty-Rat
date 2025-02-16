import React from 'react';

const images = [
  { src: 'https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/736x/c0/21/aa/c021aa4f0cbae36efe9e780d80ab1517.jpg', alt: 'Image 2' },
  { src: 'https://i.pinimg.com/236x/dc/6e/8e/dc6e8ea4e501c939b460db9f256362f2.jpg', alt: 'Image 3' },
  { src: 'https://i.pinimg.com/236x/35/c8/ef/35c8efda25a70090c7f7dde6abdc7c13.jpg', alt: 'Image 4' },
  { src: 'https://i.pinimg.com/236x/8e/8d/2b/8e8d2b84c70e55133ed1121f62b93202.jpg', alt: 'Image 5' },
];

export default function GallerySection() {
  return (
    <section className="flex px-4 gap-4 bg-green-900">
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg"
          alt="Image 1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg"
          alt="Image 2"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg"
          alt="Image 3"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg"
          alt="Image 4"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://i.pinimg.com/236x/c2/34/40/c234404b725975fe5f181a2d4e346f6f.jpg"
          alt="Image 5"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
