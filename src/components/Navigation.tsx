
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Youtube, Home, User, Monitor, Gamepad2, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Content', href: '#content', icon: Monitor },
    { name: 'Setup', href: '#setup', icon: Gamepad2 },
    { name: 'Contatti', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) || document.querySelector('#home');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-purple/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-gaming font-bold gradient-text">
              GIOGIOXII
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors duration-300 font-gaming"
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </button>
            ))}
            <Button 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming px-6"
              onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
            >
              <Youtube className="mr-2 h-4 w-4" />
              YouTube
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-neon-purple"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-dark-900/95 backdrop-blur-md border border-neon-purple/30 rounded-b-xl mx-4">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-3 w-full text-left text-gray-400 hover:text-neon-purple transition-colors duration-300 font-gaming py-2"
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </button>
              ))}
              <Button 
                className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming mt-4"
                onClick={() => {
                  window.open('https://www.youtube.com/@Giogioxii', '_blank');
                  setIsOpen(false);
                }}
              >
                <Youtube className="mr-2 h-4 w-4" />
                Visita YouTube
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
