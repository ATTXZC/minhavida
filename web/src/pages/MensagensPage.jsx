import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Plus, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MessageCard from '../components/MessageCard';
import DecorativeElements from '../components/DecorativeElements';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

function MensagensPage() {
  const [customMessages, setCustomMessages] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const defaultMessages = [
    {
      title: 'Amor Eterno',
      message: 'Você é a razão do meu sorriso, a luz dos meus dias e a paz das minhas noites. Cada momento ao seu lado é um presente que guardo no coração. Te amo hoje, amanhã e sempre.',
      author: 'Com todo meu amor',
    },
    {
      title: 'Promessa de Amor',
      message: 'Prometo estar ao seu lado em todos os momentos, celebrar suas vitórias, apoiar seus sonhos e amar você incondicionalmente. Você é meu para sempre.',
      author: 'Seu amor eterno',
    },
    {
      title: 'Gratidão',
      message: 'Agradeço todos os dias por ter você na minha vida. Você me completa de uma forma que eu nem sabia ser possível. Obrigado por ser meu amor, meu amigo, minha inspiração.',
      author: 'Com carinho',
    },
  ];

  const handleAddMessage = () => {
    if (!newMessage.trim()) {
      toast.error('Por favor, escreva uma mensagem');
      return;
    }

    const message = {
      title: newTitle.trim() || 'Mensagem Especial',
      message: newMessage.trim(),
      author: newAuthor.trim() || 'Anônimo',
    };

    setCustomMessages([message, ...customMessages]);
    setNewTitle('');
    setNewMessage('');
    setNewAuthor('');
    toast.success('Mensagem adicionada com sucesso');
  };

  return (
    <>
      <Helmet>
        <title>Mensagens de Amor - Nosso Amor</title>
        <meta name="description" content="Mensagens românticas, poemas e declarações de amor que expressam nossos sentimentos mais profundos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-20 bg-gradient-to-br from-background via-muted to-background overflow-hidden">
            <DecorativeElements variant="sparkles" count={12} className="absolute inset-0 opacity-20" />
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="text-accent animate-gentle-pulse" size={40} />
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance" style={{ letterSpacing: '-0.02em' }}>
                    Mensagens do Coração
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Palavras que expressam o amor verdadeiro que sentimos um pelo outro
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border mb-12"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Plus className="text-primary" size={24} />
                  <h2 className="font-display text-2xl font-semibold">Adicionar Nova Mensagem</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Título (opcional)
                    </label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Ex: Meu Amor Eterno"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem de amor aqui..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      rows={6}
                      className="w-full resize-none text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="author" className="block text-sm font-medium mb-2">
                      Assinatura (opcional)
                    </label>
                    <Input
                      id="author"
                      type="text"
                      placeholder="Ex: Com todo meu amor"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <Button
                    onClick={handleAddMessage}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    <Heart className="mr-2" size={18} fill="currentColor" />
                    Adicionar Mensagem
                  </Button>
                </div>
              </motion.div>

              <div className="space-y-6">
                {customMessages.map((msg, index) => (
                  <motion.div
                    key={`custom-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageCard
                      title={msg.title}
                      message={msg.message}
                      author={msg.author}
                      variant="elegant"
                    />
                  </motion.div>
                ))}

                {defaultMessages.map((msg, index) => (
                  <motion.div
                    key={`default-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <MessageCard
                      title={msg.title}
                      message={msg.message}
                      author={msg.author}
                      variant={index % 2 === 0 ? 'default' : 'soft'}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 text-center"
              >
                <div className="inline-block bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                  <Heart className="mx-auto mb-4 text-primary animate-heart-beat" size={40} fill="currentColor" />
                  <p className="text-lg leading-relaxed font-medium max-w-xl">
                    "O amor verdadeiro não se mede em palavras, mas cada palavra escrita aqui 
                    carrega um pedaço do nosso coração."
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

export default MensagensPage;