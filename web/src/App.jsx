import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';
import MensagensPage from './pages/MensagensPage';
import SobreNosPage from './pages/SobreNosPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/mensagens" element={<MensagensPage />} />
        <Route path="/sobre" element={<SobreNosPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;