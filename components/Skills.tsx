"use client";

import { motion, type Variants } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Subtle section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-16">
        <AnimatedSection>
          <SectionHeading
            number="02"
            title="Skills"
            subtitle="Technologies I work with daily — from data layer to polished UI."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(124, 58, 237, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="h-full p-6 rounded-2xl flex flex-col gap-5"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "rgba(124, 58, 237, 0.12)" }}
                  >
                    {group.icon}
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skill items */}
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2.5"
                >
                  {group.items.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={itemVariants}
                      className="flex items-center gap-2.5"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent-light)" }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          color: "var(--text-secondary)",
                          fontFamily: "var(--font-jetbrains)",
                        }}
                      >
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom skills bar — visual flair */}
        <AnimatedSection delay={0.5}>
          <div
            className="mt-10 p-5 rounded-2xl flex flex-wrap items-center gap-3"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}
            >
              Also comfortable with →
            </span>
            {["Git", "GitHub Actions", "Postman", "VS Code", "Filmora", "CapCut", "Vercel", "Netlify"].map(
              (tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "var(--bg-surface)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
