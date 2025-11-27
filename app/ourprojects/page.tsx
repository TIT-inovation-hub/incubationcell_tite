"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

// SEO‑friendly metadata component
const SEO = () => (
  <Head>
    <title>Our Projects | Innovation Cell</title>
    <meta
      name="description"
      content="Explore featured startups, innovative projects, and founder testimonials from the Innovation Cell. Discover AI, cybersecurity, hostel management, incubation platforms, and more."
    />
    <meta
      name="keywords"
      content="Startups, Projects, Innovation, Incubation Center, AI, Cybersecurity, Hostel Management"
    />
    <meta name="author" content="Innovation Cell" />
    <meta property="og:title" content="Our Projects | Innovation Cell" />
    <meta
      property="og:description"
      content="Discover the startups and tech innovations built by our students — featuring AI attendance systems, cybersecurity platforms, smart hostel apps, and incubation tools."
    />
    <meta property="og:type" content="website" />
  </Head>
);

const featured = {
  name: "UPASTITHI",
  logo: "/upastithi.png",
  description:
    "Upastithi is an AI‑powered attendance tracking solution that uses facial recognition and geolocation to ensure accurate, secure, and hassle‑free attendance — even in offline or large‑scale environments like classrooms, auditoriums, and conferences.",
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
      "CyberHX is an online cybersecurity learning platform that provides hands‑on training for aspiring ethical hackers. It offers interactive courses, real‑world simulations, and expert‑led modules.",
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
      "Nivaas is a smart hostel management system offering real‑time room updates, secure booking, and an intuitive dashboard for seamless management.",
    tags: ["HostelApp", "SmartHostel", "RoomFinder", "Admin Dashboard"],
    studentName: "Prakhar Shrivastav",
  },
  featured,
];

const projects = [
  {
    name: "IRM PORTAL",
    logo: "/irmlogo.png",
    description:
      "A smart incubation resource management platform that centralizes reports, task tracking, and attendance for efficient monitoring.",
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
      "A smart platform empowering startups with mentorship, task tracking, and digital collaboration for innovation.",
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
      "The incubation support helped us refine our business model and secure funding.",
    founder: "Prakhar Shrivastav",
  },
  {
    quote:
      "The mentorship was practical and perfectly aligned with our mission.",
    founder: "Aman Mishra",
  },
  {
    quote: "The Innovation Cell helped me turn my idea into a working project.",
    founder: "Akash Kumar",
  },
  {
    quote: "I learned how to pitch, prototype, and work like a real startup.",
    founder: "Keerti Bisen",
  },
  {
    quote:
      "Collaboration with students from other departments was eye‑opening.",
    founder: "Amit Mehta",
  },
];

export default function OurProjectsPage() {
  return (
    <>
      <SEO />
      <div className="px-4 sm:px-6 py-14 sm:py-20 max-w-7xl mx-auto space-y-20 sm:space-y-24">
        {/* Featured Section */}
        <section className="bg-amber-50 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-lg hover:shadow-xl space-y-6 md:flex md:items-center md:gap-10 md:space-y-0 transform-gpu">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto md:mx-0 rounded-2xl border shadow-md bg-white overflow-hidden">
            <Image
              src={featured.logo}
              alt={`${featured.name} logo`}
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
                          alt={`${project.name} logo`}
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
                          alt={`${project.name} logo`}
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
    </>
  );
}
