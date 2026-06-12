import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Sparkles, ImagePlus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DecorativeElements from '../components/DecorativeElements';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Para a Raquel - Feiohfguihrtipgu</title>
        <meta name="description" content="Um espaço dedicado ao nosso amor, memórias e momentos especiais compartilhados com a Raquel." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/fundo-romantico.png"
                alt="Fundo romântico com corações"
                className="absolute inset-0 w-full h-full object-cover"
              />
               <img
                src="/1.jpeg"
                alt="Nossa foto"
                className="absolute inset-0 w-full h-full object-cover opacity-200"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70" />
            </div>

            <DecorativeElements variant="hearts" count={12} className="absolute inset-0 z-10" />
            <DecorativeElements variant="sparkles" count={8} className="absolute inset-0 z-10" />

            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8 }}
              >
                <Heart className="mx-auto mb-6 text-white animate-heart-beat" size={64} fill="currentColor" />
                
                <p className="text-base md:text-lg font-medium uppercase tracking-[0.3em] text-white/80 mb-4">
                  Feliz Dia dos Namorados
                </p>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Para a Raquel, meu amor
                </h1>
                
                <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Cada momento ao seu lado é uma página especial na história do nosso amor. 
                  Este cantinho é só nosso, Raquel: feito com carinho para celebrar tudo o que vivemos juntos.
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link
                    to="/galeria"
                    className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-[0.98]"
                  >
                    Explorar Galeria
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </Link>
                  
                  <Link
                    to="/mensagens"
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 active:scale-[0.98]"
                  >
                    <Sparkles size={20} />
                    Ver Mensagens
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-background to-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Nossa História de Amor
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Descubra os momentos que tornaram nossa jornada tão especial
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Heart className="text-primary" size={24} fill="currentColor" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold">Memórias Preciosas</h3>
                    </div>
                    <p className="leading-relaxed">
                      Cada fotografia em nossa galeria conta uma história única. Momentos de alegria, 
                      cumplicidade e amor verdadeiro capturados para sempre.
                    </p>
                  </div>

                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Sparkles className="text-secondary" size={24} />
                      </div>
                      <h3 className="font-display text-2xl font-semibold">Palavras do Coração</h3>
                    </div>
                    <p className="leading-relaxed">
                      Mensagens românticas, poemas e declarações que expressam a profundidade 
                      do nosso sentimento. Palavras que tocam a alma.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    {/*
                      ESPAÇO PARA FOTO PRINCIPAL:
                      Coloque uma foto de vocês na pasta "web/public/fotos" e
                      troque o bloco abaixo por:
                      <img src="/fotos/sua-foto.jpg" alt="Eu e a Raquel" className="w-full h-full object-cover" />
                    */}
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/10 via-muted to-secondary/10 p-8 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
                        <ImagePlus className="text-primary" size={36} />
                      </div>
                      <p className="font-display text-xl font-semibold">Nossa foto favorita</p>
                      <p className="text-sm text-muted-foreground">
                        Espaço reservado para a foto de vocês
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
