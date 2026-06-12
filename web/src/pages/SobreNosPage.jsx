import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DecorativeElements from '../components/DecorativeElements';

function SobreNosPage() {
  const milestones = [
    {
      date: '26 de Março de 2026',
      title: 'Nosso Primeiro Encontro no Shopping da Bahia',
      description: 'O dia em que nossos olhares se cruzaram e soubemos que algo especial estava começando.',
      icon: Heart,
    },
    {
      date: '30 de Abril de 2026',
      title: 'Primeira vez que vocs aqui em casa',
      description: 'Esse dia foi especial e divertido, o dia que te apresentei a minha familia e o nosso amor só aumentava.',
      icon: MapPin,
    },
    {
      date: 'Presente',
      title: 'Construindo Nosso Futuro',
      description: 'Cada dia é uma nova página na história do nosso amor eterno.',
      icon: Heart,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nossa História - Nosso Amor</title>
        <meta name="description" content="Conheça a história do nosso amor, os momentos especiais e a jornada que estamos construindo juntos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/fundo-romantico.png"
                alt="Fundo romântico com corações"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-secondary/60" />
            </div>

            <DecorativeElements variant="hearts" count={10} className="absolute inset-0 z-10" />

            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Nossa História
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
                  Uma jornada de amor, cumplicidade e sonhos compartilhados
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-background to-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-primary" size={32} fill="currentColor" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold">Como Tudo Começou</h2>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Raquel, nossa história começou de uma forma inesperada, no meio de uma sala de aula, se vendo todo os dias, até que você me chamou (parecendo que tava chamando um cacorro kkkkkkkkk) "Ei Ei vem cá", dai foi o ponto de partida para o nosso amor, todos os dias fazia questão de caminha contigo pela Ribeira, cada canto foi uma experiência incrivel, e cada momento com você, percebia que estava andando ao lado de uma joia rara, uma princesa do meus sonhos.
                  </p>
                  <p>
                    Com o passar do tempo, descobrimos que compartilhávamos não apenas interesses e sonhos, 
                    mas também valores profundos e uma conexão que transcende palavras. Cada conversa, 
                    cada riso compartilhado, cada momento de silêncio confortável fortaleceu nosso vínculo.
                  </p>
                  <p>
                    Hoje, olhamos para trás com gratidão por cada passo dessa jornada e para frente com 
                    esperança e entusiasmo pelo futuro que estamos construindo juntos. Nosso amor cresce 
                    a cada dia, tornando-se mais profundo, mais verdadeiro e mais belo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                  Momentos Marcantes
                </h2>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex gap-6 items-start"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="text-primary" size={28} fill={milestone.icon === Heart ? 'currentColor' : 'none'} />
                          </div>
                        </div>
                        <div className="flex-1 bg-card rounded-2xl p-6 shadow-md border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="text-muted-foreground" size={16} />
                            <span className="text-sm font-medium text-muted-foreground">{milestone.date}</span>
                          </div>
                          <h3 className="font-display text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="leading-relaxed">{milestone.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
                  <Heart className="mx-auto mb-6 text-primary animate-heart-beat" size={48} fill="currentColor" />
                  <blockquote className="font-display text-2xl md:text-3xl font-semibold mb-4 text-balance">
                    "O amor verdadeiro não é encontrado, é construído"
                  </blockquote>
                  <p className="text-lg leading-relaxed max-w-2xl">
                    E nós estamos construindo algo concreto, dia após dia, momento após momento, 
                    com dedicação, carinho e um amor que só cresce. TE AMO!
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

export default SobreNosPage;
