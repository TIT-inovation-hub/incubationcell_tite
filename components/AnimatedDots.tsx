"use client";
import { useEffect, useState } from "react";

interface Dot {
  top: string;
  left: string;
  delay: string;
}

export default function AnimatedDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 35 }).map((_, i) => ({
      top: `${10 + Math.random() * 80}%`,
      left: `${5 + Math.random() * 90}%`,
      delay: `${i * 0.4}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <>
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-[5px] h-[5px] bg-cyan-300 rounded-full opacity-90 shadow-[0_0_12px_#22d3ee] animate-float"
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        ></div>
      ))}
    </>
  );
}
