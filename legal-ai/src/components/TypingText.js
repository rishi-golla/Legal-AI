import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 10); // Adjust speed (100ms per letter)

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
};

export default TypingText;
