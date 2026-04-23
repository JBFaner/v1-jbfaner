"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const bio = [
  "I'm a BS Information Technology student from the Philippines, specializing in Information Management.",
  <>
    I&apos;ve had the opportunity to apply as an intern at{" "}
    <a
      href="https://www.honor.com/ph/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium transition-colors hover:underline"
      style={{ color: "var(--accent-light)" }}
    >
      Honor PH
    </a>
    , and my team and I developed and deployed a custom Point of Sale system for{" "}
    <a
      href="https://www.stronghold.ph/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium transition-colors hover:underline"
      style={{ color: "var(--accent-light)" }}
    >
      Stronghold
    </a>
    .
  </>,
  "I build full-stack systems — from enterprise POS platforms to student marketplaces — with clean UIs and solid architecture underneath.",
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-16">
        <AnimatedSection>
          <SectionHeading
            number="01"
            title="About"
            subtitle="A little about who I am and what drives me."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Text (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            {bio.map((paragraph, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <p className="text-base leading-8" style={{ color: "var(--text-secondary)" }}>
                  {paragraph}
                </p>
              </AnimatedSection>
            ))}

            {/* Open to work */}
            <AnimatedSection delay={0.35}>
              <div className="flex items-center gap-2 pt-1">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#4ade80" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#4ade80", fontFamily: "var(--font-jetbrains)" }}
                >
                  Open to opportunities
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Photo only (2 cols) */}
          <AnimatedSection direction="right" delay={0.25} className="lg:col-span-2">
            <div className="relative group">
              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 0 1px var(--border)" }}
              >
                {/* Violet overlay tint */}
                <div
                  className="absolute inset-0 z-10 rounded-2xl opacity-30 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "var(--accent)",
                    mixBlendMode: "multiply",
                  }}
                />
                <Image
                  src="/images/projects/pic.jpg"
                  alt="John Benedict Faner"
                  width={480}
                  height={560}
                  className="w-full h-auto object-cover"
                  style={{ filter: "grayscale(20%)" }}
                />
              </motion.div>

              {/* Decorative offset box */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10 transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3"
                style={{ border: "2px solid var(--accent)" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
