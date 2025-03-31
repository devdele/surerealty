import { useState } from "react";
import { motion } from "framer-motion";

const HeroSearchBar = () => {
  return (
    <div className="w-full p-4 md:p-8 rounded-xl shadow-2xl max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden backdrop-blur-sm bg-white/10">
        <select
          name="property-type"
          className="w-full md:w-[120px] p-3 md:p-0 text-center md:text-right bg-[#E5E5E5] md:rounded-l-[30px] text-sm md:text-base h-[50px] cursor-pointer"
        >
          <option value="sale">For sale</option>
          <option value="rent">For rent</option>
        </select>

        <input
          type="text"
          placeholder="Enter an address, city, neighborhood, or ZIP code..."
          className="flex-grow px-4 py-3 text-sm md:text-lg bg-white backdrop-blur-sm border-y md:border-y-0 md:border-x border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-400 transition-all duration-300 h-[50px]"
        />

        <button className="bg-emerald-900 hover:bg-emerald-500 text-white px-6 md:px-12 py-3 md:py-4 font-semibold text-sm md:text-lg md:rounded-r-[30px] transition-all duration-300 flex items-center justify-center group w-full md:w-[200px] cursor-pointer h-[50px]">
          <motion.svg
            whileHover={{ scale: 1.1 }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-6 md:w-6 mr-2 group-hover:rotate-12 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </motion.svg>
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSearchBar;
