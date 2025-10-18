import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-fade-out">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="text-8xl animate-bounce-glow">⚡</div>
          <div className="absolute inset-0 bg-primary blur-3xl opacity-50 animate-pulse" />
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold gradient-text animate-glow-pulse">
          Last Minutes Engineer
        </h1>

        {/* Loading Bar */}
        <div className="w-80 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-muted-foreground animate-pulse">
          Initializing circuits... {Math.floor(progress)}%
        </p>

        {/* Orbiting Particles */}
        <div className="relative w-40 h-40 mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full animate-spin"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translateX(60px)`,
                animationDuration: "3s",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
