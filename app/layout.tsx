import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Benedict Faner — Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of John Benedict Faner — a Full-Stack Developer & UI/UX Designer from the Philippines building enterprise web systems, POS platforms, and marketplace apps.",
  keywords: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Laravel",
    "Next.js",
    "Philippines",
    "John Benedict Faner",
    "JBFaner",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "John Benedict Faner", url: "https://github.com/JBFaner" }],
  openGraph: {
    title: "John Benedict Faner — Full-Stack Developer",
    description: "Building enterprise-grade web systems with clean architecture and polished UIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
