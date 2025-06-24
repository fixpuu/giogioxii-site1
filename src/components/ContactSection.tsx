
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Instagram, Mail, MessageCircle, Heart } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@Giogioxii',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/giogioxii?igsh=YjFscjB1azIwdnJs&utm_source=qr',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/20'
    },
    {
      name: 'TikTok',
      icon: MessageCircle,
      url: 'https://www.tiktok.com/@giogioxiiofficial?_t=ZN-8xRlO6lKp54&_r=1',
      color: 'hover:text-purple-500',
      bgColor: 'hover:bg-purple-500/20'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            Rimaniamo in Contatto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hai un'idea per una collaborazione? Vuoi dire ciao? Scrivimi!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-gaming gradient-text flex items-center gap-3">
                <Mail className="h-8 w-8" />
                Invia un Messaggio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg border border-neon-purple/20">
                  <Mail className="h-6 w-6 text-neon-purple" />
                  <div>
                    <p className="text-gray-400 text-sm">Scrivimi sulla mia email:</p>
                    <a 
                      href="mailto:gioelebisson@outlook.it"
                      className="text-white font-gaming hover:text-neon-purple transition-colors"
                    >
                      gioelebisson@outlook.it
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg border border-neon-blue/20">
                  <MessageCircle className="h-6 w-6 text-neon-blue" />
                  <div>
                    <p className="text-gray-400 text-sm">Contattami su Discord:</p>
                    <span className="text-white font-gaming">@giogioxii_02984</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg border border-neon-pink/20">
                  <Instagram className="h-6 w-6 text-neon-pink" />
                  <div>
                    <p className="text-gray-400 text-sm">Inviami un messaggio su Instagram:</p>
                    <a 
                      href="https://www.instagram.com/giogioxii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-gaming hover:text-neon-pink transition-colors"
                    >
                      @giogioxii
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-pink/30 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-gaming gradient-text">
                  Seguimi Sui Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-dark-700/50 rounded-lg transition-all duration-300 transform hover:scale-105 ${social.bgColor} group`}
                    >
                      <social.icon className={`h-6 w-6 text-gray-400 transition-colors duration-300 ${social.color} group-hover:scale-110`} />
                      <span className="font-gaming text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-blue/30 card-glow">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-gaming text-xl gradient-text mb-3">Collaborazioni</h3>
                    <p className="text-gray-400 text-sm">
                      Sono sempre aperto a nuove collaborazioni, sponsorizzazioni e progetti creativi. 
                      Scrivimi per discutere le tue idee!
                    </p>
                  </div>
                  <div>
                    <h3 className="font-gaming text-xl gradient-text mb-3">Tempi di Risposta</h3>
                    <p className="text-gray-400 text-sm">
                      Rispondo solitamente entro 24-48 ore. Per richieste urgenti, 
                      contattami sui social media.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-gaming text-xl gradient-text mb-3">Community</h3>
                    <p className="text-gray-400 text-sm">
                      Unisciti alla community Discord e al canale WhatsApp per chattare in tempo reale e 
                      partecipare agli eventi speciali!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thank You Note */}
            <div className="text-center p-6 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-xl border border-neon-purple/30">
              <Heart className="h-8 w-8 text-neon-pink mx-auto mb-3" />
              <p className="text-white font-gaming mb-2">Grazie per il supporto!</p>
              <p className="text-gray-400 text-sm">
                Ogni like, commento e condivisione mi aiuta a crescere. 
                Siete fantastici! ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
