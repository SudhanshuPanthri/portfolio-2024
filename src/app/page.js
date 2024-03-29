import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Eyes from "@/components/Eyes";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Education />
      <Experience />
      <Eyes />
    </div>
  );
}
