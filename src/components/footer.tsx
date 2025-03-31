import Logo from "@/assets/home-logo.png";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const footer = () => {
  return (
    <div className=" w-full md:h-[450px] h-[1200px] bg-green-800 flex flex-col justify-center md:items-center gap-[110px]">
      <div className="flex md:flex-row flex-col w-full justify-center md:items-start md:gap-[200px] gap-[80px] items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-3">
            <div>
              <img src={Logo} alt="logo" className="w-[35px] h-[30px]" />
            </div>
            <div className="text-2xl font-bold text-white">Sure Realty</div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="bg-white rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
              <Facebook className="cursor-pointer text-green-800" />
            </div>
            <div className="bg-white rounded-[50%] w-[50px] h-[50px] flex items-center justify-center ">
              <Linkedin className="cursor-pointer text-green-800" />
            </div>
            <div className="bg-white rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
              <Twitter className="cursor-pointer text-green-800" />
            </div>
            <div className="bg-white rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
              <Instagram className="cursor-pointer text-green-800" />
            </div>
          </div>
          <div className="flex text-left">
            <button className="bg-transparent w-[200px] h-[40px]  rounded-[30px] text-white border border-white cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left w-[200px]">
          <div className="text-2xl font-medium text-white">Navigation</div>
          <div>
            <ul>
              <li>
                <a href="" className="text-white">
                  Company
                </a>
              </li>
              <br />
              <li>
                <a href="" className="text-white">
                  Home
                </a>
              </li>
              <br />
              <li>
                <a href="" className="text-white">
                  Contact Us
                </a>
              </li>
              <br />
              <li>
                <a href="" className="text-white">
                  Properties
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left w-[200px]">
          <div className="text-2xl font-medium text-white">Company</div>
          <div>
            <ul>
              <li>
                <a href="" className="text-white">
                  About-us
                </a>
              </li>
              <br />
              <li>
                <a href="" className="text-white w-[70px]">
                  Our mission and vision
                </a>
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left w-[200px]">
          <div className="text-2xl font-medium text-white">Support</div>
          <div>
            <ul>
              <li>
                <a href="" className="text-white">
                  Contact us
                </a>
              </li>
              <br />
              <li>
                <a href="" className="text-white">
                  Login
                </a>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[370px] md:w-[1000px]">
        <p className="text-white text-left mt-10">
          Copyright © 2025 Sure Realty. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;
