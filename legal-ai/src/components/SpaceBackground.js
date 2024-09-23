import React, { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    const space = document.querySelector(".space");
    const numberOfStars = 300;

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 1;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;

      space.appendChild(star);
    }

    // Mouse move event to create parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const stars = document.querySelectorAll(".star");

      stars.forEach((star, index) => {
        const speed = index / 100; // Adjust speed based on star index
        const x = (window.innerWidth / 2 - clientX) * speed;
        const y = (window.innerHeight / 2 - clientY) * speed;

        star.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener and stars on unmount
    return () => {
      while (space.firstChild) {
        space.removeChild(space.firstChild);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="space"></div>;
};

export default SpaceBackground;
