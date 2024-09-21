import React, { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    const space = document.querySelector(".space");
    const numberOfStars = 300;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 1; 

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 4 + 2}s`;

      space.appendChild(star);
    }


    return () => {
      while (space.firstChild) {
        space.removeChild(space.firstChild);
      }
    };
  }, []);

  return <div className="space"></div>;
};

export default SpaceBackground;
