import car2 from '../../../assets/img/ourService2/Ourservice.jpg'

export default function OurService2() {
    return (
        <section className='relative h-screen border border-red-600 z-0 -mt-4'>
            <img src={car2} alt="" className="min-h-screen w-full object-cover absolute z-0" />
            <section className='w-full h-36 absolute z-10 bg-gradient-to-b from-primaryColor to-transparent'></section>
            <div className="absolute md:mb-0 text-end text-white ml-auto pt-36 h-screen z-20 flex flex-col px-4 md:px-16 items-end w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
    <p className="text-base md:text-lg mb-6 w-full md:w-2/3 text-right text-shadow">
        We tailor our services to match your specific platforms, whether it's VR, Mobile, Broadcast, Console, or PC. We adapt to your preferred workflows, processes, styles, and methods to align seamlessly with your project and pipeline.
    </p>
    <ul className="space-y-2 text-end w-full md:w-2/3 ml-auto" style={{ listStylePosition: 'inside', listStyleType: 'none' }}>
        <li className="flex justify-end text-base md:text-lg">Scene Layout and Design<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">Unreal and Unity Specialist<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">Asset Creation<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">Look Development<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">Hard Surface and Organic Modeling<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">3D Prototyping<span className="ml-2">•</span></li>
        <li className="flex justify-end text-base md:text-lg">PBR Texturing<span className="ml-2">•</span></li>
    </ul>
</div>
        </section>
    )
}
