import { useState, useEffect } from 'react';
import { Loader } from './components/ui/Loader';
import { Nav } from './components/sections/Nav';
import { Intro } from './components/sections/Intro';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated delay for branding/loader impact
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main>
      <Nav />
      
      <section id="intro">
        <Intro />
      </section>
      
      <div className="divider-line" />
      
      <section id="about">
        <About />
      </section>
      
      <div className="divider-line" />
      
      <section id="services">
        <Services />
      </section>
      
      <div className="divider-line" />
      
      <section id="experience">
        <Experience />
      </section>
      
      <div className="divider-line" />
      
      {/* Newly added Testimonials section */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <div className="divider-line" />
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;