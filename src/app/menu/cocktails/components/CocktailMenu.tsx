'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ExpandedItems {
  [key: string]: boolean;
}

const CocktailsMenu = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  const cocktails = [
    {
      name: "SUMMER BREEZE",
      price: "160",
      ingredients: "Vodka Russian Standard , Fresh Watermelon",
      description: "Rafraîchissant cocktail d'été avec la fraîcheur de la pastèque"
    },
    {
      name: "LEMONICA LEWHISKY",
      price: "160",
      ingredients: "Whisky Grants , Amareto di Saronno , Lemon , Sirop Green Apple , Black pepper",
      description: "Une création audacieuse mêlant whisky, amaretto et poivre noir"
    },
    {
      name: "TSAR WARS",
      price: "160",
      ingredients: "Vodka Russian , Sirop Canna , Lemon , Strawberry",
      description: "Un cocktail royal aux notes de fraise et citron"
    },
    {
      name: "GIN SLIM",
      price: "160",
      ingredients: "Gin dry Bombay , Martini Bianco , Lychee , Mint",
      description: "Élégant mélange de gin, litchi et menthe fraîche"
    },
    {
      name: "RUMINTIC",
      price: "160",
      ingredients: "Bacardi Gold , Anana , Licor cacao blanc , Sirop caramel , Mint",
      description: "Cocktail tropical aux saveurs d'ananas et cacao"
    },
    {
      name: "BASILIC INSTINCT",
      price: "160",
      ingredients: "Jack Daniel Honey , Aperol , Sirop Ginger , Basilic , Martini Dry , Lemon",
      description: "Cocktail aromatique au basilic frais et miel de Jack Daniel's"
    },
    {
      name: "BOUSSA NOVA",
      price: "160",
      ingredients: "Cachaça , Sirop Canna , Cordial Lime , Passion Fruit , Licor Cassis",
      description: "Inspiration brésilienne aux fruits de la passion"
    },
    {
      name: "T'ES QUI LÀ ?",
      price: "160",
      ingredients: "Tequila Camino , Licor Raspberry , Cordial Lime , Sirop Canna",
      description: "Cocktail mystérieux aux saveurs de framboise et lime"
    }
  ];

  const shots = [
    {
      name: "Par 4",
      price: "300",
      ingredients: "Passion Vodka , Tequila Camino , Sambuca , Jagermeister",
      description: "Sélection de 4 shots pour une soirée mémorable"
    },
    {
      name: "Par mètre",
      price: "800",
      ingredients: "Passion Vodka , Tequila Camino , Sambuca , Jagermeister",
      description: "Le défi ultime pour les vrais connaisseurs"
    }
  ];

  const softs = [
    {
      category: "EAUX MINÉRALES 75CL",
      items: [
        { name: "Ain Saiss", price: "50" },
        { name: "Oulmés", price: "50" },
        { name: "Evian", price: "90" },
        { name: "Evian Pétillante", price: "90" }
      ]
    },
    {
      category: "BOISSONS",
      items: [
        { name: "Soda", price: "50" },
        { name: "Jus frais", price: "90" },
        { name: "Café Expresso", price: "50" },
        { name: "Thé", price: "50" }
      ]
    }
  ];

  const toggleDescription = (type: string, index: number): void => {
    const key = `${type}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
    <div id="cocktails-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Cocktails Section */}
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
              Cocktails Signature
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {cocktails.map((cocktail, index) => (
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                      {cocktail.name}
                    </h3>
                    <span className="text-lg font-light text-amber-400 ml-4">
                      {cocktail.price}
                    </span>
                  </div>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                  
                  <p className="text-slate-300 font-light leading-relaxed mb-4 text-sm">
                    {cocktail.ingredients}
                  </p>
                  
                  {cocktail.description && (
                    <div 
                      className="mt-2 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                      onClick={() => toggleDescription('cocktail', index)}
                    >
                      <span className="mr-1">{expandedItems[`cocktail-${index}`] ? 'Less' : 'Details'}</span>
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
                          transform: expandedItems[`cocktail-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.3s ease' 
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                  
                  <AnimatePresence>
                    {expandedItems[`cocktail-${index}`] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                          {cocktail.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Shots Section */}
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
              Shots
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {shots.map((shot, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative p-10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-amber-500/20 transition-all duration-500 shadow-2xl hover:shadow-amber-500/10"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 mb-3">
                      {shot.name}
                    </h3>
                    
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                    
                    <div className="text-2xl font-light text-amber-400 mb-6">
                      {shot.price}
                    </div>
                    
                    <p className="text-slate-300 font-light leading-relaxed mb-4">
                      {shot.ingredients}
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Drinks Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.h2 
              className="text-4xl font-medium text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Soft & Boissons
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
              {softs.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  variants={itemVariants}
                  className="group relative p-8 bg-black/25 backdrop-blur-md border border-white/10 hover:border-amber-500/20 transition-all duration-500 shadow-lg"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover:text-amber-200 transition-colors duration-300">
                    {section.category}
                  </h3>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mx-auto mb-8" />
                  
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex justify-between items-center py-3 border-b border-white/5 hover:border-amber-500/20 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-slate-300 font-light text-lg">
                          {item.name}
                        </span>
                        <span className="text-amber-400 font-light text-base">
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CocktailsMenu;