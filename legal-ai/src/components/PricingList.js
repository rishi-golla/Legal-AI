import { motion, useInView } from "framer-motion";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { useRef } from "react";

const PricingList = () => {
    // Ref to detect when the pricing section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 }); // Always trigger when 30% is visible

    // Animation variants
    const variants = {
        hiddenLeft: { opacity: 0, x: -200 },
        hiddenRight: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div ref={ref} className="flex gap-[1rem] max-lg:flex-wrap text-white">
            {pricing.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="w-[19rem] max-lg:w-full h-full fond-bolder px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                    // Use different animations for the left, middle, and right items
                    initial={
                        index === 0 ? "hiddenLeft" : index === 2 ? "hiddenRight" : "visible"
                    }
                    animate={isInView ? "visible" : "hiddenLeft"} // Revert to hidden when out of view
                    variants={variants}
                    transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                >
                    <h4 className="text-black font-bold text-[30px] mb-4">{item.title}</h4>
                    <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                    </p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                            <>
                                <div className="text-[30px]">$</div>
                                <div className="text-[5.5rem] leading-none font-bold ">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="w-full mb-6"
                        // href={item.price ? "/pricing" : "mailto:awslegalai@gmail.com"}
                        href={"mailto:awslegalai@gmail.com"}
                        white={!!item.price}
                    >
                        {item.price ? "Get started" : "Contact us"}
                    </Button>

                    <ul>
                        {item.features.map((feature, featureIndex) => (
                            <li
                                key={featureIndex}
                                className="flex items-start py-5 border-t border-n-6"
                            >
                                <img src={check} width={24} height={24} alt="Check" />
                                <p className="body-2 ml-4">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

export default PricingList;
