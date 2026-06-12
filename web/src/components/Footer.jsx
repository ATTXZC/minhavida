import React from 'react';
import { Heart, Crown } from 'lucide-react';
import DecorativeElements from './DecorativeElements';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-muted to-background border-t border-border mt-20">
      <DecorativeElements variant="hearts" count={8} className="absolute inset-0 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Crown className="text-primary group-hover:animate-heart-beat" size={35} fill="currentColor" />
            <span className="font-display text-xl font-semibold">Para Minha Princesa</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Política de Privacidade
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
          
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Feito com <Heart className="inline text-primary" size={14} fill="currentColor" /> para celebrar nosso amor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;