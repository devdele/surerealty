import Logo from "@/assets/home-logo.png";
import SearchBar from "./ui/searchbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-start w-full h-screen flex-col" id="home">
      <div className="flex justify-between w-full h-[130px] flex-row items-center px-4 md:px-20">
        <div className="flex flex-row gap-3 items-center">
          <img src={Logo} alt="logo" className="w-[35px] h-[30px]" />
          <div className="text-2xl font-bold text-white">Sure Realty</div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-10 font-medium text-xm text-white">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Company</div>
          <div className="cursor-pointer">Properties</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-row gap-3">
          <button className="bg-transparent w-[100px] h-[40px] rounded-[30px] text-white border border-white cursor-pointer">
            Login
          </button>
          <button className="bg-emerald-900 w-[200px] h-[40px] rounded-[30px] text-white cursor-pointer hover:bg-green-700 transition-colors">
            Create an account
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[130px] left-0 w-full bg-black/90 md:hidden z-50">
          <div className="flex flex-col items-center py-6 space-y-4 text-white">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Company</div>
            <div className="cursor-pointer">Properties</div>
            <div className="cursor-pointer">Contact Us</div>
            <div className="flex flex-col gap-3 w-full px-4">
              <button className="bg-transparent w-full h-[40px] rounded-[30px] text-white border border-white cursor-pointer">
                Login
              </button>
              <button className="bg-emerald-900 w-full h-[40px] rounded-[30px] text-white cursor-pointer hover:bg-green-700 transition-colors">
                Create an account
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-center px-4 md:px-0">
        <div className="text-4xl md:text-6xl font-medium text-white">
          Live Green, Live Luxuriously.
        </div>
        <div className="text-base md:text-[17px] font-medium text-white max-w-[600px] text-center">
          Discover the Advantages of Eco-Friendly Homes with Our Real Estate
          Agency.
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
