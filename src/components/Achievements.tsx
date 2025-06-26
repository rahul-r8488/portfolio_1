
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Achievements = () => {
  const certificates = [
    {
      name: "HackerRank Problem Solving (Intermediate)",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      link: "https://www.hackerrank.com/certificates/0da78f04b60e"
    },
    {
      name: "HackerRank Problem Solving (Basic)",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      link: "https://www.hackerrank.com/certificates/558662b1889c"
    },
    {
      name: "AWS Cloud Practitioner",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      name: "Google Analytics Certified",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      name: "React Developer Certification",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-white font-semibold text-sm mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <Button 
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    VIEW
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
