import React from "react";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { twMerge as cn } from "tailwind-merge";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

const montreal = Montserrat({ subsets: ["latin"] });

interface ProjectChallangeApproachProps {
  challange: string;
  approach: Array<string>;
}

const ProjectChallangeApproach = ({
  challange,
  approach,
}: ProjectChallangeApproachProps) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-20">
      <div>
        <h1 className="text-[#017167] text-5xl font-medium">
          Chall<span className={cn(RoboroughCFItalic.className)}>ange</span>
        </h1>
        <p
          className={cn(
            "mt-5 text-lg font-medium -tracking-[0.040rem]",
            montreal.className
          )}
        >
          {challange}
        </p>
      </div>
      <div>
        <h1 className="text-[#017167] text-5xl font-medium">
          Appr<span className={cn(RoboroughCFItalic.className)}>oach</span>
        </h1>
        <ul
          className={cn(
            "mt-5 ml-5 list-decimal list-outside text-lg font-medium -tracking-[0.040rem] space-y-2",
            montreal.className
          )}
        >
          {approach.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectChallangeApproach;
