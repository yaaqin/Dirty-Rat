import React from 'react'
import { OurServiceTypeList } from '../../../data/ourServicesType'

export default function OurServicesType() {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 bg-primaryColor">
            {OurServiceTypeList.map((category, index) => (
                <div
                    key={index}
                    className="bg-primaryColor w-full h-auto text-white rounded-lg"
                >
                    {/* Gambar dengan efek zoom dan crop */}
                    <div className="h-full w-full overflow-hidden relative">
                        <img
                            src={category.img}
                            alt={category.name}
                            className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-4xl font-bold">{category.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
