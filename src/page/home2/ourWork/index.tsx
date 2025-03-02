import { OurWorkData } from "./data";
import GradientBar from "./lineBar";

const getRandomData = (data: any[], number: number) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5); // Acak data
    return shuffled.slice(0, number); // Ambil 16 data acak
};

export default function OurWork() {
    const randomData = getRandomData(OurWorkData, 16);
    return (
        <section className="bg-primaryColor text-white">
            <GradientBar />
            <h6 className="text-center text-4xl mt-8 font-bold">Our Work</h6>
            <section className="w-full flex justify-center my-4">
                <button className="p-3 px-8 bg-blue-400 rounded-md mx-auto capitalize">View Our Full Artstation portfolio</button>
            </section>
            <div className="flex flex-wrap justify-center p-4 w-full mt-4">
                {/* Image Items */}
                {randomData.map((data, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-1/2 md:w-1/4 overflow-hidden"
                    >
                        <img
                            src={data} 
                            className="w-full h-80 object-cover  transition-transform transform hover:scale-110"
                        />
                    </div>
                ))}
            </div>
            <GradientBar />
        </section>
    )
}
