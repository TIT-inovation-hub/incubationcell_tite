"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const featured = {
  name: "UPASTITHI",
  logo: "/upastithi.png",
  description:
    "Upastithi is an AI-powered attendance tracking solution that uses facial recognition and geolocation to ensure accurate, secure, and hassle-free attendance — even in offline or large-scale environments like classrooms, auditoriums, and conferences.",
  tags: [
    "AI Attendance",
    "Face Recognition",
    "Offline Ready",
    "Location Verified",
  ],
  studentName: "Akash Kumar & Aman Mishra",
};

const startups = [
  {
    name: "CYBERHX",
    logo: "/cyberhexlogo.png",
    description:
      "CyberHX is an online cybersecurity learning platform that provides hands-on training for aspiring ethical hackers. It offers interactive courses, real-world simulations, and expert-led modules to help learners build practical skills in cyber defense, penetration testing, and digital forensics.",
    tags: [
      "Cyber Security",
      "Ethical Hacking",
      "Online Learning",
      "Cyber Defense",
    ],
    studentName: "Kushagra Dwivedi",
  },
  {
    name: "NIVAAS",
    logo: "/nivaaslogo.png",
    description:
      "Nivaas is a smart hostel management system that connects students with the right accommodations and empowers admins to manage hostels efficiently. With features like real-time room updates, secure booking, and an intuitive dashboard, Nivaas makes hostel discovery and management seamless.",
    tags: ["HostelApp", "SmartHostel", "RoomFinder", "Admin Dashboard"],
    studentName: "Prakhar Shrivastav",
  },
  {
    name: "UPASTITHI",
    logo: "/upastithi.png",
    description:
      "Upastithi is an AI-powered attendance tracking solution that uses facial recognition and geolocation to ensure accurate, secure, and hassle-free attendance — even in offline or large-scale environments like classrooms, auditoriums, and conferences.",
    tags: [
      "AI Attendance",
      "Face Recognition",
      "Offline Ready",
      "Location Verified",
    ],
    studentName: "Akash Kumar & Aman Mishra",
  },
];

const projects = [
  {
    name: "IRM PORTAL",
    logo: "/irmlogo.png",
    description:
      "A smart incubation resource management platform that centralizes reports, task tracking, and attendance — enabling efficient allocation and monitoring of all incubation resources in one place.",
    tags: [
      "Resource Management",
      "Automation",
      "Task Tracking",
      "Incubation Platform",
    ],
    studentName: "Prakhar & Balaji Iyer",
  },
  {
    name: "INCUBATION WEBSITE",
    logo: "/logoincubation.png",
    description:
      "A smart platform empowering startups with mentorship, tracking, and digital collaboration.Apply, explore, and grow with everything about the incubation center in one place.",
    tags: [
      "Incubation Platform",
      "Startup Ecosystem",
      "Mentorship",
      "Innovation",
    ],
    studentName: "Keerti Bisen",
  },
];

const testimonials = [
  {
    quote:
      "The incubation support helped us refine our business model and secure our first round of funding.",
    founder: "Prakhar Shrivastav",
  },
  {
    quote:
      "What truly set this program apart was the mentorship — practical and deeply aligned with our mission.",
    founder: "Aman Mishra",
  },
  {
    quote:
      "The Innovation Cell helped me turn my rough idea into a real project. The mentors were super supportive and pushed me to think creatively.",
    founder: "Akash Kumar",
  },
  {
    quote:
      "Being part of the Innovation Cell boosted my confidence. I learned how to pitch, prototype, and work in a real startup-like environment.",
    founder: "Keerti Bisen",
  },
  {
    quote:
      "Working with students from different departments helped me explore perspectives outside my field. It’s an amazing collaborative space.",
    founder: "Amit Mehta",
  },
];

export default function OurProjectsPage() {
  return (
    <div className="px-4 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto space-y-20 sm:space-y-24">
      {/* Featured Section */}
      <section className="bg-amber-50 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-lg hover:shadow-xl space-y-6 md:flex md:items-center md:gap-10 md:space-y-0 transform-gpu">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto md:mx-0 rounded-2xl border shadow-md bg-white overflow-hidden">
          <Image
            src={featured.logo}
            alt={featured.name}
            fill
            className="object-cover"
          />
        </div>

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

          <p className="pt-4 text-sm font-medium text-amber-700">
            Created by{" "}
            <span className="font-semibold">{featured.studentName}</span>
          </p>
        </div>
      </section>

      {/* Our Startups Section */}
      <section className="space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center">
          Our Startups
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {startups.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px] border-amber-200 rounded-2xl bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Card className="border-0 shadow-none bg-transparent flex flex-col h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center flex-1 space-y-4 sm:space-y-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl border shadow overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>

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

                  <div className="mt-6 text-center border-t border-amber-100 pt-4">
                    <p className="text-sm font-medium text-amber-700">
                      Created by{" "}
                      <span className="font-semibold">
                        {project.studentName}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center">
          Our Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px] border-amber-200 rounded-2xl bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Card className="border-0 shadow-none bg-transparent flex flex-col h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center flex-1 space-y-4 sm:space-y-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl border shadow overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>

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

                  <div className="mt-6 text-center border-t border-amber-100 pt-4">
                    <p className="text-sm font-medium text-amber-700">
                      Created by{" "}
                      <span className="font-semibold">
                        {project.studentName}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transform-gpu"
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
