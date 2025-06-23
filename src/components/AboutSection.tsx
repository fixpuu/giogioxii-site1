
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Heart, Lightbulb, Gamepad2, Camera, Code, Music, MessageSquare, Video, Mic } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Content Creation', level: 90, color: 'bg-neon-purple' },
    { name: 'Video Editing', level: 85, color: 'bg-neon-pink' },
    { name: 'Gaming', level: 95, color: 'bg-neon-blue' },
    { name: 'Storytelling', level: 80, color: 'bg-neon-cyan' },
  ];

  const interests = [
    { icon: Gamepad2, name: 'Gaming', desc: 'FPS, RPG, Indie Games' },
    { icon: Camera, name: 'Content', desc: 'YouTube, TikTok' },
    { icon: Code, name: 'Tech', desc: 'Hardware, Software' },
    { icon: Music, name: 'Music', desc: 'Electronic, Gaming OSTs' },
  ];

  const storySteps = [
    {
      icon: MessageSquare,
      title: "Il Nome",
      content: "Il nome era stato inventato quando avevo creato l'account Epic Games e non sapevo che nome mettere, perché non ci volevo mettere il nome \"GioXi 01\" (fu inventato precedentemente per giocare a Minecraft con gli amici). Dopo un po' con il pensiero mi sono reso conto che di soprannome a volte mi chiamavano \"Giogio\", quindi ho deciso di fare l'unione tra il soprannome Giogio e GioXi 01. Il risultato sarebbe stato \"Giogioxi\" ma dava che il nome era già stato utilizzato quindi ho aggiunto una \"i\" perché mettere 01 sentivo che stava male. Infine il risultato fu \"Giogioxii\" ma ho fatto questo account Epic Games non ancora per portare qualcosa sui social."
    },
    {
      icon: Video,
      title: "Pubblicazione sui Social",
      content: "L'inizio fu nel settembre del 2023 pubblicando contenuti su TikTok ma con video molti lunghi e non mi guardava nessuno, perché erano video da 10 minuti in verticale di RL Sideswipe e non erano niente di speciale. Un mese dopo decisi di iniziare a pubblicare su YouTube ma successe più o meno la stessa cosa. Quando ho pubblicato il mio primo shorts su YouTube il mio canale è esploso di views in cui avevo guadagnato 7 iscritti e più di 2000 visualizzazioni che per me erano già moltissime. Prima però insieme al Fixpu (trovate il suo canale nella pagina dei canali consigliati) ho creato il logo che trovate sopra grazie a un sito."
    },
    {
      icon: Mic,
      title: "Primo Video Parlato",
      content: "Il primo video parlato fu questo affianco di cui ero molto timido a parlare mentre registravo. A convincermi a farlo fu proprio Fixpu che mi diceva che se io parlassi i tuoi video andranno molto meglio. In questo video parlavo molto casualmente e ben poco, perché non sapevo ancora editare i video. Col tempo ho portato anche molti altri giochi come Fortnite e la timidezza nei video non si sente più"
    },
    {
      icon: Target,
      title: "Molto Tempo Dopo",
      content: "Dopo 2 anni (più o meno dipende quando guarderete questo sito) sono cresciuto un po' in generale come iscritti e views. Nell'immagine affianco che rappresenta il grafico di quante visualizzazioni ho fatto da ottobre 2023 fino al giorno d'oggi. Molto probabilmente quando guarderete questo sito le views e gli iscritti saranno cresciuti notevolmente. Io ho molti obiettivi davanti da superare ma con impegno e sacrifici (di tempo) ci scommetto che c'è la farò."
    }
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

        {/* Story Timeline */}
        <div className="space-y-8 mb-16">
          {storySteps.map((step, index) => (
            <Card key={index} className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-gaming gradient-text">
                  <step.icon className="h-8 w-8" />
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{step.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Goals */}
          <div className="space-y-8">
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
              {['Gaming', 'Content Creator', 'YouTube', 'TikTok', 'Community Builder', 'Innovator'].map((tag) => (
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
