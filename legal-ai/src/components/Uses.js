import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import './index.css';
import translations from '../translations'; // Import translations


const App = ({language}) => {
    const sections = {
        "Individuals": (
            <div className="">
                <h2 className="text-white text-3xl font-bold mb-4">{translations[language].individualsHeader}</h2>
                <p className="text-purple-300 ">
                    {translations[language].individuals}
                </p>
            </div>
        ),
        "Students": (
            <div>
                <h2 className="text-white text-3xl font-bold mb-4">LegalAI for students</h2>
                <p className="text-purple-300 ">
                    Students often encounter legal questions related to academic integrity, housing rights, and student loans. LegalAI can help students understand their rights in educational settings and provide insights into financial agreements. This ensures they are well-informed, enabling them to focus on their studies while being aware of their legal protections.
                </p>
            </div>
        ),
        "Workers": (
            <div>
                <h2 className="text-white text-3xl font-bold mb-4">LegalAI for workers</h2>
                <p className="text-purple-300 ">
                    Workers can benefit significantly from LegalAI when it comes to understanding their employment rights, such as wage disputes, workplace harassment, and benefits. This chatbot can help employees identify their rights and provide information on how to address workplace issues. With LegalAI, workers are empowered to stand up for themselves and seek justice in the workplace.
                </p>
            </div>
        ),
        "Immigrants": (
            <div>
                <h2 className="text-white text-3xl font-bold mb-4">LegalAI for immigrants</h2>
                <p className="text-purple-300 ">
                    For those navigating the complexities of immigration law, LegalAI can offer vital information on visas, green cards, and citizenship processes. It helps users understand the requirements and documents needed for their immigration journey, providing peace of mind during what can be a stressful and uncertain time.
                </p>
            </div>
        ),
        "Couples": (
            <div>
                <h2 className="text-white text-3xl font-bold mb-4">LegalAI for couples</h2>
                <p className="text-purple-300 ">
                    For couples, understanding legal implications in areas like marriage, divorce, and property rights is essential. LegalAI can provide guidance on prenuptial agreements, custody arrangements, and division of assets. This resource helps couples navigate their legal responsibilities and rights, fostering better communication and planning for their future together.
                </p>
            </div>
        ),
        "Businesses": (
            <div>
                <h2 className="text-white text-3xl font-bold mb-4">LegalAI for businesses</h2>
                <p className="text-purple-300 ">
                    For small business owners, LegalAI is an invaluable resource for understanding compliance, contracts, and employment law. It can answer common questions about business formation, licensing, and intellectual property, allowing entrepreneurs to focus on growing their businesses with confidence, knowing they have access to legal support when needed.
                </p>
            </div>
        ),
    };
    const [activeSection, setActiveSection] = useState("Individuals");
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
            <p className="text-lg text-purple-300 mb-8">
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
