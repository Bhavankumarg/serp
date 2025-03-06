import Image from "next/image";
import React from "react";

const CaseStories = () => {
  return (
    <>
      <div className="bg-[#F5E582] lg:pb-20 pb-5 lg:pt-10 lg:mt-10 mt-5">
        <h1 className="text-center text-3xl p-4">Case Stories</h1>
        <div className="flex container mx-auto flex-col lg:flex-row items-center justify-center">
          <div className="lg:mt-5">
            <Image
              src="/Home/CaseStoriesBanner.png"
              alt="Case Stories Banner"
              width={1200}
              height={1000}
              className="w-full p-5 lg:p-0"
            />
          </div>
          <div className="p-5 lg:w-1/2">
            <p>
              &quot;Reaching for the Skies&quot; is a collection of 100
              empowering stories showcasing how women of Andhra Pradesh have
              transcended financial uncertainties to become flourishing
              entrepreneurs. Through the support of Self-Help Groups and
              government initiatives, these women have not only established
              successful businesses but have also become pivotal in reshaping
              their communities and fostering economic growth across Andhra
              Pradesh. From small businesses in food processing and tailoring to
              large-scale ventures creating jobs in rural communities, these
              stories are testaments to resilience and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStories;
