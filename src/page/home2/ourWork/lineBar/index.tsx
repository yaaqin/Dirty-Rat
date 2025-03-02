
const GradientBar = () => {
  return (
    <div className="relative h-2 bg-dark">
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="w-4/6 h-full bg-lineColor2 transition-all duration-300 ease-in-out hover:from-[#2196F3] hover:to-[#9C27B0]" />
        <div className="w-1/6 h-full bg-lineColor3 transition-all duration-300 ease-in-out hover:from-[#2196F3] hover:to-[#9C27B0]" />
        <div className="w-1/6 h-full bg-lineColor1 transition-all duration-300 ease-in-out hover:from-[#FF5722] hover:to-[#FF4081]" />
      </div>
    </div>
  );
};

export default GradientBar;
