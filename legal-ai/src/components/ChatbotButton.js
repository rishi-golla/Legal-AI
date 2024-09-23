"use client";
import { useState, useRef, useEffect } from "react";


import icon1 from "./icons/1.png";
import icon2 from "./icons/2.png";
// import icon3 from "./icons/3.png";
// import icon4 from "./icons/4.png";


const ChatbotButton = ({setActiveSection}) => {

    const [iconSrc, setIconSrc] = useState(icon1);
    const images = [icon1, icon2];

    useEffect(() => {
        const interval = setInterval(() => {
            setIconSrc((prevSrc) => {
                const currentIndex = images.indexOf(prevSrc);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 500);

        return () => clearInterval(interval); // Cleanup interval on component unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="fixed z-20 bottom-4 right-4">
                <div>
                    <img
                        src={iconSrc}
                        alt="icon"
                        width={64}
                        height={64}
                        quality={100}
                        className="w-auto h-auto cursor-pointer float-right"
                        onClick={() => setActiveSection("questions")}
                    />
                </div>
            
        </div>
    );
};

export default ChatbotButton;