import { Youtube, Instagram, MessageCircle, ArrowUp, Code } from 'lucide-react';

const SOCIALS = [
  { icon: Youtube, href: 'https://www.youtube.com/@Giogioxii', label: 'YouTube', color: '#FF0000' },
  { icon: Instagram, href: 'https://www.instagram.com/giogioxii?igsh=YjFscjB1azIwdnJs&utm_source=qr', label: 'Instagram', color: '#E1306C' },
  { icon: MessageCircle, href: 'https://www.tiktok.com/@giogioxiiofficial?_t=ZN-8xRlO6lKp54&_r=1', label: 'TikTok', color: '#69C9D0' },
  { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27', label: 'WhatsApp', color: '#25D366' },
];

const LINKS = ['Home', 'About', 'Content', 'Setup', 'Contatti'];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) =>
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      style={{
        background: '#050609',
        borderTop: '1px solid rgba(255,215,0,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-gaming font-black text-2xl mb-3"
              style={{ color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.4)' }}
            >
              GIOGIOXII
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Content creator appassionato di gaming, tecnologia e innovazione. Creo contenuti
              che ispirano e intrattengono la community italiana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-gaming text-sm tracking-widest mb-4" style={{ color: 'rgba(255,215,0,0.5)' }}>
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              {LINKS.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="block text-sm text-gray-600 transition-colors duration-200"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgb(75 85 99)')}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-gaming text-sm tracking-widest mb-4" style={{ color: 'rgba(255,215,0,0.5)' }}>
              SEGUIMI
            </h4>
            <div className="flex gap-3 mb-4">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,215,0,0.12)' }}
                  onMouseEnter={e => { (e.currentTarget.style.borderColor = `${color}60`); (e.currentTarget.style.boxShadow = `0 0 15px ${color}30`); (e.currentTarget.querySelector('svg') as SVGElement | null)?.setAttribute('style', `color: ${color}`); }}
                  onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.12)'); (e.currentTarget.style.boxShadow = 'none'); (e.currentTarget.querySelector('svg') as SVGElement | null)?.setAttribute('style', 'color: rgb(75 85 99)'); }}
                >
                  <Icon className="h-4 w-4 text-gray-600" />
                </a>
              ))}
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">
              Rimani aggiornato sui nuovi video e progetti!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,215,0,0.07)' }} className="mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-700">
            <span>© {year} Giogioxii. All rights reserved.</span>
            <span className="hidden sm:block" style={{ color: 'rgba(255,215,0,0.2)' }}>|</span>
            <span className="flex items-center gap-1" style={{ color: 'rgba(255,215,0,0.4)' }}>
              <Code className="h-3.5 w-3.5" />
              Developed by Nexivo — nexivo.works
            </span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-gaming transition-all duration-300 hover:scale-105"
            style={{ border: '1px solid rgba(255,215,0,0.25)', color: '#FFD700', background: 'rgba(255,215,0,0.05)' }}
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Torna su
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
