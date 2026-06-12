import React from 'react';
import { motion } from 'framer-motion';

function PhotoCard({ image, caption, alt, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={alt || caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {caption && (
        <div className="p-4 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-sm">
          <p className="text-sm font-medium text-center text-balance">{caption}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default PhotoCard;