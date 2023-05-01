import { Inter } from "next/font/google";

import Heading from "@/components/Heading";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Heading />
      <main className={`${inter.variable} font-sans`}>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <AboutUs />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
