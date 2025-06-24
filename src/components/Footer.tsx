import { Youtube, Instagram, MessageCircle, Heart, ArrowUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@Giogioxii', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/giogioxii?igsh=YjFscjB1azIwdnJs&utm_source=qr', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://www.tiktok.com/@giogioxiiofficial?_t=ZN-8xRlO6lKp54&_r=1', label: 'TikTok' },
    { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-neon-yellow/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-gaming font-bold gradient-text">
              GIOGIOXII
            </h3>
            <p className="text-light-200 max-w-md">
              Content creator appassionato di gaming, tecnologia e innovazione. 
              Creo contenuti che ispirano e intrattengono la community italiana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-gaming text-light-100">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Content', 'Setup', 'Contatti'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`) || document.querySelector('#home');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-light-200 hover:text-neon-yellow transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-gaming text-light-100">Seguimi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 border border-neon-yellow/30 rounded-lg flex items-center justify-center text-light-200 hover:text-neon-yellow hover:border-neon-yellow/60 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-light-200">
              Rimani aggiornato sui nuovi video e progetti speciali!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row items-center gap-4 text-light-200 text-sm mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Giogioxii. Made with</span>
              <Heart className="h-4 w-4 text-neon-gold" />
              <span>for the gaming community</span>
            </div>
            <div className="flex items-center gap-2 text-neon-yellow/80">
              <Code className="h-4 w-4" />
              <span>Developed by Fixpu</span>
            </div>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-neon-yellow/30 text-neon-yellow hover:bg-neon-yellow hover:text-dark-900"
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
