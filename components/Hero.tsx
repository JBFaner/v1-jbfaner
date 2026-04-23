"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

const codeLines = [
  { token: "const", color: "#a78bfa" },
  { token: " JohnBenedict", color: "#f1f0ff" },
  { token: " = {", color: "#8b8ba7" },
  { token: "  role:", color: "#8b8ba7" },
  { token: ' "Full-Stack Developer",', color: "#86efac" },
  { token: "  passion:", color: "#8b8ba7" },
  { token: ' "Clean UIs + Scalable APIs",', color: "#86efac" },
  { token: "  location:", color: "#8b8ba7" },
  { token: ' "Philippines 🇵🇭",', color: "#86efac" },
  { token: "  open:", color: "#8b8ba7" },
  { token: " true,", color: "#f97316" },
  { token: "};", color: "#8b8ba7" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow blobs */}
      <div
        className="glow-blob w-96 h-96 top-20 -left-32 opacity-30"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="glow-blob w-64 h-64 bottom-32 right-0 opacity-20"
        style={{ background: "#4338ca" }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{
              color: "var(--accent-light)",
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            👋 Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-3"
          >
            <span className="gradient-text">John Benedict</span>
            <br />
            <span style={{ color: "var(--text-secondary)" }}>Faner.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl font-semibold mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Full-Stack Developer &amp; UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-base max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            I build enterprise-grade web systems — from POS platforms to student
            marketplaces — with clean architecture and polished UIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px var(--accent-glow)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 16px var(--accent-glow)",
              }}
            >
              View My Work →
            </motion.a>

            <motion.a
              href={`mailto:${socialLinks.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex gap-5 mt-10 justify-center lg:justify-start"
          >
            {[
              { label: "GitHub", href: socialLinks.github, icon: "GH" },
              { label: "LinkedIn", href: socialLinks.linkedin, icon: "LI" },
              { label: "Email", href: `mailto:${socialLinks.email}`, icon: "@" },
            ].map(({ label, href, icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "var(--accent-light)" }}
                className="text-xs font-medium transition-colors flex items-center gap-1.5"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                <span
                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  {icon}
                </span>
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Animated code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 w-full max-w-md lg:max-w-sm xl:max-w-md hidden lg:block"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(124, 58, 237, 0.12), 0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span
                className="ml-2 text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}
              >
                portfolio.ts
              </span>
            </div>

            {/* Code lines */}
            <div className="p-5 space-y-1" style={{ fontFamily: "var(--font-jetbrains)" }}>
              {codeLines.map(({ token, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.06 }}
                  className="text-sm"
                  style={{ color }}
                >
                  <span style={{ color: "var(--text-muted)", userSelect: "none", marginRight: "16px", fontSize: "11px" }}>
                    {String(i + 1).padStart(2, " ")}
                  </span>
                  {token}
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="inline-block w-2 h-4 ml-16 -mb-0.5 align-middle"
                style={{ background: "var(--accent-light)" }}
              />
            </div>
          </div>


        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--accent-light), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
