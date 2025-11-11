// Updated fully responsive version

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const featured = {
  name: "SolarBloom",
  logo: "https://via.placeholder.com/120",
  description:
    "SolarBloom is developing affordable solar-powered irrigation kits for small-scale farmers, helping increase crop yields while reducing reliance on fossil fuels.",
  tags: ["Sustainability", "Agriculture", "Clean Energy"],
};

const projects = [
  {
    name: "LearnAI",
    logo: "https://via.placeholder.com/120",
    description:
      "LearnAI is a personalized learning platform that uses adaptive AI-driven tutoring to improve student outcomes in remote and underserved areas.",
    tags: ["EdTech", "AI"],
    link: "#",
  },
  {
    name: "HealthTrack",
    logo: "https://via.placeholder.com/120",
    description:
      "HealthTrack provides community clinics with simple, offline-friendly patient record systems, increasing efficiency and continuity of care.",
    tags: ["HealthTech", "Nonprofit"],
    link: "#",
  },
  {
    name: "AquaRise",
    logo: "https://via.placeholder.com/120",
    description:
      "AquaRise builds low-cost water purification kiosks powered by renewable energy for rural and peri-urban communities.",
    tags: ["Sustainability", "Water", "CleanTech"],
    link: "#",
  },
];

const testimonials = [
  {
    quote:
      "The incubation support helped us refine our business model and secure our first round of funding.",
    founder: "Ayesha Khan, Founder of LearnAI",
  },
  {
    quote:
      "What truly set this program apart was the mentorship — practical and deeply aligned with our mission.",
    founder: "Ravi Patel, Co-Founder of SolarBloom",
  },
];

export default function OurProjectsPage() {
  return (
    <div className="px-4 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto space-y-20 sm:space-y-24">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-black">
          Our Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          A showcase of the founders and ideas we’ve supported on their journey
          to meaningful impact.
        </p>
      </div>

      {/* Featured Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-sm space-y-6 md:flex md:items-center md:gap-10 md:space-y-0"
      >
        <img
          src={featured.logo}
          alt={featured.name}
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl border shadow-md bg-white mx-auto md:mx-0"
        />
        <div className="space-y-3 sm:space-y-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-700">
            Featured Startup of the Month
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {featured.name}
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            {featured.description}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 pt-1">
            {featured.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-white border border-amber-200 rounded-full text-amber-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center">
          Our Startups
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-amber-200 hover:shadow-xl transition rounded-2xl bg-white flex flex-col h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center flex-1 space-y-4 sm:space-y-6">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border shadow"
                    />

                    <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-900">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {project.description}
                    </p>

                    <div className="flex justify-center flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-amber-50 border border-amber-200 rounded-full text-amber-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-4 sm:mt-6 border-amber-300 text-amber-700 hover:bg-amber-100"
                    >
                      <a href={project.link}>Read More</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center">
          Founder Testimonials
        </h2>
        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-2xl shadow-sm"
            >
              <p className="italic text-gray-800 leading-relaxed text-base sm:text-lg">
                “{item.quote}”
              </p>
              <footer className="mt-4 sm:mt-6 font-semibold text-gray-900 text-right text-sm sm:text-base">
                — {item.founder}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
