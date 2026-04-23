"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/portfolio";

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const socialItems = [
  {
    label: "GitHub",
    href: "https://github.com/JBFaner",
    icon: <GitHubIcon />,
    username: "@JBFaner",
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: <LinkedInIcon />,
    username: "John Benedict Faner",
  },
  {
    label: "Email",
    href: `mailto:${socialLinks.email}`,
    icon: <EmailIcon />,
    username: socialLinks.email,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />

      {/* Background glow */}
      <div
        className="glow-blob w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-5xl mx-auto px-16">
        <AnimatedSection>
          <SectionHeading number="04" title="Contact" />
        </AnimatedSection>

        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">great together.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              className="text-base leading-8 mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m currently open to new opportunities — whether it&apos;s a freelance project,
              full-time role, or a startup idea. If it excites you, feel free to reach out.
            </p>
          </AnimatedSection>

          {/* Primary CTA */}
          <AnimatedSection delay={0.3}>
            <motion.a
              href={`mailto:${socialLinks.email}`}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px var(--accent-glow)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all mb-12"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 20px var(--accent-glow)",
              }}
            >
              <EmailIcon />
              Say Hello
            </motion.a>
          </AnimatedSection>

          {/* Social links */}
          <AnimatedSection delay={0.4}>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {socialItems.map(({ label, href, icon, username }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, borderColor: "rgba(124, 58, 237, 0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl w-full sm:w-auto transition-all"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: "var(--accent-light)" }}>{icon}</span>
                  <div className="text-left">
                    <p className="text-xs font-medium" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>
                      {label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
