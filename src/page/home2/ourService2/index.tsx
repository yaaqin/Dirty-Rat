import car2 from '../../../assets/img/ourService2/Ourservice_abitdepth (1) (3).jpg'

export default function OurService2() {
    return (
        <section className='relative h-screen z-0 -mt-4'>
            <img src={car2} alt="" className="min-h-screen w-full object-cover absolute z-0" />
            <section className='w-full h-36 absolute z-10 bg-gradient-to-b from-primaryColor to-transparent'></section>
            <div className="absolute md:mb-0 text-end text-white ml-auto pt-36 h-screen z-20 flex flex-col px-4 md:px-16 items-end w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
                <p className="text-base md:text-lg mb-6 w-full md:w-2/3 text-right text-shadow">
                We specialize in delivering high-quality 3D art tailored to your project's specific needs. Our team seamlessly adapts to your workflows, tools, and deadlines, ensuring a smooth and productive collaboration. Skilled in both high and low-poly modeling, PBR texturing, and Unreal Engine 5, we provide the technical expertise and artistic precision needed to elevate your project. Like a rat navigating every path, Dirty Rat Studio finds creative solutions at every turn, ensuring top-tier results for film, games, or collectible productions. We are your ideal outsourcing partner for ambitious, high-quality projects.
                </p>
                <ul className="space-y-2 text-end w-full md:w-2/3 ml-auto capitalize" style={{ listStylePosition: 'inside', listStyleType: 'none' }}>
                    <li className="flex justify-end text-base md:text-lg">Character & Creature Modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Hair card & XGEN grooming<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Hard Surface Modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Look Development<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Environment<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Props Modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">PBR Texturing<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">VFX <span className="ml-2">•</span></li>
                </ul>
            </div>
        </section>
    )
}
