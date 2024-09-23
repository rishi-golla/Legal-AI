import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import './index.css';
const sections = {
    "Students": (
        <div>
            <h2 className="text-white text-3xl font-bold mb-4">LegalAI for students</h2>
            <p className="text-purple-300 ">
                Description of how it will be useful
            </p>
        </div>
    ),
    "Workers": (
        <div>
            <h2 className="text-white text-3xl font-bold mb-4">LegalAI for workers</h2>
            <p className="text-purple-300 ">
                Description of how it will be useful
            </p>
        </div>
    ),
    "Couples": (
        <div>
            <h2 className="text-white text-3xl font-bold mb-4">LegalAI for couples</h2>
            <p className="text-purple-300 ">
                Description of how it will be useful
            </p>
        </div>
    ),
    "Businesses": (
        <div>
            <h2 className="text-white text-3xl font-bold mb-4">LegalAI for businesses</h2>
            <p className="text-purple-300 ">
                Description of how it will be useful
            </p>
        </div>
    ),
};

const App = () => {
    const [activeSection, setActiveSection] = useState("Students");
    const controls = useAnimation();
    const ref = useRef(null);

    // Track scrolling into the component
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            { threshold: 0.1 } // Trigger when at least 10% is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const sectionVariants = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="max-w-7xl mx-auto px-4 py-8"
        >
            {/* Header Section */}
            <h1 className="text-4xl font-bold mb-4 text-white">How LegalAI can help you?</h1>
            <p className="text-lg text-white opacity-60 mb-8">
                Chatbot App is a powerful tool that can be used in a variety of ways to assist users in different contexts having legal questions.
            </p>

            {/* Navigation Section */}
            {/* <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 3, ease: "easeIn" },
                    }}
                    className="container sm:w-[605px] sm:p-4 w-[95vw] p-2 text-white"
                >
                    giuwerhgiuewrhui
                </motion.div>
                <p className="developer text-center mt-2">
                    Developed by{" "}
                    <a
                        href="https://arnabdev.netlify.app/"
                        className="font-semibold text-[#ff3399]"
                    >
                        Arnab Dev
                    </a>
                </p>
            </div> */}
            <div className="flex space-x-4 border-b-2 border-purple-300 mb-8  flex-row items-center justify-between">
                {Object.keys(sections).map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`text-lg pb-2 ${activeSection === section
                                ? "text-white px-3 py-2 border-2 font-semibold border-purple-300 rounded-md"
                                : "text-white opacity-80 hover:opacity-100 duration-200"
                            }`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <motion.div
                key={activeSection} // Re-run animation when section changes
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sectionVariants}
                className="container text-lg py-10"
            >
                {sections[activeSection]}
            </motion.div>
        </motion.div>
    );
};

export default App;
