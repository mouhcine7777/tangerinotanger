'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CocktailsHeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('cocktails-menu');
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
          src="/cocktails.jpg" // Replace with your cocktails hero image
          alt="Cocktails élégants"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Elegant overlay with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30" />
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
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
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
            <span className="block">Cocktails</span>
            <span className="block text-amber-400 font-light italic">
              & Créations
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
            Découvrez notre collection exclusive de cocktails artisanaux, 
            où chaque création raconte une histoire de passion et d'excellence.
            <span className="block mt-4 text-amber-300/80 text-base md:text-lg font-extralight italic">
              L'art de la mixologie à son apogée
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToMenu}
              className="group relative px-12 py-4 bg-black/30 text-white font-light text-lg tracking-[0.15em] border-2 border-white/20 backdrop-blur-lg transition-all duration-700 hover:border-amber-400/60 hover:bg-black/40 hover:text-amber-50"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(251, 191, 36, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              {/* Button background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 flex items-center justify-center gap-4">
                Voir la Carte
                <motion.div
                  className="flex items-center gap-1"
                  animate={{ 
                    x: [0, 4, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-[1px] bg-white/60 group-hover:bg-amber-400/80 transition-colors duration-500" />
                  <div className="w-0 h-0 border-l-[6px] border-l-white/60 group-hover:border-l-amber-400/80 border-y-[3px] border-y-transparent transition-colors duration-500" />
                </motion.div>
              </span>
            </motion.button>
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
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent group-hover:via-amber-400/80 transition-colors duration-500" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-400/40 group-hover:border-t-amber-400/80 transition-colors duration-500" />
        </motion.div>
      </motion.div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default CocktailsHeroSection;