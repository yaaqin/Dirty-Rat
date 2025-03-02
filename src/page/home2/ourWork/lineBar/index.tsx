
const GradientBar = () => {
  return (
    <div className="relative h-6 bg-dark">
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="w-4/6 h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-blue-500" />
        <div className="w-1/6 h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-blue-500" />
        <div className="w-1/6 h-full bg-gradient-to-l from-red-500 to-red-400 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-500" />
      </div>
    </div>
  );
};

export default GradientBar;
