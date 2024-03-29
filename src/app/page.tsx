import HeroSection from "@/components/HeroSection";
import ThemeSwitch from '../components/ThemeSwitch'
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex text-primary min-h-screen flex-col bg-[#121212]  dark:bg-[#eeeaea]  mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
