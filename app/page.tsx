"use client";
import Hero from "@/components/hero";
import About from "@/components/about";
import Mentors from "@/components/mentors";
import Coordinators from "@/components/coordinators";
import Events from "@/components/events";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mentors />
      <Coordinators />
      <Events />
    </>
  );
}
