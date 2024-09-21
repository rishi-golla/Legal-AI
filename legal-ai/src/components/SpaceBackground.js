// src/components/SpaceBackground.js
import React, { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    const space = document.querySelector(".space");
    const numberOfStars = 150; // You can adjust this for more or fewer stars

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 3 + 1; // Random size for stars

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Position stars randomly within the viewport
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Flicker at different speeds

      space.appendChild(star);
    }

    // Cleanup when the component is unmounted
    return () => {
      while (space.firstChild) {
        space.removeChild(space.firstChild);
      }
    };
  }, []);

  return <div className="space"></div>;
};

export default SpaceBackground;
