import React from 'react';
import ipMan from '../../../assets/img/ipMan.jpg'
import car from '../../../assets/img/car.png'
import vikingGirl from '../../../assets/img/vikingGirl.jpg'
import emily from '../../../assets/img/emily.png'
import witch from '../../../assets/img/witch2.jpg'

const Parallelogram = () => {
    return (
        <div className="flex justify-center items-center bg-primaryColor px-2">
            <div className="relative overflow-hidden -mr-12 w-64 h-64">
                {/* Bagian kiri gambar tetap lurus */}
                <img
                    src={ipMan} // Ganti dengan URL gambar sesuai
                    alt="Image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transform skew-x-12 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transform skew-x--12 z-10"></div>
            </div>
            <div className="relative bg-primaryColor px-4 z-10 w-64 h-64 transform -skew-x-12 overflow-hidden">
                {/* Foto yang tetap tegak */}
                <img
                    src={car} // Ganti dengan URL gambar sesuai
                    alt="Sample"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative bg-primaryColor z-10 transform w-64 h-64 -skew-x-12 overflow-hidden">
                {/* Foto yang tetap tegak */}
                <img
                    src={vikingGirl} // Ganti dengan URL gambar sesuai
                    alt="Sample"
                    className="w-full h-full object-cover skew-x-12"
                />
            </div>
            <div className="relative bg-primaryColor px-4 z-10 transform w-64 h-64 -skew-x-12 overflow-hidden">
                {/* Foto yang tetap tegak */}
                <img
                    src={emily} // Ganti dengan URL gambar sesuai
                    alt="Sample"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative overflow-hidden -ml-12 w-64 h-64">
                {/* Bagian kiri gambar tetap lurus */}
                <img
                    src={witch} // Ganti dengan URL gambar sesuai
                    alt="Image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transform skew-x-12 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transform skew-x--12 z-10"></div>
            </div>
        </div>
    );
};

export default Parallelogram;
