
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
      title: "Video Gaming Highlights",
      category: "Gaming",
      views: "15K",
      likes: "2.1K",
      date: "2 giorni fa",
      thumbnail: "https://img.youtube.com/vi/b5HvEky3TfE/maxresdefault.jpg",
      duration: "12:34",
      url: "https://youtu.be/b5HvEky3TfE?si=P7Qu2R4Vu3m6cafT"
    },
    {
      id: 2,
      title: "Gameplay Epico",
      category: "Gaming",
      views: "8.5K",
      likes: "1.8K",
      date: "1 settimana fa",
      thumbnail: "https://img.youtube.com/vi/fHSDyji3O3w/maxresdefault.jpg",
      duration: "18:45",
      url: "https://youtu.be/fHSDyji3O3w?si=L-eXthos68TE2_kw"
    },
    {
      id: 3,
      title: "Contenuto Speciale",
      category: "Content",
      views: "12K",
      likes: "2.5K",
      date: "2 settimane fa",
      thumbnail: "https://img.youtube.com/vi/M-uPiNEez8c/maxresdefault.jpg",
      duration: "22:18",
      url: "https://youtu.be/M-uPiNEez8c?si=HN54sxf8-cLbDQu9"
    },
    {
      id: 4,
      title: "Gaming Content",
      category: "Gaming",
      views: "20K",
      likes: "3.2K",
      date: "3 settimane fa",
      thumbnail: "https://img.youtube.com/vi/lP-8VuyNJDQ/maxresdefault.jpg",
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Esplora i miei video, progetti e tutto quello che creo per la community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-full p-2 border border-neon-purple/30">
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className={`rounded-full px-6 py-3 font-gaming transition-all duration-300 ${
                activeTab === 'videos' 
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white' 
                  : 'text-gray-400 hover:text-white'
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
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white' 
                  : 'text-gray-400 hover:text-white'
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
              <Card key={video.id} className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      size="lg" 
                      className="bg-neon-purple hover:bg-neon-pink rounded-full"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <Badge className="absolute top-2 left-2 bg-neon-purple text-white">
                    {video.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-gaming text-lg text-white mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
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
              <Card key={index} className="bg-dark-800/50 backdrop-blur-sm border-neon-pink/30 card-glow overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-gaming text-xl text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-neon-cyan text-neon-cyan text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
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
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming px-8 py-4 text-lg"
            onClick={() => window.open('https://www.youtube.com/@Giogioxii', '_blank')}
          >
            <ExternalLink className="mr-2 h-6 w-6" />
            Visita il Canale YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
