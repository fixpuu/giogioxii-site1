
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Heart, Lightbulb, Gamepad2, Camera, Code, Music } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Content Creation', level: 90, color: 'bg-neon-purple' },
    { name: 'Video Editing', level: 85, color: 'bg-neon-pink' },
    { name: 'Gaming', level: 95, color: 'bg-neon-blue' },
    { name: 'Storytelling', level: 80, color: 'bg-neon-cyan' },
  ];

  const interests = [
    { icon: Gamepad2, name: 'Gaming', desc: 'FPS, RPG, Indie Games' },
    { icon: Camera, name: 'Content', desc: 'YouTube, Streaming' },
    { icon: Code, name: 'Tech', desc: 'Hardware, Software' },
    { icon: Music, name: 'Music', desc: 'Electronic, Gaming OSTs' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            Chi Sono
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La mia storia, le mie passioni e quello che mi guida ogni giorno
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-gaming">
                  <User className="h-8 w-8 text-neon-purple" />
                  La Mia Storia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Ciao! Sono Giogioxii, un appassionato content creator che vive e respira 
                  il mondo del gaming e della tecnologia. La mia avventura è iniziata anni fa 
                  con una semplice passione per i videogiochi.
                </p>
                <p>
                  Quello che era nato come un hobby si è evoluto in qualcosa di più grande: 
                  la voglia di condividere esperienze, creare contenuti originali e costruire 
                  una community di persone che condividono le mie stesse passioni.
                </p>
                <p>
                  Ogni video che creo è un pezzo della mia personalità, un modo per connettermi 
                  con chi mi segue e per esplorare insieme nuovi mondi virtuali e reali.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-pink/30 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-gaming">
                  <Target className="h-8 w-8 text-neon-pink" />
                  I Miei Obiettivi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-neon-pink mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Costruire Community</h4>
                    <p className="text-sm">Creare uno spazio dove i gamer si sentono a casa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-neon-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Innovare</h4>
                    <p className="text-sm">Sperimentare nuovi format e contenuti originali</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gamepad2 className="h-5 w-5 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Crescere</h4>
                    <p className="text-sm">Migliorare costantemente e raggiungere nuovi traguardi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-blue/30 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-gaming gradient-text">Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-cyan/30 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-gaming gradient-text">Interessi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest.name} className="text-center p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-all duration-300 transform hover:scale-105">
                      <interest.icon className="h-8 w-8 mx-auto mb-3 text-neon-purple" />
                      <h4 className="font-gaming text-white mb-1">{interest.name}</h4>
                      <p className="text-xs text-gray-400">{interest.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Gaming', 'Content Creator', 'YouTube', 'Tech Enthusiast', 'Community Builder', 'Innovator'].map((tag) => (
                <Badge key={tag} variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
