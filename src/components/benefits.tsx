import Benefit1 from "../assets/benefits1.png";
import Benefit2 from "../assets/benefits2.png";
import Benefit3 from "../assets/benefits3.png";

const Benefits = () => {
  return (
    <div className="w-full md:h-[670px] h-[1700px] flex flex-col justify-center items-center bg-[#E4E5DF] gap-8 p-4">
      <div className="flex flex-col w-full max-w-[700px] gap-6 text-center">
        <div className="text-4xl font-semibold">
          Benefits of owning an eco-friendly home.
        </div>
        <div className="text-lg">
          High-quality homes with low-carbon impact.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-[370px] md:w-[420px] h-auto flex flex-col bg-white justify-center items-center text-left gap-12 p-4 ">
          <div className="flex flex-col text-left w-[350px] gap-2">
            <div className="text-2xl font-semibold text-left ">
              Low energy costs
            </div>
            <div className="text-left">
              One of the most significant benefits of owning an Eco Haven Realty
              Home is lower energy costs. Our eco-friendly homes are designed to
              use less energy with our solar powered system, saving money on
              bills.
            </div>
          </div>
          <div>
            <img
              src={Benefit1}
              alt="Low energy costs"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-[370px] md:w-[420px] h-auto flex flex-col bg-white justify-center items-center text-left gap-12 p-4">
          <div className="flex flex-col text-left w-[350px] gap-2">
            <div className="text-2xl font-semibold text-left ">
              Smaller carbon footprint
            </div>
            <div className="text-left">
              Our eco-friendly homes also have a smaller carbon footprint. They
              constantly use renewable energy sources and produce less waste
              which means they have a lower impact on the environment.
            </div>
          </div>
          <div>
            <img
              src={Benefit2}
              alt="Smaller carbon footprint"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-[370px] md:w-[420px] h-auto flex flex-col bg-white justify-center items-center text-left gap-18 p-4">
          <div className="flex flex-col text-left w-[350px] gap-2">
            <div className="text-2xl font-semibold text-left ">
              Indoor Air Quality
            </div>
            <div className="text-left">
              Our hybrid ventilation strategy includes both natural and
              mechanical ventilation, while our airtight wooden structure
              reduces risk of mold development, ensuring a healthy home.
            </div>
          </div>
          <div>
            <img
              src={Benefit3}
              alt="Indoor Air Quality"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
