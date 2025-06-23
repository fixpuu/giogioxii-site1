
import { Youtube, Instagram, Twitter, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@Giogioxii', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-neon-purple/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-gaming font-bold gradient-text">
              GIOGIOXII
            </h3>
            <p className="text-gray-400 max-w-md">
              Content creator appassionato di gaming, tecnologia e innovazione. 
              Creo contenuti che ispirano e intrattengono la community italiana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-gaming text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Content', 'Setup', 'Contatti'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`) || document.querySelector('#home');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-neon-purple transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-gaming text-white">Seguimi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 border border-neon-purple/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-purple hover:border-neon-purple/60 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Rimani aggiornato sui nuovi video e progetti speciali!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dark-700">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Giogioxii. Made with</span>
            <Heart className="h-4 w-4 text-neon-pink" />
            <span>for the gaming community</span>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-white"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Torna su
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
