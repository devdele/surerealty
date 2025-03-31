import Image from "@/assets/mission.png";
import { ArrowUpRight } from "lucide-react";

const Mission = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[70px] justify-center items-center py-12 md:py-0 md:h-[500px] px-4">
      <div className="w-[370px] md:w-[500px] flex items-center justify-center">
        <img
          src={Image}
          alt="Sure Realty sustainable home"
          className="max-w-full h-auto md:h-[400px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[600px] text-center md:text-left">
        <div className="flex flex-row items-center justify-center md:justify-start gap-4">
          <div className="w-12 h-0.5 bg-green-800 hidden md:block"></div>
          <h2 className="text-green-800 font-medium tracking-wider text-base md:text-lg uppercase">
            OUR MISSION
          </h2>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Building a Better Future with Eco-Friendly Homes.
          </h1>
        </div>

        <div className="mt-2">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            The agency's mission is to provide clients with a selection of
            properties that meet high environmental standards, while also
            providing a comfortable and luxurious lifestyle.
          </p>
        </div>

        <div className="mt-4 flex justify-center md:justify-start">
          <button className="bg-green-800 hover:bg-green-700 transition-colors text-white px-4 md:px-6 py-2 md:py-3 rounded-[30px] font-medium h-[50px] w-[200px] md:w-[230px] cursor-pointer flex items-center justify-center">
            <span className="mr-2">Learn more</span>
            <ArrowUpRight size={20} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
