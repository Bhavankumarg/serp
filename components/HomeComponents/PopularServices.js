import React from "react";

const PopularServices = () => {
  const services = [
    "OBO Services",
    "Livelihood Services",
    "FNHW",
    "Unnathi",
    "Insurance Services",
    "Admin/Finance Services",
    "General Services",
  ];

  return (
    <>
      
      <div className="bg-[#EC9E34] lg:flex flex-col justify-center items-center">
      <div className="text-center container mx-auto py-12">
        <h2 className="text-3xl">Popular Services</h2>
        <p className="pt-5 px-5 lg:px-0">
          With this in mind, SERP has relentlessly worked on a unique structure
          of community based organization by organising 69,31,113 rural women
          into 6,52,440 SHGs, 26,753 Village Organizations, 656 Mandal Samakhyas
          and 13 Zilla Samakhyas.
        </p>
      </div>
        <div className="lg:grid grid-cols-3 gap-6 w-full max-w-5xl space-y-6 lg:space-y-0 pb-20 px-5 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black px-4 py-3 shadow-md relative"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-red-700"></span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularServices;
