"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQPage() {
  return (
    <div className="px-4 md:px-6 py-16 md:py-24 max-w-5xl mx-auto space-y-12 md:space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Everything you need to know about our incubation program.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 md:space-y-10"
      >
        {/* GENERAL QUERIES */}
        <Accordion
          type="single"
          collapsible
          className="bg-orange-50 border border-orange-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm"
        >
          <AccordionItem value="general" className="border-none">
            <AccordionTrigger className="text-lg md:text-xl font-semibold text-orange-700">
              General Queries
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed pt-3 md:pt-4">
              <p>
                <strong>What is an incubation cell?</strong>
                <br />
                An incubation cell supports new founders by offering mentorship,
                strategy guidance, workspace access, training, and networking
                opportunities.
              </p>

              <p>
                <strong>Who can join the incubation program?</strong>
                <br />
                Anyone working on an impactful idea or early-stage startup.
              </p>

              <p>
                <strong>Does my startup need to be fully developed?</strong>
                <br />
                No — we accept both idea-stage and early concept projects.
              </p>

              <p>
                <strong>Is there a fee to join?</strong>
                <br />
                No. The program is free and impact-driven.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* APPLICATION PROCESS */}
        <Accordion
          type="single"
          collapsible
          className="bg-orange-50 border border-orange-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm"
        >
          <AccordionItem value="application" className="border-none">
            <AccordionTrigger className="text-lg md:text-xl font-semibold text-orange-700">
              Application Process
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed pt-3 md:pt-4">
              <p>
                <strong>How do I apply?</strong>
                <br />
                Fill out the online application form.
              </p>

              <p>
                <strong>What happens after applying?</strong>
                <br />
                You may be invited for a short interview.
              </p>

              <p>
                <strong>Can I apply as an individual?</strong>
                <br />
                Yes — solo founders are welcome.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* FUNDING & SUPPORT */}
        <Accordion
          type="single"
          collapsible
          className="bg-orange-50 border border-orange-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm"
        >
          <AccordionItem value="funding" className="border-none">
            <AccordionTrigger className="text-lg md:text-xl font-semibold text-orange-700">
              Funding & Support
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed pt-3 md:pt-4">
              <p>
                <strong>Do you provide funding?</strong>
                <br />
                We connect startups with grants and early-stage investors.
              </p>

              <p>
                <strong>Do you take equity?</strong>
                <br />
                No — the incubation is equity-free.
              </p>

              <p>
                <strong>What kind of support is provided?</strong>
                <br />
                Workspace, mentorship, strategy, prototyping help & pitch prep.
              </p>

              <p>
                <strong>Do you help with investor pitching?</strong>
                <br />
                Yes — including personalized pitch coaching.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* MENTORSHIP & NETWORKING */}
        <Accordion
          type="single"
          collapsible
          className="bg-orange-50 border border-orange-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm"
        >
          <AccordionItem value="mentorship" className="border-none">
            <AccordionTrigger className="text-lg md:text-xl font-semibold text-orange-700">
              Mentorship & Networking
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed pt-3 md:pt-4">
              <p>
                <strong>Who are the mentors?</strong>
                <br />
                Experienced founders, domain experts, and industry leaders.
              </p>

              <p>
                <strong>How frequent are sessions?</strong>
                <br />
                Weekly mentorship + optional 1:1 support.
              </p>

              <p>
                <strong>Are networking events included?</strong>
                <br />
                Yes — demo days, guest lectures, and partner networking.
              </p>

              <p>
                <strong>Is support available after graduation?</strong>
                <br />
                Yes — you join our lifelong alumni network.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
