
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Headphones, Keyboard, Mouse, Gamepad2, Mic, Camera, ExternalLink } from 'lucide-react';

const SetupSection = () => {
  const setupItems = [
    {
      category: "Periferiche",
      icon: Keyboard,
      items: [
        { name: "Tastiera", spec: "Mechanical RGB Gaming", color: "border-neon-purple" },
        { name: "Mouse", spec: "Gaming Mouse 16000 DPI", color: "border-neon-pink" },
        { name: "Controller", spec: "Xbox Series X Controller", color: "border-neon-blue" },
        { name: "Pad", spec: "RGB Gaming Mousepad", color: "border-neon-cyan" }
      ]
    },
    {
      category: "Attrezzatura Video",
      icon: Camera,
      items: [
        { 
          name: "Microfono", 
          spec: "TONOR Microfono USB", 
          color: "border-red-500",
          link: "https://amzn.eu/d/0iDgg7mz"
        },
        { 
          name: "Braccio", 
          spec: "Braccio per Microfono", 
          color: "border-orange-500",
          link: "https://www.amazon.it/Microfono-TONOR..."
        },
        { 
          name: "Telecamera", 
          spec: "Logitech Webcam", 
          color: "border-pink-500",
          link: "https://www.amazon.it/Logitech-Videoc..."
        },
        { 
          name: "Tappetino", 
          spec: "HoYiXi Tappetino", 
          color: "border-cyan-500",
          link: "https://www.amazon.it/HoYiXi-Tappetin..."
        }
      ]
    },
    {
      category: "Audio",
      icon: Headphones,
      items: [
        { name: "Cuffie", spec: "Gaming Headset 7.1", color: "border-yellow-500" },
        { name: "Monitor", spec: "27\" 144Hz Gaming", color: "border-cyan-500" }
      ]
    }
  ];

  const softwareStack = [
    { name: "CapCut", purpose: "Video Editing", color: "bg-blue-500" },
    { name: "OBS Studio", purpose: "Streaming & Recording", color: "bg-red-500" },
    { name: "Discord", purpose: "Community", color: "bg-indigo-500" },
    { name: "Steam", purpose: "Gaming Platform", color: "bg-gray-600" }
  ];

  return (
    <section id="setup" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            Il Mio Setup
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            L'hardware e software che utilizzo per creare contenuti di qualità
          </p>
        </div>

        {/* Hardware Setup */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {setupItems.map((category) => (
            <Card key={category.category} className="bg-dark-800/50 backdrop-blur-sm border-neon-purple/30 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-gaming gradient-text">
                  <category.icon className="h-8 w-8" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className={`p-4 rounded-lg border-2 ${item.color} bg-dark-700/30 hover:bg-dark-700/50 transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex justify-between items-center">
                      <span className="font-gaming text-white">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-current">
                          Pro
                        </Badge>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neon-purple hover:text-neon-pink transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{item.spec}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Software Stack */}
        <Card className="bg-dark-800/50 backdrop-blur-sm border-neon-pink/30 card-glow">
          <CardHeader>
            <CardTitle className="text-3xl font-gaming gradient-text text-center">
              Software & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {softwareStack.map((software) => (
                <div key={software.name} className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-12 h-12 ${software.color} rounded-lg flex items-center justify-center`}>
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-gaming text-white">{software.name}</h4>
                    <p className="text-sm text-gray-400">{software.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm border border-neon-purple/30 rounded-xl card-glow">
            <div className="text-3xl font-gaming font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-400 text-sm">Ore di Streaming</div>
          </div>
          <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm border border-neon-pink/30 rounded-xl card-glow">
            <div className="text-3xl font-gaming font-bold gradient-text mb-2">4K</div>
            <div className="text-gray-400 text-sm">Qualità Video</div>
          </div>
          <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm border border-neon-blue/30 rounded-xl card-glow">
            <div className="text-3xl font-gaming font-bold gradient-text mb-2">144Hz</div>
            <div className="text-gray-400 text-sm">Gaming Smooth</div>
          </div>
          <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl card-glow">
            <div className="text-3xl font-gaming font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Setup Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
