import { useState } from "react";
import One from "@/assets/one.png";
import Two from "@/assets/two.png";
import Three from "@/assets/three.png";
import Four from "@/assets/four.png";
import Five from "@/assets/five.png";
import Six from "@/assets/six.png";

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState("New to market");

  const propertyData = [
    {
      id: 1,
      price: 450000,
      isNew: false,
      beds: 4,
      baths: 1,
      sqft: 1931,
      ecoFriendly: true,
      yearsAgo: 1,
      image: One,
      address: "Plot 16 Chief Nwuke Street",
      location: "Trans Amadi Industrial Layout",
      isFavorite: false,
    },
    {
      id: 1,
      price: 450000,
      isNew: false,
      beds: 4,
      baths: 1,
      sqft: 1931,
      ecoFriendly: true,
      yearsAgo: 1,
      image: One,
      address: "Plot 16 Chief Nwuke Street",
      location: "Trans Amadi Industrial Layout",
      isFavorite: false,
    },
    {
      id: 2,
      price: 250000,
      isNew: true,
      beds: 7,
      baths: 3,
      sqft: 1334,
      ecoFriendly: true,
      yearsAgo: 3,
      image: Two,
      address: "44, Arinola Street, Ori Okuta,",
      location: "Ikorodu",
      isFavorite: true,
    },
    {
      id: 3,
      price: 195000,
      isNew: true,
      beds: 2,
      baths: 2,
      sqft: 1000,
      ecoFriendly: true,
      yearsAgo: 3,
      image: Three,
      address: "5 Olaide Tomori Street, off",
      location: "Simbiat Abiola Road, Ikeja",
      isFavorite: false,
    },
    {
      id: 4,
      price: 450000,
      isNew: false,
      beds: 4,
      baths: 1,
      sqft: 1931,
      ecoFriendly: true,
      yearsAgo: 2,
      image: Four,
      address: "31, Herbert Macaulay Way,",
      location: "Sabo, Yaba",
      isFavorite: true,
    },
    {
      id: 5,
      price: 250000,
      isNew: true,
      beds: 7,
      baths: 3,
      sqft: 1334,
      ecoFriendly: true,
      yearsAgo: 3,
      image: Five,
      address: "5, Dele Ogundele Street,",
      location: "Oregun, Ikeja",
      isFavorite: false,
    },
    {
      id: 6,
      price: 195000,
      isNew: true,
      beds: 2,
      baths: 2,
      sqft: 1000,
      ecoFriendly: true,
      yearsAgo: 3,
      image: Six,
      address: "10 Lekki Phase 1, P.O. Box",
      location: "10141, Marina",
      isFavorite: true,
    },
  ];

  const tabs = ["New to market", "Nature Nearby", "Most viewed homes"];

  return (
    <div className="mx-auto px-4 py-8 w-full flex flex-col items-center justify-center gap-6 md:gap-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center px-4">
        Explore Eco-friendly Homes Near You.
      </h1>
      <div className="border-b border-gray-200 mb-4 md:mb-8 w-full overflow-x-auto">
        <div className="flex space-x-4 gap-4 md:gap-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-1 text-sm md:text-base ${
                activeTab === tab
                  ? "border-b-2 border-green-800 font-medium text-green-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:w-full w-[370px] px-4">
        {propertyData.map((property) => (
          <div
            key={property.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg w-full max-w-[450px] mx-auto"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.address}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>

            <div className="p-4 flex flex-col">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">
                      ${property.price.toLocaleString()}
                    </span>
                    {property.isNew && (
                      <span className="ml-2 text-sm text-gray-600">New</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1 flex-wrap">
                    <span>{property.beds} beds</span>
                    <span>•</span>
                    <span>{property.baths} baths</span>
                    <span>•</span>
                    <span>{property.sqft} sqft</span>
                    <span>•</span>
                    <span>Eco-friendly</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {property.yearsAgo} years ago
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-2">
                <div className="text-center md:text-left w-full">
                  <p className="font-medium text-green-800 hover:underline text-sm md:text-base">
                    {property.address}
                  </p>
                  <p className="text-green-800 hover:underline text-sm md:text-base">
                    {property.location}
                  </p>
                </div>
                <div className="bg-green-800 text-white px-3 py-1 text-sm rounded-md w-full md:w-[100px] text-center">
                  for sale
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
