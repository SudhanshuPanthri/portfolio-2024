import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  );
}
