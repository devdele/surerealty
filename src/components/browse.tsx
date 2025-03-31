import { ArrowUpRight } from "lucide-react";

const Browse = () => {
  return (
    <div className="w-full py-12 md:py-0 md:h-[800px] flex justify-center items-center bg-[#ffffff] px-4">
      <div
        className="flex justify-center items-center gap-4 w-[370px] md:w-[1700px] h-[350px] md:h-[600px] rounded-[15px] md:rounded-[25px]"
        id="browse-image"
      >
        <div className="flex flex-col justify-center items-center bg-white w-[340px] md:w-[900px] h-[270px] py-8 md:h-[370px] rounded-2xl md:rounded-3xl gap-6 md:gap-10 px-4 md:px-8">
          <div className="text-xl md:text-3xl font-semibold text-center max-w-[560px]">
            Ready to find your eco-friendly home?
          </div>
          <div className="text-base md:text-xl text-center">
            We have homes in 20+ cities across the country to choose from!
          </div>
          <div>
            <button className="bg-green-800 hover:bg-green-700 transition-colors text-white px-4 md:px-6 py-2 md:py-3 rounded-[30px] font-medium h-[45px] md:h-[50px] w-[200px] md:w-[230px] cursor-pointer flex items-center justify-center gap-2">
              <span>Browse homes</span>
              <ArrowUpRight size={20} className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
