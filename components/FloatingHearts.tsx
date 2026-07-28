"use client";

import { useEffect, useState } from "react";

type Heart = {
  id: number;
  x: number;
  y: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = (e: MouseEvent) => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) =>
          prev.filter((h) => h.id !== heart.id)
        );
      }, 1500);
    };

    window.addEventListener("click", createHeart);

    return () => {
      window.removeEventListener("click", createHeart);
    };
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            left: heart.x,
            top: heart.y,
          }}
          className="fixed pointer-events-none z-[9999] animate-heart text-3xl"
        >
          ❤️
        </div>
      ))}
    </>
  );
}
