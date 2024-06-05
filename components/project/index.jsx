"use client";

import React from "react";
import styles from "./style.module.css";
import localFont from "next/font/local";
import { twMerge as cn } from "tailwind-merge";

const RoboroughCFItalic = localFont({
    src: "../../public/fonts/roxboroughitalic.woff2",
});

export default function index({
    index,
    title,
    setModal,
    description,
    hoverData,
}) {
    return (
        <div
            onMouseEnter={() => {
                setModal({ active: true, index });
                hoverData(title);
            }}
            onMouseLeave={() => {
                setModal({ active: false, index });
                hoverData("");
            }}
            className={cn(
                styles.project,
                "lg:flex-row flex-col py-8 lg:py-12 md:text-left text-center",
            )}
        >
            <h2 className="2xl:text-[40px] lg:text-[32px] text-2xl">{title}</h2>
            <p className={RoboroughCFItalic.className}>{description}</p>
        </div>
    );
}
