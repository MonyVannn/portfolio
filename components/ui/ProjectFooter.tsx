import React from "react";
import { twMerge as cn } from "tailwind-merge";
import localFont from "next/font/local";
import Link from "next/link";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

const ProjectFooter = () => {
  return (
    <div className="mt-40 px-10 pb-20">
      <div className="md:flex items-end justify-between">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#017167]">
          Let&apos;s{" "}
          <span className={RoboroughCFItalic.className}>Collaborate</span>
        </h1>
        <Link
          href="/contact"
          target="_blank"
          className="flex items-center gap-5"
        >
          <h1 className="lg:text-4xl text-2xl font-normal ">
            <span className="text-[#FF8031] bg-gradient-to-r from-[#FF8031] to-[#FF8031] bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ">
              Connect
            </span>
          </h1>
          <ArrowRight className="w-10 h-10 stroke-[#FF8031]" />
        </Link>
      </div>
      <p className="text-base md:text-lg font-medium md:mt-5 max-w-[700px] leading-6">
        I am always open to new opportunities and collaborations. If you have a
        project in mind, feel free to reach out to me.
      </p>
    </div>
  );
};

export default ProjectFooter;
