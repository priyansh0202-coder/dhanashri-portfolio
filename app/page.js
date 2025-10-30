import AboutSection from "@/components/About";
import HeroAnimation from "@/components/Herosection";
import ProjectsSection from "@/components/Projects";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroAnimation  />
      <ProjectsSection  />
      <AboutSection />
      <Footer />
    </div>
  );
}
