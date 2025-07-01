'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChampagneVinsMenu = () => {
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );
  
    if (menuRef.current) {
      observer.observe(menuRef.current);
    }
  
    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  // Champagnes data
  const champagnes = [
    { name: 'Laurent Perrier Brut', price: '1600' },
    { name: 'Laurent Perrier Rosé', price: '2900' },
    { name: 'Laurent Perrier Brut Magnum', price: '2900' },
    { name: 'Laurent Perrier Grand Siècle', price: '4800' },
    { name: 'Dom Pérignon', price: '7000' },
    { name: 'Armand de Brignac', price: '9000' }
  ];

  // Moroccan wines data
  const moroccanWines = {
    blanc: [
      { name: 'Beauvallon', bottle: '290', half: '-', glass: '-' },
      { name: 'Médaillon', bottle: '340', half: '180', glass: '-' },
      { name: 'S de Siroua', bottle: '390', half: '-', glass: '-' },
      { name: 'Aït Souala', bottle: '420', half: '-', glass: '-' },
      { name: 'CB Signature', bottle: '480', half: '-', glass: '-' },
      { name: 'CB Initiales', bottle: '540', half: '-', glass: '-' },
      { name: 'Château Rosiane', bottle: '580', half: '-', glass: '-' }
    ],
    rouge: [
      { name: 'Beauvallon', bottle: '290', half: '-', glass: '-' },
      { name: 'Médaillon', bottle: '340', half: '180', glass: '-' },
      { name: 'S de Siroua', bottle: '390', half: '-', glass: '-' },
      { name: 'CB Signature', bottle: '480', half: '-', glass: '-' },
      { name: 'CB Initiales', bottle: '540', half: '-', glass: '-' },
      { name: 'Azayi', bottle: '590', half: '-', glass: '-' },
      { name: 'Château Rosiane', bottle: '580', half: '-', glass: '-' },
      { name: 'Tandem', bottle: '600', half: '-', glass: '-' }
    ],
    rose: [
      { name: 'Médaillon', bottle: '340', half: '-', glass: '-' },
      { name: 'S de Siroua', bottle: '390', half: '-', glass: '-' }
    ]
  };

  // World wines data
  const worldWines = {
    blanc: [
      { name: 'Marqués de Caceres', bottle: '320', half: '-', glass: '110' },
      { name: 'Sangre de Toro', bottle: '340', half: '-', glass: '-' },
      { name: 'Viña Esmeralda', bottle: '360', half: '-', glass: '-' },
      { name: 'Domaine Chiroulet', bottle: '360', half: '-', glass: '110' },
      { name: 'Les Abeilles Colombo', bottle: '390', half: '-', glass: '-' },
      { name: 'Bourgogne Chardonnay Rodet', bottle: '540', half: '-', glass: '-' },
      { name: 'Chablis Tremblay', bottle: '560', half: '-', glass: '-' },
      { name: 'Sancerre', bottle: '590', half: '-', glass: '-' }
    ],
    rouge: [
      { name: 'La Vieille Ferme Ventoux', bottle: '290', half: '-', glass: '-' },
      { name: 'Fleur de Cazeau Bordeaux', bottle: '320', half: '-', glass: '110' },
      { name: 'Sangre de Toro', bottle: '340', half: '-', glass: '-' },
      { name: 'Hauts de Sainte Marie', bottle: '360', half: '-', glass: '-' },
      { name: 'Abeilles Colombo Côtes de Rhône', bottle: '390', half: '-', glass: '-' },
      { name: 'Marqués de Caceres', bottle: '420', half: '-', glass: '110' },
      { name: 'La Celia Reserva Malbec', bottle: '420', half: '-', glass: '-' },
      { name: 'Tarapaca Reserva Carmenere', bottle: '390', half: '-', glass: '-' },
      { name: 'Brouilly les Jarrons Thorin', bottle: '520', half: '-', glass: '-' },
      { name: 'Bourgogne Pinot Noir Rodet', bottle: '560', half: '-', glass: '-' },
      { name: 'Sancerre', bottle: '590', half: '-', glass: '-' },
      { name: 'Château Lafitte', bottle: '640', half: '-', glass: '-' },
      { name: 'Marques de Varga Reserva', bottle: '690', half: '-', glass: '-' },
      { name: 'Chamirey Mercury Bourgogne', bottle: '900', half: '-', glass: '-' },
      { name: 'Châteauneuf-du-Pape', bottle: '1200', half: '-', glass: '-' }
    ],
    rose: [
      { name: 'Manon Côte de Provence', bottle: '320', half: '-', glass: '110' },
      { name: 'M de Minuty', bottle: '440', half: '-', glass: '-' },
      { name: 'Pétales de Rose', bottle: '460', half: '-', glass: '-' },
      { name: 'Minuty Prestige', bottle: '590', half: '-', glass: '-' }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Simple wine section component (like champagnes)
  const SimpleWineSection = ({ title, items, className = "" }) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={`group relative p-8 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 ${className}`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
      }}
    >
      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 mb-6 text-center">
        {title}
      </h3>
      
      <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-6 mx-auto" />
      
      <motion.div variants={containerVariants} className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex justify-between items-center py-3 px-2 border-b border-white/10 group/item hover:bg-white/5 transition-colors duration-300"
          >
            <span className="text-slate-300 group-hover/item:text-amber-200 transition-colors duration-300 font-light">
              {item.name}
            </span>
            <span className="text-amber-400 font-light">
              {item.price}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  // Table wine section component (with bottle/half/glass columns)
  const TableWineSection = ({ title, items, hasHalf = true, className = "" }) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={`group relative p-8 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 ${className}`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
      }}
    >
      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 mb-6 text-center">
        {title}
      </h3>
      
      <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-6 mx-auto" />
      
      {/* Table header */}
      <div className={`grid ${hasHalf ? 'grid-cols-[2fr_0.7fr_0.7fr_0.7fr]' : 'grid-cols-[2fr_0.7fr_0.7fr]'} text-amber-400/80 font-light text-sm mb-4 border-b border-white/20 pb-2`}>
        <div className="text-left">Nom</div>
        <div className="text-center">75cl</div>
        {hasHalf && <div className="text-center">37.5cl</div>}
        <div className="text-center">Verre</div>
      </div>
      
      <motion.div variants={containerVariants} className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`grid ${hasHalf ? 'grid-cols-[2fr_0.7fr_0.7fr_0.7fr]' : 'grid-cols-[2fr_0.7fr_0.7fr]'} py-3 px-2 border-b border-white/5 group/item hover:bg-white/5 transition-colors duration-300`}
          >
            <span className="text-slate-300 group-hover/item:text-amber-200 transition-colors duration-300 font-light pr-2">
              {item.name}
            </span>
            <span className="text-center text-amber-400/80 text-sm">
              {item.bottle}
            </span>
            {hasHalf && (
              <span className="text-center text-amber-400/80 text-sm">
                {item.half}
              </span>
            )}
            <span className="text-center text-amber-400/80 text-sm">
              {item.glass}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  return (
    <div ref={menuRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-amber-600/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-light text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Champagnes & Vins
            </motion.h1>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>

          {/* Champagnes Section */}
          <div className="mb-20">
            <SimpleWineSection 
              title="CHAMPAGNES" 
              items={champagnes}
              className="max-w-2xl mx-auto"
            />
          </div>

          {/* Vins Marocains Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-light text-white text-center mb-12">
              Vins Marocains
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <TableWineSection 
                title="BLANC" 
                items={moroccanWines.blanc}
                hasHalf={true}
              />
              <TableWineSection 
                title="ROUGE" 
                items={moroccanWines.rouge}
                hasHalf={true}
              />
              <TableWineSection 
                title="ROSÉ" 
                items={moroccanWines.rose}
                hasHalf={false}
              />
            </div>
          </motion.div>

          {/* Vins du Monde Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-light text-white text-center mb-12">
              Vins du Monde
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <TableWineSection 
                title="BLANC" 
                items={worldWines.blanc}
                hasHalf={false}
              />
              <TableWineSection 
                title="ROUGE" 
                items={worldWines.rouge}
                hasHalf={false}
              />
              <TableWineSection 
                title="ROSÉ" 
                items={worldWines.rose}
                hasHalf={false}
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="flex items-center justify-center mt-16 pb-8">
        <div className="h-px w-16 bg-amber-400/40"></div>
        <div className="mx-3 text-amber-200/60">✦</div>
        <div className="h-px w-16 bg-amber-400/40"></div>
      </div>
    </div>
  );
};

export default ChampagneVinsMenu;