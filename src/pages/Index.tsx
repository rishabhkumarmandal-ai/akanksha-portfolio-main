
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Glimpses from '@/components/Glimpses';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen sparkle-cursor">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Glimpses />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
