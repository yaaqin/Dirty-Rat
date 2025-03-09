import car2 from '../../../assets/img/ourService2/Ourservice_abitdepth (1) (3).jpg'

export default function OurService2() {
    return (
        <section className='relative h-screen z-0 -mt-4'>
            <img src={car2} alt="" className="min-h-screen w-full object-cover absolute z-0" />
            <section className='w-full h-36 absolute z-10 bg-gradient-to-b from-primaryColor to-transparent'></section>
            <div className="absolute md:mb-0 text-end text-white ml-auto pt-36 h-screen z-20 flex flex-col px-4 md:px-16 items-end w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
                <p className="text-base md:text-lg mb-6 w-full md:w-2/3 text-right text-shadow">
                We build for your platform VR, Mobile, TV, Console, or PC. We work the way you work, fitting into your team’s habits, tools, and timelines, Like a rat discovering every path, Dirty Rat navigates the maze of 3D artistry, delivering creative solutions and unmatched expertise at every turn.</p>
                <ul className="space-y-2 text-end w-full md:w-2/3 ml-auto capitalize" style={{ listStylePosition: 'inside', listStyleType: 'none' }}>
                    <li className="flex justify-end text-base md:text-lg">Game Ready & VFX character & creature modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">Hair card & XGEN grooming<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">environment<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">hard surface modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">VFX<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">collectibles<span className="ml-2">•</span></li>
                    <li className="flex justify-end text-base md:text-lg">look development<span className="ml-2">•</span></li>
                </ul>
            </div>
        </section>
    )
}
