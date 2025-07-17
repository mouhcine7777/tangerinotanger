'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ExpandedItems {
  [key: string]: boolean;
}

const RomeNewYorkMenu = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const menuItems = [
    {
      name: "HAMBURGER AMÉRICAIN",
      price: "120",
      description: "Hamburger de style américain",
      details: "Préparation classique selon la tradition américaine"
    },
    {
      name: "HAMBURGER AU CAMEMBERT FRIT",
      price: "140",
      description: "Hamburger avec camembert frit",
      details: "Hamburger garni de camembert frit pour une touche gourmande"
    },
    {
      name: "HAMBURGER AU POULET",
      price: "140",
      description: "Hamburger au poulet",
      details: "Hamburger préparé avec du poulet"
    },
    {
      name: "PÂTES AUX FRUITS DE MER",
      price: "180",
      description: "Pâtes aux fruits de mer",
      details: "Pâtes accompagnées de fruits de mer"
    },
    {
      name: "PIZZA AU FROMAGE",
      price: "80",
      description: "Pizza au fromage",
      details: "Pizza traditionnelle au fromage"
    },
    {
      name: "PIZZA VÉGÉTARIENNE",
      price: "80",
      description: "Pizza végétarienne",
      details: "Pizza garnie de légumes"
    },
    {
      name: "PIZZA AU THON ET AUX OIGNONS",
      price: "90",
      description: "Pizza au thon et aux oignons",
      details: "Pizza garnie de thon et d'oignons"
    },
    {
      name: "PIZZA AUX FRUITS DE MER",
      price: "120",
      description: "Pizza aux fruits de mer",
      details: "Pizza garnie de fruits de mer"
    },
    {
      name: "RISOTTO AUX FRUITS DE MER",
      price: "140",
      description: "Risotto aux fruits de mer",
      details: "Risotto préparé avec des fruits de mer"
    },
    {
      name: "RISOTTO AUX CHAMPIGNONS",
      price: "120",
      description: "Risotto aux champignons",
      details: "Risotto préparé avec des champignons"
    }
  ];

  const toggleDescription = (index: number): void => {
    const key = `item-${index}`;
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
        delayChildren: 0.3
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
    <div id="rome-newyork-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-24 w-56 h-56 bg-amber-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/2 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-amber-600/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/2 w-36 h-36 bg-orange-500/2 rounded-full blur-2xl"></div>
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
              De Rome à New York
            </motion.h1>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {menuItems.map((item, index) => (
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
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-xl font-light text-amber-400">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                
                {/* Description directly visible */}
                <p className="text-slate-400 font-light text-sm mt-3 pt-3 border-t border-white/10">
                  {item.description}
                </p>
                
                {/* Details button */}
                <div 
                  className="mt-3 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleDescription(index)}
                >
                  <span className="mr-1">{expandedItems[`item-${index}`] ? 'Moins' : 'Détails'}</span>
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
                      transform: expandedItems[`item-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                {/* Expandable additional details */}
                <AnimatePresence>
                  {expandedItems[`item-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 font-light text-xs mt-2 pt-2 border-t border-white/5">
                        {item.details}
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

export default RomeNewYorkMenu;