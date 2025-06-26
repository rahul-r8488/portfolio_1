
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-cyan font-mono text-xs animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 5 }, () => String.fromCharCode(33 + Math.random() * 94)).join('')}
          </div>
        ))}
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Terminal className="w-12 h-12 text-neon-cyan animate-pulse" />
          <span className="font-mono text-neon-cyan text-2xl font-bold tracking-wider">
            R.S.RAWAT
          </span>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-gray-400 text-sm tracking-wider">
            INITIALIZING PORTFOLIO.EXE
          </div>
          
          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="font-mono text-neon-cyan text-lg font-bold">
            {progress}%
          </div>
        </div>

        <div className="font-mono text-gray-500 text-xs">
          Loading innovative solutions...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
