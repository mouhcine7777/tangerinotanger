'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ExpandedItems {
  [key: string]: boolean;
}

const CassolettesMenu = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const cassolettes = [
    {
      name: "CASSOLETTE DE PALOURDES",
      price: "120",
      description: "Palourdes fraîches mijotées dans leur jus naturel",
      details: "Spécialité de palourdes servie chaude dans une cassolette traditionnelle"
    },
    {
      name: "CASSOLETTE DE CHAMPIGNONS",
      price: "70",
      description: "Champignons de saison dans une sauce crémeuse",
      details: "Préparation végétarienne aux champignons, mijotée avec finesse"
    },
    {
      name: "CASSOLETTE DE VIANDE HACHÉE FAÇON TAGINE",
      price: "90",
      description: "Viande hachée épicée selon la tradition du tagine",
      details: "Recette inspirée du tagine traditionnel, aux épices orientales"
    },
    {
      name: "CASSOLETTE DE CALAMARS ET SAUCE TOMATE FAÇON TAGINE",
      price: "160",
      description: "Calamars tendres dans une sauce tomate épicée",
      details: "Calamars mijotés dans une sauce tomate épicée, style tagine"
    },
    {
      name: "ESPADON ET CREVETTES FAÇON \"RIGAMONTI\"",
      price: "180",
      description: "Espadon et crevettes selon la recette signature",
      details: "Création signature associant espadon et crevettes selon la méthode Rigamonti"
    },
    {
      name: "POULPE, CREVETTES, ET POMMES DE TERRE À L'AIL",
      price: "180",
      description: "Poulpe, crevettes et pommes de terre à l'ail",
      details: "Mélange de fruits de mer et pommes de terre, parfumé à l'ail"
    },
    {
      name: "MERLAN, CREVETTES, ET PALOURDES AUX OIGNONS",
      price: "180",
      description: "Merlan, crevettes et palourdes aux oignons confits",
      details: "Trio de poissons et fruits de mer, accompagné d'oignons confits"
    },
    {
      name: "POMMES DE TERRE AUX CREVETTES ET CALAMAR À LA SAUCE TOMATE",
      price: "180",
      description: "Pommes de terre, crevettes et calamars à la tomate",
      details: "Pommes de terre garnies de fruits de mer dans une sauce tomate maison"
    }
  ];

  const toggleDescription = (index: number): void => {
    const key = `cassolette-${index}`;
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
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="cassolettes-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-12 w-48 h-48 bg-amber-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-28 left-20 w-64 h-64 bg-amber-400/4 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-36 h-36 bg-amber-300/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-amber-600/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl font-light text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Cassolettes
            </motion.h1>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Cassolettes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {cassolettes.map((cassolette, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))'
                }}
              >
                {/* Content */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 leading-tight">
                      {cassolette.name}
                    </h3>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-xl font-light text-amber-400">
                      {cassolette.price}
                    </span>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                
                {/* Description directly visible */}
                <p className="text-slate-400 font-light text-sm mt-3 pt-3 border-t border-white/10">
                  {cassolette.description}
                </p>
                
                {/* Details button */}
                <div 
                  className="mt-3 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleDescription(index)}
                >
                  <span className="mr-1">{expandedItems[`cassolette-${index}`] ? 'Moins' : 'Détails'}</span>
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
                      transform: expandedItems[`cassolette-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                {/* Expandable additional details */}
                <AnimatePresence>
                  {expandedItems[`cassolette-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 font-light text-xs mt-2 pt-2 border-t border-white/5">
                        {cassolette.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mt-16"
          >
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CassolettesMenu;