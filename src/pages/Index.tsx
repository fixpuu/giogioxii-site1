import { useState, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import ContentSection from '@/components/ContentSection';
import SetupSection from '@/components/SetupSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className="min-h-screen text-white overflow-x-hidden"
        style={{ background: '#08090d', opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease 0.2s' }}
      >
        <Navigation />
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <AboutSection />
          <TimelineSection />
          <ContentSection />
          <SetupSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
