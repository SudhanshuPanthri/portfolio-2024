"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Eyes from "@/components/Eyes";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  // const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Education />
      <Experience />
      <Eyes />
      <Projects />
      <Footer />
    </div>
  );
}
