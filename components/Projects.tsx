"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

/* ── Icons ─────────────────────────────────────────────── */
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Project Modal ──────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      >
        {/* Modal panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg transition-colors"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "var(--text-secondary)",
            }}
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {/* Image */}
          <div className="w-full overflow-hidden" style={{ maxHeight: "380px" }}>
            <Image
              src={project.image!}
              alt={project.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              style={{ objectFit: "cover", maxHeight: "380px" }}
            />
          </div>

          {/* Content */}
          <div className="p-7">
            {/* Label row */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}
              >
                Featured Project
              </span>
              {project.isPrivate && (
                <span
                  className="flex items-center gap-1 text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  <LockIcon /> Private
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h3>

            <p className="text-sm leading-7 mb-6" style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    color: "var(--accent-light)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px var(--accent-glow)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  <ExternalIcon size={15} />
                  {project.demoLabel ?? "Demo"}
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                    background: "transparent",
                  }}
                >
                  <GitHubIcon size={15} />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Component ─────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-16">
        <AnimatedSection>
          <SectionHeading
            number="03"
            title="Projects"
            subtitle="Things I've built — from enterprise systems to academic platforms."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <AnimatedSection key={project.title} delay={0.1}>
                {/* Desktop layout */}
                <div className="relative hidden md:grid grid-cols-12 items-center">

                  {/* Image — col-span-7, clickable */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelected(project)}
                    className={`col-span-7 relative rounded-xl overflow-hidden cursor-pointer group ${
                      isEven ? "col-start-6" : "col-start-1"
                    }`}
                    style={{ gridRow: 1 }}
                  >
                    {/* Dim overlay — lightens on hover to invite click */}
                    <div
                      className="absolute inset-0 z-10 rounded-xl transition-opacity duration-300 group-hover:opacity-0"
                      style={{ background: "rgba(13,13,20,0.35)" }}
                    />
                    {/* Click hint */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
                        style={{
                          background: "rgba(124,58,237,0.85)",
                          color: "#fff",
                          fontFamily: "var(--font-jetbrains)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        View Details
                      </span>
                    </div>
                    <Image
                      src={project.image!}
                      alt={`${project.title} screenshot`}
                      width={900}
                      height={540}
                      className="w-full h-auto object-cover rounded-xl"
                      style={{ maxHeight: "360px", objectFit: "cover", filter: "brightness(0.9)" }}
                    />
                  </motion.div>

                  {/* Content — col-span-6, overlaps by -mr-12 / -ml-12 only */}
                  <div
                    className={`col-span-6 z-20 flex flex-col gap-4 ${
                      isEven
                        ? "col-start-1 items-start text-left"
                        : "col-start-7 items-end text-right"
                    }`}
                    style={{ gridRow: 1 }}
                  >
                    <div className={`flex items-center gap-2 ${isEven ? "" : "flex-row-reverse"}`}>
                      <span
                        className="text-xs font-medium tracking-widest uppercase"
                        style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}
                      >
                        Featured Project
                      </span>
                      {project.isPrivate && (
                        <span
                          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border-subtle)",
                            fontFamily: "var(--font-jetbrains)",
                          }}
                        >
                          <LockIcon /> Private
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>

                    {/* Description card — reduced overlap to -mr-12 / -ml-12 */}
                    <div
                      className={`relative z-10 p-5 rounded-xl shadow-2xl ${
                        isEven ? "-mr-12" : "-ml-12"
                      }`}
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    >
                      <p className="text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-x-3 gap-y-1 ${isEven ? "" : "justify-end"}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs"
                          style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {(project.github || project.demo) && (
                      <div className={`flex items-center gap-4 ${isEven ? "" : "flex-row-reverse"}`}>
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ y: -2, color: "var(--accent-light)" }}
                            className="transition-colors"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <GitHubIcon />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                            whileHover={{ y: -2, color: "var(--accent-light)" }}
                            className="transition-colors"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <ExternalIcon />
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile: stacked card */}
                <div
                  className="md:hidden rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                  onClick={() => setSelected(project)}
                >
                  {project.image && (
                    <div className="relative w-full overflow-hidden" style={{ maxHeight: "200px" }}>
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={800}
                        height={400}
                        className="w-full object-cover"
                        style={{ height: "200px", objectFit: "cover", filter: "brightness(0.8)" }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}>
                      Featured Project
                    </p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 mb-4" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs" style={{ color: "var(--accent-light)", fontFamily: "var(--font-jetbrains)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 text-center">
            <motion.a
              href="https://github.com/JBFaner"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)", background: "transparent" }}
            >
              <GitHubIcon /> View more on GitHub
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
