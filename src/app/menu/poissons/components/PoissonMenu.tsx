'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ExpandedItems {
  [key: string]: boolean;
}

const PoissonViandesMenu = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const poissons = [
    {
      name: "CALAMARS GRILLÉS",
      price: "280",
      description: "Calamars tendres grillés à la perfection, aux saveurs marines authentiques"
    },
    {
      name: "ESPADON GRILLÉ",
      price: "260",
      description: "Tranche d'espadon noble, grillée avec finesse pour préserver sa texture ferme"
    },
    {
      name: "SOLE GRILLÉE",
      price: "280",
      description: "Poisson délicat aux chairs blanches et fondantes, sublimé par la grillade"
    },
    {
      name: "SAINT-PIERRE GRILLÉE",
      price: "320",
      description: "Poisson prestigieux à la chair nacrée, révélant toute sa noblesse"
    },
    {
      name: "THON ROUGE MI-CUIT GRILLÉ",
      price: "280",
      description: "Thon rouge de qualité supérieure, saisi pour conserver son cœur rosé"
    },
    {
      name: "PAVÉ DE BAR DE LIGNE",
      price: "340",
      description: "Bar sauvage pêché à la ligne, pavé généreux aux saveurs iodées intenses"
    },
    {
      name: "SAUMON GRILLÉ",
      price: "340",
      description: "Saumon frais grillé, chair rosée et fondante aux notes délicatement fumées"
    },
    {
      name: "SÉLECTION DE POISSON",
      price: "580",
      subtitle: "Poisson du jour",
      special: "2 pers",
      description: "Découverte du jour selon l'arrivage, préparation raffinée pour deux convives"
    },
    {
      name: "LANGOUSTINE GRILLÉE",
      price: "450",
      weight: "450 gr",
      description: "Langoustines fraîches grillées, crustacés d'exception à la chair sucrée"
    },
    {
      name: "CREVETTES ROYALES GRILLÉES",
      price: "200",
      unit: "1 pièce",
      description: "Crevette royale de belle taille, grillée pour exalter sa saveur marine"
    }
  ];

  const viandes = [
    {
      name: "BROCHETTES DE VIANDE HACHÉE",
      price: "140",
      description: "Brochettes traditionnelles de viande hachée épicée, grillées au charbon"
    },
    {
      name: "BROCHETTES DE VOLAILLE",
      price: "120",
      description: "Tendres morceaux de volaille marinés et grillés sur brochettes"
    },
    {
      name: "BROCHETTES DE FILET DE BŒUF",
      price: "220",
      description: "Cubes de filet de bœuf tendre, grillés à point sur brochettes"
    },
    {
      name: "BROCHETTES DE POULET",
      price: "120",
      description: "Morceaux de poulet marinés et grillés sur brochettes"
    },
    {
      name: "ÉMINCÉ DE POULET",
      price: "260",
      subtitle: "Sauce aux champignons et riz basmati",
      description: "Lamelles de poulet fondantes accompagnées d'une onctueuse sauce aux champignons"
    },
    {
      name: "ENTRECÔTE EN ÉMINCÉ",
      price: "280",
      subtitle: "Sauce aux champignons et riz basmati",
      description: "Émincé d'entrecôte savoureuse, sublimée par une sauce crémeuse aux champignons"
    },
    {
      name: "ENTRECÔTE GRILLÉE",
      price: "280",
      description: "Entrecôte maturée grillée, viande persillée aux saveurs intenses"
    },
    {
      name: "FILET DE BŒUF GRILLÉ",
      price: "380",
      description: "Pièce noble du bœuf, filet tendre et juteux grillé à votre convenance"
    },
    {
      name: "TARTINE DE FILET DE BOEUF",
      price: "90",
      description: "Tartine garnie de filet de bœuf"
    },
    {
      name: "POULET À L'AIL",
      price: "90",
      description: "Poulet savoureux préparé à l'ail"
    }
  ];

  const toggleDescription = (type: string, index: number): void => {
    const key = `${type}-${index}`;
    setExpandedItems(prev => {
      // Close all other expanded items
      const newState: ExpandedItems = {};
      // Only open the clicked item if it wasn't already open
      if (!prev[key]) {
        newState[key] = true;
      }
      return newState;
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
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

  return (
    <div id="poisson-viandes-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Poisson Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              className="text-4xl font-medium text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Poisson
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {poissons.map((poisson, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                        {poisson.name}
                      </h3>
                      {poisson.subtitle && (
                        <p className="text-sm text-amber-300 mt-1 italic">{poisson.subtitle}</p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-lg font-light text-amber-400">
                        {poisson.price}
                      </span>
                      {poisson.special && (
                        <span className="block text-xs text-amber-300 bg-amber-500/20 px-2 py-1 rounded mt-1">
                          {poisson.special}
                        </span>
                      )}
                      {poisson.weight && (
                        <span className="block text-xs text-amber-300 bg-amber-500/20 px-2 py-1 rounded mt-1">
                          {poisson.weight}
                        </span>
                      )}
                      {poisson.unit && (
                        <span className="block text-xs text-amber-300 bg-amber-500/20 px-2 py-1 rounded mt-1">
                          {poisson.unit}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                  
                  {poisson.description && (
                    <div 
                      className="mt-2 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                      onClick={() => toggleDescription('poisson', index)}
                    >
                      <span className="mr-1">{expandedItems[`poisson-${index}`] ? 'Moins' : 'Détails'}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ 
                          transform: expandedItems[`poisson-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.3s ease' 
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                  
                  <AnimatePresence>
                    {expandedItems[`poisson-${index}`] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                          {poisson.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Viandes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <motion.h2 
              className="text-4xl font-medium text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Viandes
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {viandes.map((viande, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                        {viande.name}
                      </h3>
                      {viande.subtitle && (
                        <p className="text-sm text-amber-300 mt-1 italic">{viande.subtitle}</p>
                      )}
                    </div>
                    <span className="text-lg font-light text-amber-400 ml-4">
                      {viande.price}
                    </span>
                  </div>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                  
                  {viande.description && (
                    <div 
                      className="mt-2 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                      onClick={() => toggleDescription('viande', index)}
                    >
                      <span className="mr-1">{expandedItems[`viande-${index}`] ? 'Moins' : 'Détails'}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ 
                          transform: expandedItems[`viande-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.3s ease' 
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                  
                  <AnimatePresence>
                    {expandedItems[`viande-${index}`] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                          {viande.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PoissonViandesMenu;