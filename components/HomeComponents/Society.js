import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Society = () => {
  return (
    <>
      <div className="lg:flex items-center justify-center container mx-auto py-12 space-x-6">
        <div className="lg:w-[50%] px-5">
          <h1 className="text-3xl font-medium mb-4">
            The Society for Elimination of Rural Poverty (SERP) was established
            by the Government of Andhra Pradesh (GOAP)
          </h1>
        </div>

        <div className="lg:w-[50%] px-5 lg:px-0 text-lg">
          <p>
            SERP is a sensitive support structure to facilitate poverty reduction
            through social mobilization and improvement of Livelihoods of rural
            poor in Andhra Pradesh. As per the Andhra Pradesh Reorganisation
            Act, 2014, SERP is divided into AP SERP and TG SERP for implementing
            Indira Kranthi Patham (IKP)
          </p>
          <Link href="https://www.serp.ap.gov.in/SHGAP/" target="_blank">
            <button className="bg-[#DA2927] text-white p-2 rounded-lg flex items-center gap-2 justify-center w-40 mt-3 hover:bg-white hover:text-[#DA2927] border border-[#DA2927]">
              Explore More
              <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <Image
          src="/Home/Banner-Emp.jpg"
          alt="Certificate"
          width={1200}
          height={600}
          className="w-full"
        />
      </div>
    </>
  );
};

export default Society;
