import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoCard from '../components/PhotoCard';
import DecorativeElements from '../components/DecorativeElements';
import op from "web/public/1.jpeg";

function GaleriaPage() {
  /*
    COMO ADICIONAR SUAS FOTOS:
    1. Coloque os arquivos de imagem na pasta "web/public/fotos".
    2. Preencha o campo "image" com o caminho, ex: image: '/fotos/praia.jpg'.
    3. Deixe "image" como null para manter o espaço reservado (placeholder).
    Você pode adicionar quantas fotos quiser à lista abaixo.
  */
  const photos = [
    {
      image: op,
      caption: 'Nosso primeiro encontro especial, onde tudo começou',
      alt: 'Foto do casal',
    },
    {
      image: null,
      caption: 'Celebrando momentos de alegria e cumplicidade',
      alt: 'Foto do casal',
    },
    {
      image: null,
      caption: 'Aventuras compartilhadas que fortalecem nosso amor',
      alt: 'Foto do casal',
    },
    {
      image: null,
      caption: 'Momentos de ternura que guardaremos para sempre',
      alt: 'Foto do casal',
    },
    {
      image: null,
      caption: 'Sorrisos que iluminam os meus dias',
      alt: 'Foto do casal',
    },
    {
      image: null,
      caption: 'Para a Raquel, com todo o meu amor',
      alt: 'Foto do casal',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Galeria de Momentos - Nosso Amor</title>
        <meta name="description" content="Nossa galeria de momentos especiais, memórias preciosas capturadas ao longo da nossa jornada juntos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-20 bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
            <DecorativeElements variant="hearts" count={10} className="absolute inset-0 opacity-20" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="text-primary animate-gentle-pulse" size={40} fill="currentColor" />
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance" style={{ letterSpacing: '-0.02em' }}>
                    Nossa Galeria de Amor
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Cada imagem conta uma história, cada momento é uma lembrança preciosa do nosso amor
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo, index) => (
                  <PhotoCard
                    key={index}
                    image={photo.image}
                    caption={photo.caption}
                    alt={photo.alt}
                    index={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 text-center"
              >
                <div className="inline-block bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl">
                  <Heart className="mx-auto mb-4 text-primary" size={32} fill="currentColor" />
                  <p className="text-lg leading-relaxed font-medium">
                    "Cada fotografia é um pedaço do nosso coração, uma memória eternizada que nos lembra 
                    do quanto somos abençoados por termos encontrado um ao outro."
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default GaleriaPage;
