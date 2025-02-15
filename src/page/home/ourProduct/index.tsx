import React from 'react';

// Dummy data for products
const products = [
  {
    id: 1,
    title: 'Vehicles Vol. 1',
    image: 'https://i.pinimg.com/236x/cf/d1/b2/cfd1b2ccd707d067f7310e8b7c39fc74.jpg', // Ganti dengan gambar produk
    description: 'Small Rides',
  },
  {
    id: 2,
    title: 'Restaurant Vol. 1',
    image: 'https://i.pinimg.com/474x/b9/36/06/b93606f0fd2698f330f93f141a4c9400.jpg', // Ganti dengan gambar produk
    description: 'Food Prep',
  },
  {
    id: 3,
    title: 'Foliage Vol. 1',
    image: 'https://i.pinimg.com/736x/f1/25/ee/f125ee65d8f239a6fff3054f80388c76.jpg', // Ganti dengan gambar produk
    description: 'Spruce Trees',
  },
  {
    id: 4,
    title: 'Vehicles Vol. 2',
    image: 'https://i.pinimg.com/236x/23/51/15/235115d2ac33deb0df56376422ec253b.jpg', // Ganti dengan gambar produk
    description: 'Retro Cars',
  },
  // Tambahkan produk lainnya sesuai kebutuhan
];

const OurProducts = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">OUR PRODUCTS</h2>
        <p className="text-lg mt-4 mb-6">
          Explore our extensive collection of content packages, showcasing over 300 packages including props, environments, VFX, characters, vehicles, and more.
        </p>
      </div>
      
      {/* Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shop Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
          SHOP
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
