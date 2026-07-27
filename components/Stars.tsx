"use client";

import { useEffect, useState } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 120 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 5 + 2,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[220px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[180px]" />

      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
