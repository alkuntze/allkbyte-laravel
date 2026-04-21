import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specialties } from "@/components/site/Specialties";
import { Services } from "@/components/site/Services";
import { Stack } from "@/components/site/Stack";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Services />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
