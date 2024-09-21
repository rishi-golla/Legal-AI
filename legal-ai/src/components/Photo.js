"use client";

import { motion } from "framer-motion";


const Photo = ({ imgSrc }) => {

    return (
        <div className="h-full w-full relative mb-5">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                    }}
                    className="w-[200px] h-[200px] rounded-full absolute"
                >   
                    <img
                        src={imgSrc}
                        alt="Arnab Dev"
                        className="object-contain w-[200px] h-[200px] rounded-full"
                        loading="eager"
                        style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    ></img>
                </motion.div>

                <motion.svg
                    className="w-[200px] h-[200px] "
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
