
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Text to Speech & Speech to Text for Indian Languages",
      technologies: ["Python", "Speech APIs", "AI/ML", "NLP"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop"
    },
    {
      title: "Full-Stack E-Commerce Platform",
      technologies: ["ReactJS", "Firebase", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      title: "Real-Time Crypto Analytics Dashboard",
      technologies: ["ReactJS", "WebSocket", "Chart.js", "REST API", "Tailwind"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1642790595256-3426fb9bd4d7?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 pt-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-neon-cyan"></div>
            <Code2 className="w-8 h-8 text-neon-cyan" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-neon-cyan"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black font-display mb-6">
            <span className="text-white">PORT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">FOLIO</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
            {'{>'} Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gray-900/80 border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm overflow-hidden relative animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
              </div>
              
              {/* Project Content */}
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-200 group-hover:text-neon-cyan transition-colors duration-300 font-display text-lg leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardFooter className="flex gap-3 pt-0">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-600 text-gray-300 bg-gray-800 hover:border-neon-cyan hover:text-neon-cyan hover:bg-gray-700 font-mono text-xs transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  SOURCE
                </Button>
                <Button 
                  className="flex-1 bg-neon-cyan text-black hover:bg-neon-blue hover:text-black font-mono text-xs font-bold transition-all duration-300"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LIVE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
