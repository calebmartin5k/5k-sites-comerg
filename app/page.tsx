import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Statement from '@/components/Statement';
import Applications from '@/components/Applications';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-brand-green selection:text-white bg-brand-dark">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <Statement />
        <Applications />
      </main>

      <Footer />
    </div>
  );
}
