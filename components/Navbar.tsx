"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(13, 13, 20, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — real photo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
            style={{ boxShadow: "0 0 0 2px var(--accent), 0 0 20px var(--accent-glow)" }}
            aria-label="Back to top"
          >
            <Image
              src="/images/projects/pic.jpg"
              alt="JB"
              fill
              className="object-cover"
              sizes="40px"
            />
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ name, href }, i) => (
              <motion.button
                key={name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                onClick={() => handleNav(href)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: activeSection === href.slice(1)
                    ? "var(--accent-light)"
                    : "var(--text-secondary)",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                <span
                  className="text-xs mr-1.5"
                  style={{ color: "var(--accent-light)", opacity: 0.7 }}
                >
                  0{i + 1}.
                </span>
                {name}
                {activeSection === href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(124, 58, 237, 0.1)" }}
                  />
                )}
              </motion.button>
            ))}

            {/* Resume button */}
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px var(--accent-glow)" }}
              whileTap={{ scale: 0.97 }}
              className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg border transition-all"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent-light)",
                background: "transparent",
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "var(--text-primary)" }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(13,13,20,0.6)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col md:hidden"
              style={{
                background: "var(--bg-surface)",
                borderLeft: "1px solid var(--border)",
              }}
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-6">
                {navLinks.map(({ name, href }, i) => (
                  <motion.button
                    key={name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => handleNav(href)}
                    className="text-left py-4 text-lg font-medium border-b"
                    style={{
                      color: "var(--text-primary)",
                      borderColor: "var(--border-subtle)",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    <span className="text-sm mr-3" style={{ color: "var(--accent-light)" }}>
                      0{i + 1}.
                    </span>
                    {name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                  className="mt-6 text-center py-3 rounded-lg font-semibold text-sm"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  Hire Me
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
