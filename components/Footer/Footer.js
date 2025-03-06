import Link from "next/link";
import React from "react";
import { FaFacebookF, FaPlay, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D29] text-white">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col lg:items-center md:items-start">
          <img
            src="/Home/footer-logo.png"
            alt="SERP Logo"
            className="w-32 h-40 mb-2"
          />
        </div>

        {/* General Information & Department Links */}
        <div className="flex flex-col md:flex-row justify-between text-left space-x-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">General Information</h2>
            <ul className="space-y-2">
              <li className="hover:underline">
                <Link target="_blank" href="https://www.serp.ap.gov.in/SHGAP/FrontServlet?requestType=CommonRH&actionVal=getnextcirculargos&page=shgcircularsgos&startIndex=1&randId=oHszJ4CQqRcs2sJQ7Kqq">Circulars / GOs</Link>
              </li>
              <li className="hover:underline"><Link target="_blank" href="https://www.serp.ap.gov.in/SHGAP/FrontServlet?requestType=announcementRH&actionVal=tendersannouncereport&page=tendersannouncereport&randId=oHszJ4CQqRcs2sJQ7Kqq"> Tenders</Link></li>
              <li className="hover:underline"><Link target="_blank" href="https://www.serp.ap.gov.in/SHGAP/FrontServlet?requestType=CommonRH&actionVal=loadfreedbackform&page=feedback&randId=oHszJ4CQqRcs2sJQ7Kqq">  Thought / Grievance / Suggestions</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Other Department Links
            </h2>
            <ul  className="space-y-1.5">
              <li className="hover:underline"><Link href="https://www.ap.gov.in/" target="_blank">Govt. of AP</Link></li>
            <Link  href="https://www.serp.ap.gov.in/SHGAP/#" target="_blank">  <li className="hover:underline">Rural Department</li></Link>
             <Link  href="https://www.serp.ap.gov.in/SHGAP/#" target="_blank"> <li className="hover:underline">Panchayat Raj</li></Link>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Society for Elimination of Rural Poverty</p>
          <p>2nd floor, NTR Administrative Block,</p>
          <p>Pandit Nehru Bus Station,</p>
          <p>Vijayawada, Andhra Pradesh - 520001</p>
          <p className="mt-2">📞 0866-2410017 / 18</p>

          {/* Social Icons */}
          <div className="flex lg:justify-center md:justify-end space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer border rounded-full p-2" size={30}/>
            <FaPlay className="cursor-pointer border rounded-full p-2" size={30}/>
            <FaLinkedinIn className="cursor-pointer border rounded-full p-2" size={30}/>
            <FaXTwitter className="cursor-pointer border rounded-full p-2" size={30}/>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#9F0A08] text-white text-sm lg:text-center py-3 flex flex-col lg:flex-row lg:justify-between px-6 space-y-2 lg:space-y-0">
        <p>Privacy Policy</p>
        <p>Copyright © 2025 Powered by SERP</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
