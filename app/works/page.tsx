"use client";

import { twMerge as cn } from "tailwind-merge";
import localFont from "next/font/local";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

const projects = [
  {
    title: "REQUEST ENGINE",
    src: "ecom-main.jpeg",
    description: "Development",
    color: "#706D63",
    href: "request-engine",
  },
  {
    title: "ID MANAGEMENT SYSTEM",
    src: "card-main.jpeg",
    description: "Development",
    color: "#CDD8E6",
    href: "id-management-system",
  },
  {
    title: "LOODEN CREATIVE",
    src: "looden-main.jpeg",
    description: "Design & Development",
    color: "#8C8C8C",
    href: "looden-creative",
  },
  {
    title: "THENG PORTFOLIO",
    src: "theng-main.jpeg",
    description: "Design & Development",
    color: "#EFE8D3",
    href: "theng-portfolio",
  },
];

const variants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.05 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Works = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="max-h-screen flex flex-col justify-between">
      <div className="flex lg:flex-row flex-col items-center justify-around px-20 mt-[100px]">
        <div className="lg:block hidden">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            SELECTED WORKS I HAVE DONE SINCE 2022
          </h3>
        </div>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          className="flex items-center justify-center md:gap-5 gap-2 h-[200px] md:w-[600px]"
        >
          <h1
            className={cn(
              "text-[57px] lg:text-[110px] text-[#007167]",
              RoboroughCFItalic.className
            )}
          >
            My
          </h1>
          <h1 className="text-[57px] lg:text-[100px] text-[#007167]">Works</h1>
        </motion.div>
        <div className="lg:hidden block">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            SELECTED WORKS I HAVE DONE SINCE 2022
          </h3>
        </div>
        <div className="lg:block hidden">
          <h3 className="w-[200px] text-[#FF8031] uppercase text-[14px] 2xl:text-[18px] leading-5 text-center text-balance">
            CLICK TO VIEW MORE ABOUT EACH PROJECT
          </h3>
        </div>
      </div>
      <main className="flex items-center justify-center mt-[100px]">
        <div className="w-full md:px-20 px-10 md:grid grid-cols-2 lg:gap-x-32 gap-x-16">
          {projects.map((project, index) => {
            return (
              <Link href={`/works/${project.href}`} key={index}>
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                  description={project.description}
                />
              </Link>
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </div>
  );
};

export default Works;
