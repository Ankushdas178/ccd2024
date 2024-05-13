import React from "react";
import CommunityData from "@/public/assets/content/CommunityPartners/content.json";
import GdscBanner from "./GdscBanner";
import Link from "next/link";

const CommunityPartners = () => {
  return (
    <div>
      <div className='bg-background py-10 px-4'>
        <h1 className='text-4xl lg:text-7xl text-google-yellow font-bold flex justify-center text-center '>
          {CommunityData.title}
        </h1>
        <h3 className='md:text-2xl text-lg py-6 font-medium w-full text-center max-sm:justify-center '>
          {CommunityData.description}
        </h3>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 place-items-center m-8'>
          {CommunityData.community.map((item) => (
            <div
              key={`community-partner-${item.name}`}
              className={`bg-white p-4 w-64 h-64 md:w-48 md:h-52 xl:w-64 xl:h-64 flex items-center justify-center rounded ${
                item.hidden ? "blur-sm grayscale" : ""
              }`}
            >
              {!item.logo ? (
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href={item.hyperlink}
                >
                  <GdscBanner label={item?.name} />
                </Link>
              ) : (
                <>
                  {/* Else Part */}
                  <div className='col-span-1  align-middle rounded-lg text-black'>
                    <div className='w-fit flex justify-center'>
                      <Link
                        href={item.hyperlink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img src={item.logo} alt='' className='w-full' />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPartners;
