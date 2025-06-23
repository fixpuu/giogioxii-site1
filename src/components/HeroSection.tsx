
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Play, Gamepad2, Code, Zap } from 'lucide-react';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Creator', 'Gamer', 'Innovator', 'Storyteller'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-gaming font-black mb-4">
            <span className="gradient-text glow-text">GIOGIOXII</span>
          </h1>
          <div className="text-2xl md:text-4xl font-tech font-medium text-gray-300 mb-6">
            Digital{' '}
            <span className="inline-block min-w-[200px] text-left">
              <span className="gradient-text font-bold transition-all duration-500">
                {words[currentWord]}
              </span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-delay leading-relaxed">
          Benvenuto nel mio universo digitale! Sono un content creator appassionato di gaming, 
          tecnologia e innovazione. Creo contenuti che ispirano, intrattengono e connettono 
          la community gaming italiana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-purple/50"
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
          >
            <Youtube className="mr-2 h-6 w-6" />
            Visita il Canale
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 font-gaming px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://www.youtube.com/@Giogioxii/videos', '_blank')}
          >
            <Play className="mr-2 h-6 w-6" />
            Guarda i Video
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-delay">
          <div className="bg-dark-800/50 backdrop-blur-sm border border-neon-purple/30 rounded-xl p-6 card-glow">
            <div className="flex items-center justify-center mb-3">
              <Youtube className="h-8 w-8 text-neon-purple" />
            </div>
            <div className="text-2xl font-gaming font-bold gradient-text">1K+</div>
            <div className="text-sm text-gray-400">Subscribers</div>
          </div>
          <div className="bg-dark-800/50 backdrop-blur-sm border border-neon-pink/30 rounded-xl p-6 card-glow">
            <div className="flex items-center justify-center mb-3">
              <Play className="h-8 w-8 text-neon-pink" />
            </div>
            <div className="text-2xl font-gaming font-bold gradient-text">50+</div>
            <div className="text-sm text-gray-400">Video</div>
          </div>
          <div className="bg-dark-800/50 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-6 card-glow">
            <div className="flex items-center justify-center mb-3">
              <Gamepad2 className="h-8 w-8 text-neon-blue" />
            </div>
            <div className="text-2xl font-gaming font-bold gradient-text">100+</div>
            <div className="text-sm text-gray-400">Ore Gaming</div>
          </div>
          <div className="bg-dark-800/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl p-6 card-glow">
            <div className="flex items-center justify-center mb-3">
              <Zap className="h-8 w-8 text-neon-cyan" />
            </div>
            <div className="text-2xl font-gaming font-bold gradient-text">∞</div>
            <div className="text-sm text-gray-400">Creatività</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
