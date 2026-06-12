import React from 'react';
import { motion } from 'framer-motion';
import { ImagePlus } from 'lucide-react';

function PhotoCard({ image, caption, alt, index = 0}) {
  const hasImage = Boolean(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden">
        {!hasImage ? (
          /* ESPAÇO PARA FOTO (Placeholder):
            Se não tiver imagem, cai aqui.
          */
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted to-secondary/10 p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ImagePlus className="text-primary" size={28} />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Espaço para nossa foto
            </p>
          </div>
        ) : image.endsWith('.mp4') ? (
          /* VÍDEO: 
            Se tiver arquivo e for .mp4, cai aqui.
          */
          <video 
            src={image} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            autoPlay
            controls 
            loop
            muted 
            playsInline
          />
        ) : (
          /* IMAGEM: 
            Se tiver arquivo e NÃO for .mp4, cai aqui.
          */
          <img
            src={image}
            alt={alt || caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      
      {caption && (
        <div className="p-4 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-sm">
          <p className="text-sm font-medium text-center text-balance">{caption}</p>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default PhotoCard;