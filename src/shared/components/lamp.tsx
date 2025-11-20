import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./beams";

export const LampContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
          className
        )}
      >
        <BackgroundBeams />
        <div className="relative opacity-80 flex w-full translate-y-60 scale-y-125 items-center justify-center isolate z-100 ">
          <motion.div
            initial={{ opacity: 0, width: "5rem" }}
            whileInView={{ opacity: 1, width: "10rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-28 overflow-visible w-[384px bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute  w-full left-0 bg-black h-8 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
            <div className="absolute  w-24 h-full left-0 bg-black  bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "5rem" }}
            whileInView={{ opacity: 1, width: "10rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-8 w-[384px bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute  w-20 h-full right-0 bg-black  bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
            <div className="absolute  w-full right-0 bg-black h-24 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-24 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-12 w-[246px] rounded-full bg-red-500 opacity-50 blur-xl"></div>
          <motion.div
            initial={{ width: "2rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-12 rounded-full bg-red-500 blur-2xl"
          ></motion.div>
        </div>
   
        <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
          {children}
        </div>
      </div>
    );
  };