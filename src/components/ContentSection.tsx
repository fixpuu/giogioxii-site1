
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, ThumbsUp, Calendar, ExternalLink, Gamepad2, Monitor, Headphones, MessageCircle } from 'lucide-react';

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const videos = [
    {
      id: 1,
      title: "SPECIALE 100 ISCRITTI! - Umboxing",
      category: "Speciale",
      views: "259",
      likes: "15",
      date: "6 mesi fa",
      thumbnail: "/images/thumbnail1.jpg",
      duration: "12:34",
      url: "https://youtu.be/b5HvEky3TfE?si=P7Qu2R4Vu3m6cafT"
    },
    {
      id: 2,
      title: "Come mettere le MOD su EuroTruck Simulator 2 (TUTORIAL)",
      category: "Tutorial",
      views: "243",
      likes: "12",
      date: "1 anno fa",
      thumbnail: "/images/thumbnail2.jpg",
      duration: "18:45",
      url: "https://youtu.be/fHSDyji3O3w?si=L-eXthos68TE2_kw"
    },
    {
      id: 3,
      title: "SONO DIVENTATO UN FATTORINO DI PIZZE - Ep.1 Pizzadude",
      category: "Gaming",
      views: "204",
      likes: "18",
      date: "3 mesi fa",
      thumbnail: "/images/thumbnail3.jpg",
      duration: "22:18",
      url: "https://youtu.be/M-uPiNEez8c?si=HN54sxf8-cLbDQu9"
    },
    {
      id: 4,
      title: "Ritorno su Asphalt 9 Legends per problemi di volante Ep.1 (spiego nella descrizione)",
      category: "Gaming",
      views: "142",
      likes: "8",
      date: "1 anno fa",
      thumbnail: "/images/thumbnail4.jpg",
      duration: "15:22",
      url: "https://youtu.be/lP-8VuyNJDQ?si=nnkxg9EZxWKxCb0s"
    }
  ];

  const projects = [
    {
      title: "Community Discord",
      description: "Server Discord attivo con la community per condividere gaming, contenuti e momenti divertenti insieme",
      tech: ["Community Management", "Gaming", "Social"],
      link: "https://discord.gg/9T9zbyp8",
      image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400"
    },
    {
      title: "Canale WhatsApp",
      description: "Seguimi sul canale WhatsApp per aggiornamenti rapidi, anteprime e contenuti esclusivi",
      tech: ["Updates", "Exclusive Content", "Community"],
      link: "https://whatsapp.com/channel/0029VaOVoAJ8vd1PQUKdFV27",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400"
    }
  ];

  return (
    <section id="content" className="py-20 px-6 bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            I Miei Contenuti
          </h2>
          <p className="text-xl text-light-100 max-w-3xl mx-auto">
            Esplora i miei video, progetti e tutto quello che creo per la community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-full p-2 border border-neon-yellow/30">
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className={`rounded-full px-6 py-3 font-gaming transition-all duration-300 ${
                activeTab === 'videos' 
                  ? 'bg-gradient-to-r from-neon-yellow to-neon-gold text-dark-900' 
                  : 'text-light-200 hover:text-light-100'
              }`}
            >
              <Play className="mr-2 h-4 w-4" />
              Video
            </Button>
            <Button
              variant={activeTab === 'projects' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('projects')}
              className={`rounded-full px-6 py-3 font-gaming transition-all duration-300 ${
                activeTab === 'projects' 
                  ? 'bg-gradient-to-r from-neon-yellow to-neon-gold text-dark-900' 
                  : 'text-light-200 hover:text-light-100'
              }`}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Community
            </Button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="bg-dark-800/50 backdrop-blur-sm border-neon-yellow/30 card-glow overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      size="lg" 
                      className="bg-neon-yellow hover:bg-neon-gold text-dark-900 rounded-full"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2 bg-neon-yellow text-dark-900">
                    {video.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-gaming text-lg text-light-100 mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-light-200">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {video.likes}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {video.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-dark-800/50 backdrop-blur-sm border-neon-gold/30 card-glow overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-gaming text-xl text-light-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-light-200 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-neon-amber text-neon-amber text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-dark-900"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Unisciti
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-yellow to-neon-gold hover:from-neon-gold hover:to-neon-amber text-dark-900 font-gaming px-8 py-4 text-lg mr-4"
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
          >
            <ExternalLink className="mr-2 h-6 w-6" />
            Visita il Canale YouTube
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-dark-900 font-gaming px-8 py-4 text-lg"
            onClick={() => window.open('https://www.youtube.com/@Giogioxii/videos', '_blank')}
          >
            <Play className="mr-2 h-6 w-6" />
            Guarda i Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
