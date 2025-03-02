import GradientBar from "./lineBar";

export default function OurWork() {
    return (
        <section className="bg-primaryColor text-white">
            <GradientBar />
            <h6 className="text-center text-4xl mt-8 font-bold">Our Work</h6>
            <section className="w-full flex justify-center my-4">
            <button className="p-3 bg-blue-400 rounded-md mx-auto">View Our Full Artstation portfolio</button>
            </section>
            <div className="flex flex-wrap justify-center p-4 w-full mt-4">
                {/* Image Items */}
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative w-1/4 transition-transform transform hover:scale-110 overflow-hidden"
                    >
                        <img
                            src={`https://i.pinimg.com/236x/c1/df/cd/c1dfcddeff128a96780d77dfe1d217b3.jpg`}  // Replace with actual image paths
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <GradientBar />
        </section>
    )
}
