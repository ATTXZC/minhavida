import React from 'react';
import { Heart } from 'lucide-react';

function MessageCard({ title, message, author, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-card border-2 border-primary/20',
    soft: 'bg-gradient-to-br from-muted to-background border border-border',
    elegant: 'bg-card border-l-4 border-l-primary shadow-md',
  };

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${variants[variant]} ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <Heart className="text-primary mt-1 flex-shrink-0" size={20} fill="currentColor" />
        {title && (
          <h3 className="font-display text-xl font-semibold text-balance">{title}</h3>
        )}
      </div>
      <p className="text-base leading-relaxed mb-4 whitespace-pre-line">{message}</p>
      {author && (
        <p className="text-sm font-medium text-muted-foreground text-right">— {author}</p>
      )}
    </div>
  );
}

export default MessageCard;