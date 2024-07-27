import React, { useRef } from "react";
import styles from "./style.module.css";
import localFont from "next/font/local";
import { twMerge as cn } from "tailwind-merge";

const RoboroughCFItalic = localFont({
  src: "../../public/fonts/roxboroughitalic.woff2",
});

export default function Project({
  index,
  title,
  setModal,
  description,
  hoverData,
}) {
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setModal({ active: true, index });
      hoverData(title);
    }, 300); // 2 seconds delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setModal({ active: false, index });
    hoverData("");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        styles.project,
        "lg:flex-row flex-col py-8 lg:py-12 md:text-left text-center"
      )}
    >
      <h2 className="2xl:text-[40px] lg:text-[32px] text-2xl">{title}</h2>
      <p className={RoboroughCFItalic.className}>{description}</p>
    </div>
  );
}
