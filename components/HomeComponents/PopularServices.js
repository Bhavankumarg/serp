"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PopularServices = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  const services = [
    {
      name: "CBO Services",
      subServices: [
        {
          name: "Institutional Building",
          link: "http://mbk-serp.ap.gov.in/InstitutionBuilding/UI/home.aspx",
        },
        {
          name: "HLP & FNHW",
          link: "http://shgmbk-serp.ap.gov.in/SHGBookkeeping/UI/Home.aspx",
        },
        {
          name: "CBO Accounting - VO/MS/ZS",
          link: "http://cbo-serp.ap.gov.in/Default.aspx",
        },
        {
          name: "Bank Linkage",
          link: "https://www.ikp.serp.ap.gov.in/BPAP/view/shared/home.aspx",
        },
        {
          name: "Sthreenidhi Services",
          link: "https://www.sthreenidhi.ap.gov.in/SNBank/UI/Home.aspx",
        },
      ],
    },
    {
      name: "Livelihood Services",
      subServices: [
        {
          name: "APRIGP",
          link: "http://103.210.74.210:8080/FPO/aprigp/Aprigp_Portal.html",
        },
        {
          name: "Livelihoods Reports",
          link: "http://103.210.74.212:8081/Reports/report.aspx",
        },
        {
          name: "APMSS-Livelihoods",
          link: "https://www.ikp.serp.ap.gov.in/APMAS/UI/Login.aspx",
        },
        {
          name: "APSARAS",
          link: "https://www.ikp.serp.ap.gov.in/APMAS/SARASUI/SarasHome.aspx",
        },
      ],
    },
    {
      name: "Unnathi",
      subServices: [
        {
          name: "unnathi",
          link: "https://www.sthreenidhi.ap.gov.in/unnathi/UI/Home.aspx",
        },
      ],
    },
    {
      name: "Insurance Services",
      subServices: [
        { name: "Abhaya Hastham", link: "https://www.serp.ap.gov.in/AHAP/" },
        { name: "AABY", link: "http://www.aaby.ap.gov.in/" },
        {
          name: "Social security pensions",
          link: "https://sspensions.ap.gov.in/SSP",
        },
      ],
    },
    {
      

      name: "Admin/Finance Services",
      subServices: [
        { name: "Annual Works & Finance Plan", link: "https://www.serp.ap.gov.in/AWFP/" },
        { name: "HRMS", link: "https://www.serp.ap.gov.in/HRMSAP/" },
        
      ],
    },
    {
      name: "General Services",
      subServices: [{ name: "Staff Performance", link: "https://www.ikp.serp.ap.gov.in/PMSC/LoginPage.aspx" }],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavigation = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      router.push(link);
    }
  };

  return (
    <div className="bg-[#EC9E34] lg:flex flex-col justify-center items-center" id="services">
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
          <div key={index} className="relative">
            <div
              className="bg-white text-black px-4 py-3 shadow-md flex justify-between items-center relative cursor-pointer"
              onClick={() =>
                service.subServices.length > 0 && toggleDropdown(index)
              }
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-red-700"></span>
              {service.name}
              {service.subServices.length > 0 && (
                <FaChevronDown
                  className={`transition-transform ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Dropdown Content with Links */}
            {openDropdown === index && service.subServices.length > 0 && (
              <div className="absolute left-0 w-full bg-gray-100 shadow-md mt-1 z-10">
                {service.subServices.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleNavigation(sub.link)}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
