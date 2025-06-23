
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, ThumbsUp, Calendar, ExternalLink, Gamepad2, Monitor, Headphones } from 'lucide-react';

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const videos = [
    {
      id: 1,
      title: "LA MIA SETUP GAMING 2024 - TOUR COMPLETO!",
      category: "Setup",
      views: "15K",
      likes: "2.1K",
      date: "2 giorni fa",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      duration: "12:34"
    },
    {
      id: 2,
      title: "COME DIVENTARE UN CONTENT CREATOR NEL 2024",
      category: "Tutorial",
      views: "8.5K",
      likes: "1.8K",
      date: "1 settimana fa",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
      duration: "18:45"
    },
    {
      id: 3,
      title: "TOP 10 GIOCHI INDIE CHE DEVI ASSOLUTAMENTE PROVARE",
      category: "Gaming",
      views: "12K",
      likes: "2.5K",
      date: "2 settimane fa",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      duration: "22:18"
    },
    {
      id: 4,
      title: "REAZIONE AI TRAILER DEI GIOCHI PIÙ ATTESI 2024",
      category: "Reazioni",
      views: "20K",
      likes: "3.2K",
      date: "3 settimane fa",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      duration: "15:22"
    }
  ];

  const projects = [
    {
      title: "Gaming Setup Guide",
      description: "Una guida completa per creare la setup gaming perfetta con qualsiasi budget",
      tech: ["Video Editing", "Motion Graphics", "Sound Design"],
      link: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
    },
    {
      title: "Community Discord",
      description: "Server Discord attivo con oltre 500 membri per condividere gaming e tech",
      tech: ["Community Management", "Bot Development", "Event Planning"],
      link: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400"
    },
    {
      title: "Podcast Gaming",
      description: "Podcast settimanale sui trend del gaming e interviste ad altri creator",
      tech: ["Audio Production", "Interviewing", "Content Strategy"],
      link: "#",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400"
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
              <Monitor className="mr-2 h-4 w-4" />
              Progetti
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
                    <Button size="lg" className="bg-neon-purple hover:bg-neon-pink rounded-full">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Button variant="outline" className="w-full border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Scopri di più
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white font-gaming px-8 py-4 text-lg">
            <ExternalLink className="mr-2 h-6 w-6" />
            Visita il Canale YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
