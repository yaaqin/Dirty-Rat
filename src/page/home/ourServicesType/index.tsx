import { OurServiceTypeList } from '../../../data/ourServicesType'

export default function OurServicesType() {
    return (
        <section className='bg-primaryColor w-full flex justify-center mt-36'>
            <div className="max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold">{category.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
