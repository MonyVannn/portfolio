import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { twMerge as cn } from "tailwind-merge";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainer = (e) => {
      const { pageX, pageY } = e;
      gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      })(pageX);
      gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      })(pageY);
      gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })(
        pageX
      );
      gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })(
        pageY
      );
      gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.45,
        ease: "power3",
      })(pageX);
      gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.45,
        ease: "power3",
      })(pageY);
    };

    window.addEventListener("mousemove", moveContainer);

    return () => {
      window.removeEventListener("mousemove", moveContainer);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={cn(
          styles.modalContainer,
          "md:h-[350px] md:w-[400px] h-[200px] w-[250px]"
        )}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  className="md:h-auto h-full"
                  src={`/images/${src}`}
                  width={350}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <ArrowRight size={24} />
      </motion.div>
    </>
  );
}
