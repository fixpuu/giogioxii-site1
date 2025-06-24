
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Eye, Video, ExternalLink, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '260+', label: 'Iscritti' },
    { icon: Video, value: '500+', label: 'Video' },
    { icon: Eye, value: '110K+', label: 'Views nel 2025' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-neon-yellow/30 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-neon-yellow/50 text-neon-yellow bg-neon-yellow/10 backdrop-blur-sm px-4 py-2 text-sm font-gaming">
            🎮 Content Creator Italiano
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-gaming font-bold mb-6 leading-tight">
            <span className="gradient-text">GIOGIOXII</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-light-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Gaming, tecnologia e contenuti che ispirano. 
            <br className="hidden md:block" />
            Benvenuto nella mia community digitale!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <stat.icon className="h-8 w-8 text-neon-yellow mb-2" />
                  <div className="text-2xl md:text-3xl font-gaming font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-yellow to-neon-gold hover:from-neon-gold hover:to-neon-yellow text-dark-900 font-gaming px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-neon"
              onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
            >
              <Play className="mr-2 h-6 w-6" />
              Guarda i Video
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-dark-900 font-gaming px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://discord.gg/9T9zbyp8', '_blank')}
            >
              <Users className="mr-2 h-6 w-6" />
              Unisciti alla Community
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-neon-yellow hover:text-neon-gold transition-colors duration-300"
            aria-label="Scorri verso il basso"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
          <p className="text-sm text-light-200 mt-2">Scopri di più</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
