export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/JBFaner",
  linkedin: "https://www.linkedin.com/in/jbfaner/",
  email: "jbfaner8@gmail.com",
  facebook: "https://www.facebook.com/jbfaner7/",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Blade"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Laravel", "PHP", "Node.js", "REST APIs", "Spatie"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MySQL", "MariaDB", "HeidiSQL", "Database Design"],
  },
  {
    category: "Design & Tools",
    icon: "🎨",
    items: ["Figma", "Canva", "Photoshop", "Git", "GitHub", "Vercel"],
  },
];

export const projects = [
  {
    featured: true,
    title: "Honor POS & Inventory System",
    description:
      "Enterprise-grade Point of Sale and Inventory Management System for Honor, a multi-branch retail business. Full sales workflow, real-time inventory, interactive Philippines store map, shift-based reports, and PayMongo integration.",
    tags: ["Laravel", "PHP", "MySQL", "amCharts 5", "PayMongo", "Spatie"],
    github: null,
    demo: "https://github.com/JBFaner/JBFaner/blob/main/screenshots/honor1.jpg",
    demoLabel: "Screenshots",
    isPrivate: true,
    image: "/images/projects/honorInvdesign.png",
  },
  {
    featured: true,
    title: "Stronghold Point of Sale System",
    description:
      "A touchscreen-optimized POS system designed for fast retail environments. Features a category-based product grid, real-time cart management, receipt generation, and a clean cashier-focused dark UI.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "PHP"],
    github: null,
    demo: null,
    demoLabel: null,
    isPrivate: true,
    image: "/images/projects/strongholdPOSdesign.png",
  },
  {
    featured: true,
    title: "Kyusify — Student Enterprise Platform",
    description:
      "A centralized marketplace for QCU student enterprises. Multi-store storefronts, real-time in-store live chat, product discovery, admin portal with content moderation, and store ratings.",
    tags: ["Laravel", "Blade", "MySQL", "PHP", "Real-time Chat"],
    github: "https://github.com/JBFaner/Kyusify---Student-Enterprise-Platform",
    demo: "https://kyusify-student-enterprise-platform.onrender.com/",
    demoLabel: "Live Demo",
    isPrivate: false,
    image: "/images/projects/kyusifydesign.png",
  },
  {
    featured: true,
    title: "LGU Disaster Training Simulation",
    description:
      "An LGU web app for disaster preparedness drills. Handles training module management, simulation scheduling, participant attendance, scoring, certification issuance, and role-based access for admins, Barangay staff, and participants.",
    tags: ["JavaScript", "PHP", "MySQL", "Role-based Access"],
    github: "https://github.com/JBFaner/Disaster-Training-Simulation",
    demo: "https://disaster-training.alertaraqc.com/",
    demoLabel: "Live Demo",
    isPrivate: false,
    image: "/images/projects/alertaradesign.png",
  },
];

export const aboutText = [
  "I'm a BS Information Technology student from the Philippines, specializing in Information Management.",
  "I build full-stack systems — from enterprise POS platforms to student marketplaces — with clean UIs and solid architecture underneath.",
];
