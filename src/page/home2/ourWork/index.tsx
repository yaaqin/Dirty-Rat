import { artStation } from "../../../data/link";
import { OurPortfolio } from "./data";
import GradientBar from "./lineBar";

// const getRandomData = (data: any[], number: number) => {
//     const shuffled = [...data].sort(() => Math.random() - 0.5); // Acak data
//     return shuffled.slice(0, number); // Ambil 16 data acak
// };

export default function OurWork() {
    // const randomData = getRandomData(OurWorkData, 8);
    return (
        <section className="bg-primaryColor text-white">
            <GradientBar />
            <h6 className="text-center text-4xl mt-8 font-bold">OUR WORK</h6>
            <section className="w-full flex justify-center my-4">
                <a href={artStation} target="_blank" rel="noopener noreferrer" className="p-3 px-8 bg-secondaryColor border border-secondaryColor hover:bg-primaryColor hover:border-secondaryColor transition duration-300 rounded-md mx-auto capitalize">View Our Full Artstation portfolio</a>
            </section>
            <div className="flex flex-wrap justify-center p-4 w-full mt-4">
                {/* Image Items */}
                {OurPortfolio.map((data, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-1/2 md:w-1/4 overflow-hidden"
                    >
                        <img
                            src={data} 
                            className="w-full h-80 object-cover transition-transform transform hover:scale-110 duration-1000"
                        />
                    </div>
                ))}
            </div>
            <GradientBar />
        </section>
    )
}
