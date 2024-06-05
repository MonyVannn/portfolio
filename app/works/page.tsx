"use client";

import { twMerge as cn } from "tailwind-merge";
import localFont from "next/font/local";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";
import { AnimatePresence, motion } from "framer-motion";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

const projects = [
  {
    title: "ID MANAGEMENT SYSTEM",
    src: "card-main.jpeg",
    description: "Development",
    color: "#000000",
  },
  {
    title: "LOODEN CREATIVE AGENCY",
    src: "looden-main.jpeg",
    description: "Design & Development",
    color: "#8C8C8C",
  },
  {
    title: "THENG PHOTOGRAPHY PORTOFOLIO",
    src: "theng-main.jpeg",
    description: "Design & Development",
    color: "#EFE8D3",
  },
  {
    title: "E-COMMERCE PLATFORM",
    src: "ecom-main.jpeg",
    description: "Development",
    color: "#706D63",
  },
];

const variants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Works = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [work, setWork] = useState(["", ""]);

  const setWorkData = (name: string) => {
    const words = name.split(" ");
    let firstHalf = "";
    let secondHalf = "";

    if (words.length > 1) {
      firstHalf = words.slice(0, words.length - 1).join(" ");
      secondHalf = words[words.length - 1];
    } else {
      firstHalf = name;
    }

    setWork([firstHalf, secondHalf]);
    console.log(work);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex lg:flex-row flex-col items-center justify-around px-20 mt-[100px]">
        <div className="lg:block hidden">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            SELECTED WORKS I HAVE DONE SINCE 2020
          </h3>
        </div>
        <AnimatePresence mode="wait">
          {work[0] ? (
            <motion.div
              key={work[0]}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variants}
              className="flex flex-col items-center justify-center md:gap-5 gap-2 h-[200px] md:w-[600px]"
            >
              <p className="md:text-[57px] lg:text-[60px] text-[40px] text-[#007167] text-center leading-[50px]">
                {work[0]}{" "}
                <span
                  className={cn(
                    "text-[#FF8031] -pt-10",
                    RoboroughCFItalic.className,
                  )}
                >
                  {work[1]}
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={work[0]}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variants}
              className="flex items-center justify-center md:gap-5 gap-2 h-[200px] md:w-[600px]"
            >
              <h1
                className={cn(
                  "md:text-[57px] lg:text-[110px] text-[40px] text-[#007167]",
                  RoboroughCFItalic.className,
                )}
              >
                My
              </h1>
              <h1 className="md:text-[57px] lg:text-[100px] text-[40px] text-[#007167]">
                Works
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="lg:hidden block">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            SELECTED WORKS I HAVE DONE SINCE 2020
          </h3>
        </div>
        <div className="lg:block hidden">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            CLICK TO VIEW MORE ABOUT EACH PROJECT
          </h3>
        </div>
      </div>
      <main className="flex h-[100vh] items-center justify-center">
        <div className="w-full md:px-20 px-10 md:grid grid-cols-2 lg:gap-x-32 gap-x-16">
          {projects.map((project, index) => {
            return (
              <Project
                hoverData={setWorkData}
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
                description={project.description}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </div>
  );
};

export default Works;
