import React from "react";
import ContentData from "@/public/assets/content/About/postcontent.json";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const CFS = () => {
  return (
    <div>
      <div className='bg-white text-black px-4'>
        <div className='max-w-screen-lg mx-auto py-10 '>
          <h1 className='text-4xl lg:text-7xl text-google-blue font-bold flex justify-center py-2'>
            {ContentData.callheading}
          </h1>
          {ContentData.callparagraph.map((word, idx) => (
            <h3
              className='  md:text-2xl text-lg px-32 py-2 font-medium text-center max-sm:contents'
              key={`${word}-${idx}`}
            >
              <p> {word.para}</p>
            </h3>
          ))}
          <Link
            href={"https://bit.ly/gccd-x-cfs-form"}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-google-blue w-fit py-1 px-8 text-xl text-foreground block mx-auto my-2 rounded-lg group'
          >
            <span className='flex items-center text-2xl gap-2 font-light'>
              {
                ContentData.buttons.find((button) => button?.id == "cfss")
                  ?.buttondesc
              }
              <ArrowUpRight className='rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-150' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CFS;
