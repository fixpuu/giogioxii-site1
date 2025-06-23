
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Youtube, Instagram, Twitter, Mail, MessageCircle, Send, Heart } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      url: '#',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/20'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: '#',
      color: 'hover:text-purple-500',
      bgColor: 'hover:bg-purple-500/20'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          {/* Contact Form */}
          <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-gaming gradient-text flex items-center gap-3">
                <Mail className="h-8 w-8" />
                Invia un Messaggio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-dark-700/50 border-neon-purple/30 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-dark-700/50 border-neon-purple/30 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Il tuo messaggio..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-dark-700/50 border-neon-purple/30 text-white placeholder-gray-400 min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming py-6 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Invia Messaggio
                </Button>
              </form>
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
                      Unisciti alla community Discord per chattare in tempo reale e 
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
