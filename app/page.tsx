"use client";

import localFont from "next/font/local";
import { twMerge as cn } from "tailwind-merge";

import Model from "@/components/model";
import Star from "@/components/icons/star";

const RoboroughCFItalic = localFont({
  src: "../public/fonts/roxboroughitalic.woff2",
});

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex items-center justify-center md:gap-5 gap-2 h-[200px] mt-[100px]">
        <h1
          className={cn(
            "md:text-[120px] lg:text-[200px] text-[70px] text-[#007167]",
            RoboroughCFItalic.className
          )}
        >
          Mony
        </h1>
        <h1 className="md:text-[120px] lg:text-[200px] text-[70px] text-[#007167]">
          Vann
        </h1>
      </div>

      <div className="w-full flex lg:flex-row flex-col items-center justify-around md:pt-0 p-10 pb-0">
        <div className="flex flex-col items-center space-y-12">
          <Star />
          <h1 className="w-[300px] text-[#FF8031] uppercase text-sm 2xl:text-lg leading-5  text-center text-balance">
            MONYVANN (HE/HIM) AKA ZEN様 IS AN INDEPENDENT WEB-DEVELOPER FROM
            PHNOM PENH, CAMBODIA
          </h1>
        </div>
        <div className="lg:hidden block mt-6">
          <h1 className="w-[300px] leading-5 text-[#FF8031] uppercase text-sm text-center ">
            PASSIONATE ABOUT CREATING UNFORGETTABLE AND BEAUTIFUL DIGITAL
            EXPERIENCES.
          </h1>
        </div>
        <Model z="5" />
        <div className="lg:flex hidden flex-col items-center space-y-12">
          <Star />
          <h1 className="w-[300px] leading-5 text-[#FF8031] uppercase text-sm 2xl:text-lg text-center text-balance">
            PASSIONATE ABOUT CREATING UNFORGETTABLE AND BEAUTIFUL DIGITAL
            EXPERIENCES.
          </h1>
        </div>
      </div>
    </div>
  );
}
