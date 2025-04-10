"use client";

import Model from "@/components/model";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

function Contact() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="relative w-[300px] md:w-[600px] lg:w-[800px]">
        <h1 className="text-4xl font-bold">
          Let&apos;s talk, don&apos;t be shy
        </h1>
        <p className="text-xl text-gray-600 mb-10 mt-3">
          I am always open to discussing new projects, create ideas or
          opportunities to be part of your visions. Feel free to reach out to me
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MagnetButton />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              New project request
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <MagnetButton />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              Need a website
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <MagnetButton />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              Something else?
            </h2>
          </div>
        </div>
        <div className="absolute md:top-20 md:-right-44">
          <Model z="5" />
        </div>
      </div>
    </div>
  );
}

const MagnetButton = () => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href="mailto:m.men6603@gmail.com">
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative grid h-[70px] w-[70px] place-content-center rounded-full border-2 border-black transition-colors duration-700 ease-out"
      >
        <MdOutlineArrowUpward className="pointer-events-none relative z-10 rotate-45 text-4xl text-black transition-all duration-700 ease-out group-hover:rotate-90" />

        <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-100" />

        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          width="200"
          height="200"
          className="pointer-events-none absolute z-10"
        >
          <path
            id="circlePath"
            d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
            fill="none"
          />
          <text>
            <textPath
              href="#circlePath"
              fill="black"
              className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
            ></textPath>
          </text>
        </motion.svg>
      </motion.button>
    </Link>
  );
};

export default Contact;
