import React from "react";
import { twMerge as cn } from "tailwind-merge";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Asterisk from "@/components/icons/asterisk";

const montreal = Montserrat({ subsets: ["latin"] });
const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

interface ProjectResultProps {
  description: string;
  results: Array<string>;
}

const ProjectResult = ({ description, results }: ProjectResultProps) => {
  return (
    <div className="mt-10 lg:grid grid-cols-2 gap-20">
      <h1 className="text-[#017167] text-4xl md:text-5xl font-medium">
        Res<span className={RoboroughCFItalic.className}>ults</span>
      </h1>
      <div>
        <Asterisk className="w-10 h-10 hidden lg:block" />
        <p
          className={cn(
            "mt-5 text-base md:text-lg font-medium -tracking-[0.040rem]",
            montreal.className
          )}
        >
          {description}
        </p>
        <ul
          className={cn(
            "mt-5 ml-5 list-decimal list-outside text-lg font-medium -tracking-[0.040rem] space-y-2",
            montreal.className
          )}
        >
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectResult;
