"use client";

import React from "react";
import localFont from "next/font/local";
import { twMerge as cn } from "tailwind-merge";
import { motion } from "framer-motion";

import Circle from "@/components/icons/circle";
import ProjectFooter from "@/components/ui/ProjectFooter";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-[150px]">
      <motion.div
        className="flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="hidden lg:block text-8xl font-black text-center w-[90%] z-10 text-[#292929] leading-[110px]"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>MONYVANN</motion.span>{" "}
          <motion.span variants={itemVariants}>IS A</motion.span>{" "}
          <motion.span variants={itemVariants} className="relative">
            WEB
            <svg
              className="absolute -top-14 left-0 -z-10"
              width={232}
              height={232}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M26.5,-31.6C36.4,-29.2,48.1,-24.3,59.3,-13.6C70.5,-2.9,81.4,13.5,78.7,26.8C76,40,59.8,50.1,44.5,50.1C29.1,50.1,14.6,40.1,0.7,39.2C-13.2,38.3,-26.4,46.4,-35.7,44.4C-44.9,42.4,-50.3,30.2,-59.3,16.1C-68.2,1.9,-80.9,-14.2,-80.8,-29.9C-80.8,-45.6,-68,-60.8,-52.4,-61.3C-36.8,-61.8,-18.4,-47.7,-5.1,-40.7C8.3,-33.7,16.5,-33.9,26.5,-31.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>{" "}
          <br />
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            DEVELOPER
          </motion.span>{" "}
          <motion.span variants={itemVariants}>&</motion.span>{" "}
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            DESIGNER{" "}
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants} className="relative">
            BASED
            <svg
              className="absolute -top-14 left-0 -z-10"
              width={232}
              height={232}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M49.3,-33.8C62.2,-23.1,69.8,-2.7,67.7,18.9C65.5,40.6,53.6,63.5,38.5,65.1C23.4,66.7,5.2,46.9,-16.9,36C-38.9,25,-64.8,22.9,-72.6,10.4C-80.4,-2.1,-70.1,-24.9,-55,-36.1C-39.9,-47.3,-20,-46.8,-0.9,-46.1C18.2,-45.4,36.4,-44.5,49.3,-33.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>{" "}
          <motion.span variants={itemVariants}>IN CAMBODIA WHO</motion.span>{" "}
          <br />
          <motion.span variants={itemVariants} className="relative">
            L <Circle className="absolute top-6 left-12" />
          </motion.span>{" "}
          <motion.span variants={itemVariants} className="ml-12">
            VES TO CREATE
          </motion.span>
          <br />
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            BEAUTIFULLY
          </motion.span>{" "}
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            FUNCTIONAL
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants}>WEBSITES.</motion.span>
        </motion.h1>
        <motion.h1
          className="hidden md:block lg:hidden font-black text-[56px] text-center text-[#292929] w-[90%] leading-[70px] z-10"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>MONYVANN IS A</motion.span>{" "}
          <motion.span variants={itemVariants} className="relative">
            WEB{" "}
            <svg
              className="absolute -top-6 left-0 -z-10"
              width={128}
              height={128}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M26.5,-31.6C36.4,-29.2,48.1,-24.3,59.3,-13.6C70.5,-2.9,81.4,13.5,78.7,26.8C76,40,59.8,50.1,44.5,50.1C29.1,50.1,14.6,40.1,0.7,39.2C-13.2,38.3,-26.4,46.4,-35.7,44.4C-44.9,42.4,-50.3,30.2,-59.3,16.1C-68.2,1.9,-80.9,-14.2,-80.8,-29.9C-80.8,-45.6,-68,-60.8,-52.4,-61.3C-36.8,-61.8,-18.4,-47.7,-5.1,-40.7C8.3,-33.7,16.5,-33.9,26.5,-31.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            DEVELOPER <br />& <br />
            DESIGNER
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants}>
            BASED IN CAMBODIA WHO
          </motion.span>{" "}
          <motion.span variants={itemVariants} className="relative">
            LOVES{" "}
            <svg
              className="absolute -top-8 left-4 -z-10"
              width={128}
              height={128}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M49.3,-33.8C62.2,-23.1,69.8,-2.7,67.7,18.9C65.5,40.6,53.6,63.5,38.5,65.1C23.4,66.7,5.2,46.9,-16.9,36C-38.9,25,-64.8,22.9,-72.6,10.4C-80.4,-2.1,-70.1,-24.9,-55,-36.1C-39.9,-47.3,-20,-46.8,-0.9,-46.1C18.2,-45.4,36.4,-44.5,49.3,-33.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>{" "}
          <motion.span variants={itemVariants}>TO CREATE</motion.span>{" "}
          <motion.span
            variants={itemVariants}
            className={cn(
              "whitespace-nowrap text-[#FF8031]",
              RoboroughCFItalic.className
            )}
          >
            BEAUTIFUL <br />& <br />
            FUNCTIONAL
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants}>WEBSITES.</motion.span>
        </motion.h1>
        <motion.h1
          className="block md:hidden font-black text-[40px] text-center w-[90%] text-[#292929] leading-[50px] z-10"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>MONYVANN IS A</motion.span>{" "}
          <motion.span variants={itemVariants} className="relative">
            {" "}
            WEB{" "}
            <svg
              className="absolute -top-6 left-0 -z-10"
              width={96}
              height={96}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M26.5,-31.6C36.4,-29.2,48.1,-24.3,59.3,-13.6C70.5,-2.9,81.4,13.5,78.7,26.8C76,40,59.8,50.1,44.5,50.1C29.1,50.1,14.6,40.1,0.7,39.2C-13.2,38.3,-26.4,46.4,-35.7,44.4C-44.9,42.4,-50.3,30.2,-59.3,16.1C-68.2,1.9,-80.9,-14.2,-80.8,-29.9C-80.8,-45.6,-68,-60.8,-52.4,-61.3C-36.8,-61.8,-18.4,-47.7,-5.1,-40.7C8.3,-33.7,16.5,-33.9,26.5,-31.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>
          <motion.span
            variants={itemVariants}
            className={cn(RoboroughCFItalic.className, "text-[#FF8031]")}
          >
            DEVELOPER <br />& <br />
            DESIGNER
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants}>
            BASED IN CAMBODIA WHO
          </motion.span>{" "}
          <motion.span variants={itemVariants} className="relative">
            LOVES{" "}
            <svg
              className="absolute -top-6 left-4 -z-10"
              width={96}
              height={96}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF8031"
                d="M49.3,-33.8C62.2,-23.1,69.8,-2.7,67.7,18.9C65.5,40.6,53.6,63.5,38.5,65.1C23.4,66.7,5.2,46.9,-16.9,36C-38.9,25,-64.8,22.9,-72.6,10.4C-80.4,-2.1,-70.1,-24.9,-55,-36.1C-39.9,-47.3,-20,-46.8,-0.9,-46.1C18.2,-45.4,36.4,-44.5,49.3,-33.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.span>{" "}
          <motion.span variants={itemVariants}>TO CREATE</motion.span>{" "}
          <motion.span
            variants={itemVariants}
            className={cn(
              "whitespace-nowrap text-[#FF8031]",
              RoboroughCFItalic.className
            )}
          >
            BEAUTIFUL <br />& <br />
            FUNCTIONAL
          </motion.span>{" "}
          <br />
          <motion.span variants={itemVariants}>WEBSITES.</motion.span>
        </motion.h1>
      </motion.div>

      {/* EXPERIENCES & EDUCATION */}
      <div className="py-20 px-8 md:px-20 mt-[200px] lg:flex items-start justify-between ">
        <h1 className="text-4xl md:text-6xl font-bold text-[#292929]">
          EXPERIENCES
        </h1>
        <div className="mt-10 lg:mt-0 lg:w-2/3">
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>WEB DEVELOPER</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  American University of Phnom Penh
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className=" text-lg md:text-2xl">
                  APRIL, 2024 - CURRENTLY
                </h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div className="w-1/2">
                <h2>FRONT-END DEVELOPER INTERN</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Ministry of Interior
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">
                  JANUARY, 2024 - APRIL, 2024
                </h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>FACILITATOR (SUMMER JOB)</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Snoop-Edu
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">JUNE, 2023 - JULY, 2023</h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>SOFTWARE DEVELOPER</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Freelancing
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">2020 - 2022</h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#292929]" />
          </div>
        </div>
      </div>
      <div className="py-20 px-8 md:px-20 mt-[200px] lg:flex items-start justify-between ">
        <h1 className="text-4xl md:text-6xl font-bold text-[#292929]">
          EDUCATION
        </h1>
        <div className="mt-10 lg:mt-0 lg:w-2/3">
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>Fort Hays State University</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Bachelor of Science in Computer Science
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">2022 - CURRENTLY</h2>
                <p className="text-base md:text-xl md:mt-2">Kansas, USA</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>American University of Phnom Penh</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Bachelor of Science in ITM
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">2022 - CURRENTLY</h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <h2>IT Step Academy</h2>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  Associate Degree in Software Development
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">2017 - 2020</h2>
                <p className="text-base md:text-xl md:mt-2">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-8 md:px-20 mt-[200px] lg:flex items-start justify-between ">
        <h1 className="text-4xl md:text-6xl font-bold text-[#292929]">
          CREDITS
        </h1>
        <div className="mt-10 lg:mt-0 lg:w-2/3">
          <div>
            <div className="w-full h-[2px] bg-[#292929]" />
            <div className="md:flex items-start justify-between text-2xl md:text-4xl py-8 md:py-12 text-[#292929]">
              <div>
                <a
                  className="hover:underline"
                  href="https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5"
                  target="_blank"
                >
                  Tenhun Falling spaceman
                </a>
                <h3
                  className={cn(
                    RoboroughCFItalic.className,
                    "text-lg md:text-2xl md:mt-2"
                  )}
                >
                  By{" "}
                  <a
                    className="hover:underline"
                    href="https://sketchfab.com/wallmasterr"
                    target="_blank"
                  >
                    wallmasterr
                  </a>
                </h3>
              </div>
              <div className="text-right mt-8 md:mt-0">
                <h2 className="text-lg md:text-2xl">
                  <a
                    className="hover:underline"
                    href="https://sketchfab.com/feed"
                    target="_blank"
                  >
                    Sketchfab
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-14 lg:px-32">
        <ProjectFooter />
      </div>
    </div>
  );
};

export default AboutPage;
