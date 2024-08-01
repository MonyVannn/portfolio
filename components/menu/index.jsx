"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { twMerge as cn } from "tailwind-merge";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <AnimatedHamburgerButton />
            <div
              className={cn(
                `${styles.burger} ${isActive ? styles.burgerActive : ""}`,
                "absolute h-20 w-20 p-10 mt-3 rounded-full bg-white/0 transition-colors hover:bg-white/20 lg:hidden"
              )}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}

const AnimatedHamburgerButton = () => {
  const [activeButton, setActiveButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (activeButton) setActiveButton(false);
  }, [pathname]);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={activeButton ? "open" : "closed"}
        onClick={() => setActiveButton((pv) => !pv)}
        className="relative h-20 w-20 p-10 mt-3 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className={cn(
            "absolute h-0.5 w-10 bg-[#292929]",
            activeButton ? "bg-white" : "bg-[#292929]"
          )}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={cn(
            "absolute h-0.5 w-10 bg-[#292929]",
            activeButton ? "bg-white" : "bg-[#292929]"
          )}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={cn(
            "absolute h-0.5 w-5 bg-[#292929]",
            activeButton ? "bg-white" : "bg-[#292929]"
          )}
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
