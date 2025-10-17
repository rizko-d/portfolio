import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading Animation */}
      <motion.div
        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          className="text-4xl font-bold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary"></span>
          <span className="text-muted-foreground">Portfolio</span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        theme={darkMode ? 'dark' : 'light'}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        {/* Animated Background Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}