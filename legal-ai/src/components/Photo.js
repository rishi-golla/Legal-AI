"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Photo = ({ imgSrc }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="h-full w-full relative mb-5 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}  // Controlled by the Intersection Observer
                transition={{ delay: 0, duration: 0.4, ease: "easeIn" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    className="w-[200px] h-[200px] rounded-full absolute"
                >
                    <img
                        src={imgSrc}
                        alt="Arnab Dev"
                        className="object-contain w-[200px] h-[200px] rounded-full"
                        loading="eager"
                        style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    />
                </motion.div>

                <motion.svg
                    className="w-[200px] h-[200px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="255"
                        stroke="#cbacf9"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo;
