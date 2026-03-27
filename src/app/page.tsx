import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsGallery from "@/components/ProjectsGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-white selection:bg-copper-500 selection:text-white pb-0">
      <Navbar />
      <Hero />
      <Services />
      <ProjectsGallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
