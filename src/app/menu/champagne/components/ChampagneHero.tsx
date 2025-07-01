'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ChampagnesVinsHeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('champagnes-vins-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/champagne.jpg" // Replace with your champagnes & wines hero image
          alt="Cave à vins et champagnes d'exception"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Elegant overlay with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated entrance effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Decorative top accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(0, 0, 0, 0.6)'
            }}
          >
            <span className="block">Champagnes</span>
            <span className="block text-emerald-400 font-light italic">
              & Vins
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)'
            }}
          >
            Découvrez notre sélection exceptionnelle de champagnes et vins fins, 
            soigneusement choisis pour accompagner vos moments les plus précieux.
            <span className="block mt-4 text-emerald-300/80 text-base md:text-lg font-extralight italic">
              L'excellence viticole à votre table
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <button 
              onClick={scrollToMenu}
              className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm tracking-wider uppercase font-light"
            >
              Voir la Cave
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-white/60 cursor-pointer group"
          onClick={scrollToMenu}
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent group-hover:via-emerald-400/80 transition-colors duration-500" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-emerald-400/40 group-hover:border-t-emerald-400/80 transition-colors duration-500" />
        </motion.div>
      </motion.div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default ChampagnesVinsHeroSection;