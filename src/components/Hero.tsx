
import { Code, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Matrix Rain Effect - Reduced opacity */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-cyan font-mono text-sm animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 10 }, () => String.fromCharCode(33 + Math.random() * 94)).join('')}
          </div>
        ))}
      </div>

      {/* Grid Background - Reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent"
             style={{
               backgroundImage: 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side - Main Content */}
            <div className="lg:col-span-9 space-y-8">
              <div className="space-y-6 animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-neon-cyan" />
                  <span className="font-mono text-neon-cyan text-sm tracking-wider">PORTFOLIO.EXE</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black font-display leading-none">
                  <span className="block text-white hover:text-neon-cyan transition-colors duration-500 cursor-pointer">
                    RAHUL
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
                    SINGH
                  </span>
                  <span className="block text-white/80 text-5xl lg:text-6xl xl:text-7xl">
                    RAWAT
                  </span>
                </h1>
              </div>

              <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-neon-cyan" />
                  <span className="font-mono text-neon-cyan text-lg tracking-wide">SOFTWARE_DEVELOPER</span>
                </div>
                <div className="h-px w-32 bg-gradient-to-r from-neon-cyan to-transparent"></div>
                <p className="font-mono text-neon-blue text-lg tracking-wide">FULL_STACK_WEB_DEVELOPER</p>
              </div>

              <p className="text-gray-300 text-xl max-w-2xl leading-relaxed font-body animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Third-year <span className="text-neon-cyan font-semibold">Computer Science</span> student crafting 
                digital experiences that bridge <span className="text-neon-purple font-semibold">innovation</span> and 
                <span className="text-neon-blue font-semibold"> functionality</span>.
              </p>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="lg:col-span-3 space-y-6 animate-slide-left" style={{ animationDelay: '0.8s' }}>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { label: "Projects", value: "10+", color: "text-neon-cyan" },
                  { label: "Languages", value: "10+", color: "text-neon-purple" },
                  { label: "GPA", value: "8.09", color: "text-neon-pink" }
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm hover:border-neon-cyan/30 transition-all duration-300 hover:bg-gray-800/50">
                      <div className={`text-3xl font-black font-mono ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900/30 border border-neon-cyan/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span className="font-mono text-neon-cyan text-sm">STATUS</span>
                </div>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {'>'} Available for opportunities<br/>
                  {'>'} Building innovative solutions<br/>
                  {'>'} Currently at GEHU, Dehradun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
