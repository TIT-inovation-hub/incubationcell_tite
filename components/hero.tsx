"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import AnimatedDots from "./AnimatedDots";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-500, 500], [15, -15]);
  const rotateY = useTransform(x, [-500, 500], [-15, 15]);

  useAnimationFrame(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = (window.innerWidth / 2 - window.innerWidth / 2) / 2;
    const my = (window.innerHeight / 2 - window.innerHeight / 2) / 2;
    x.set(mx);
    y.set(my);
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden md:pt-20 md:pb-20 px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF4E0] to-[#ffffff] dark:from-[#060606] dark:to-[#0B0B0B] transition-colors duration-700"
    >
      {/* === BACKGROUND TECH LAYERS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 🌈 Dynamic Energy Field (no glow) */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFB300]/25 via-transparent to-transparent"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-[conic-gradient(from_180deg,_#EF6C00_0%,_#00BCD4_60%,_#EF6C00_100%)] opacity-[0.12]"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* 🧠 Techy Circuits Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="circuitGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EF6C00" />
              <stop offset="100%" stopColor="#00BCD4" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1400,300"
            stroke="url(#circuitGlow)"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="2"
            fill="#FF9800"
            initial={{ cx: 0 }}
            animate={{ cx: [0, 1400, 0] }}
            cy="400"
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* ✨ Floating Dots / Subtle overlay */}
        <AnimatedDots />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-black/40 dark:via-black/10 backdrop-blur-[1px]" />

        {/* ⚡ Electric Flow Lines */}
        <div className="absolute top-[25%] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9800]/70 to-transparent animate-light-trail"></div>
        <div className="absolute bottom-[25%] right-0 w-full h-[1.5px] bg-gradient-to-l from-transparent via-[#00BCD4]/70 to-transparent animate-light-trail delay-700"></div>

        {/* 🪩 3D Gradient Halo Rings (clean lines) */}
        <motion.div
          style={{ perspective: 1000, rotateX, rotateY }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-[#00BCD4]/20 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-[#EF6C00]/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* === CONTENT === */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        style={{ rotateX, rotateY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block mb-10 px-4 sm:px-6 py-2 bg-gradient-to-r from-[#EF6C00]/20 to-[#00BCD4]/20 border border-[#EF6C00]/30 rounded-full backdrop-blur-sm"
        >
          <span className="text-md sm:text-md font-semibold text-[#EF6C00] dark:text-[#FFB300]">
            Welcome to Innovation Hub
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-gray-900 dark:text-white"
        >
          TIT Excellence{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6C00] via-[#FF9800] to-[#00BCD4] animate-gradient">
            Incubation Cell
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nurturing entrepreneurial minds and transforming ideas into impactful
          ventures. Empowering students to innovate, collaborate, and lead the
          future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#events"
            className="px-8 py-3 bg-gradient-to-r from-[#EF6C00] to-[#FF9800] text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            Explore Events
          </a>
          <a
            href="/ourprojects"
            className="px-8 py-3 border border-[#00BCD4] text-[#00BCD4] font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* === KEYFRAME ANIMATIONS === */}
      <style jsx global>{`
        @keyframes lightTrail {
          0% {
            transform: translateX(-100%);
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.4;
          }
        }
        .animate-light-trail {
          animation: lightTrail 8s linear infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0%;
          }
          50% {
            background-position: 100%;
          }
          100% {
            background-position: 0%;
          }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
