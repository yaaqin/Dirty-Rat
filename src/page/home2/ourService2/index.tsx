import React from 'react'
import car2 from '../../../assets/img/ourService2/5.png'

export default function OurService2() {
    return (
        <section className='pt-36 md:pt-20 relative h-screen'>
            <img src={car2} alt="" className="min-h-screen w-full object-cover absolute z-0 filter blur-sm" />
            <div className="md:mb-0 text-end text-white absolute ml-auto pt-36 h-screen flex flex-col px-16 items-end">
                <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
                <p className="text-lg mb-6 w-2/3 text-right text-shadow">
                    We tailor our services to match your specific platforms, whether it's VR, Mobile, Broadcast, Console, or PC. We adapt to your preferred workflows, processes, styles, and methods to align seamlessly with your project and pipeline.
                </p>
                <ul className="space-y-2 text-end w-2/3 ml-auto" style={{ listStylePosition: 'inside', listStyleType: 'none' }}>
                    <li className="flex justify-end">Scene Layout and Design<span className="ml-2">•</span></li>
                    <li className="flex justify-end">Unreal and Unity Specialist<span className="ml-2">•</span></li>
                    <li className="flex justify-end">Asset Creation<span className="ml-2">•</span></li>
                    <li className="flex justify-end">Look Development<span className="ml-2">•</span></li>
                    <li className="flex justify-end">Hard Surface and Organic Modeling<span className="ml-2">•</span></li>
                    <li className="flex justify-end">3D Prototyping<span className="ml-2">•</span></li>
                    <li className="flex justify-end">PBR Texturing<span className="ml-2">•</span></li>
                </ul>
            </div>
        </section>
    )
}
