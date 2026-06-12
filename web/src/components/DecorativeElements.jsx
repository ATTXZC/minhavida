import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

function DecorativeElements({ variant = 'hearts', count = 5, className = '' }) {
  if (variant === 'hearts') {
    return (
      <div className={`pointer-events-none ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            size={16 + Math.random() * 16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>
    );
  }

  if (variant === 'sparkles') {
    return (
      <div className={`pointer-events-none ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-accent/30 animate-gentle-pulse"
            size={12 + Math.random() * 12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'petals') {
    return (
      <div className={`pointer-events-none ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}

export default DecorativeElements;