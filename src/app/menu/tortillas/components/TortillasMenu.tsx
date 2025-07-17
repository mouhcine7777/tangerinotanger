'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ExpandedItems {
  [key: string]: boolean;
}

const TortillasFrituresMenu = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const allItems = [
    // Tortillas
    {
      name: "TORTILLA AUX CREVETTES",
      price: "90",
      category: "Tortillas",
      description: "Tortilla espagnole traditionnelle garnie de crevettes",
      details: "Omelette épaisse aux pommes de terre et crevettes fraîches, cuite selon la tradition espagnole"
    },
    {
      name: "TORTILLA AUX CHAMPIGNONS",
      price: "80",
      category: "Tortillas",
      description: "Tortilla aux champignons de saison",
      details: "Omelette aux pommes de terre et champignons frais, dorée à la perfection"
    },
    {
      name: "TORTILLA AU CHORIZO DE BELLOTA",
      price: "90",
      category: "Tortillas",
      description: "Tortilla au chorizo de gland ibérique",
      details: "Tortilla enrichie du goût authentique du chorizo de bellota, produit d'exception"
    },
    {
      name: "TORTILLA AU MANCHEGO \"GRAN CESAR\"",
      price: "90",
      category: "Tortillas",
      description: "Tortilla au fromage manchego affiné",
      details: "Tortilla crémeuse au fromage manchego Gran Cesar, fromage de brebis aux saveurs complexes"
    },
    {
      name: "OEUFS AU PLAT SUR POMMES DE TERRE FAÇON LUCIO",
      price: "70",
      category: "Tortillas",
      description: "Oeufs au plat sur pommes de terre selon la recette Lucio",
      details: "Préparation signature d'oeufs au plat sur lit de pommes de terre, selon la méthode traditionnelle"
    },
    // Fritures
    {
      name: "POIVRONS PADRON",
      price: "80",
      category: "Fritures",
      description: "Petits poivrons verts frits à l'huile d'olive",
      details: "Poivrons padron traditionnels, frits rapidement pour conserver leur saveur et leur texture"
    },
    {
      name: "CROQUETTES DE POULET",
      price: "70",
      category: "Fritures",
      description: "Croquettes de poulet dorées et croustillantes",
      details: "Croquettes maison au poulet, panées et frites jusqu'à obtenir une texture parfaite"
    },
    {
      name: "AUBERGINES FRITES AVEC DU MIEL",
      price: "70",
      category: "Fritures",
      description: "Aubergines frites accompagnées de miel",
      details: "Aubergines finement tranchées et frites, servies avec un filet de miel pour un contraste sucré-salé"
    },
    {
      name: "BLANC DE POULET FRIT",
      price: "90",
      category: "Fritures",
      description: "Blanc de poulet pané et frit",
      details: "Blanc de poulet tendre, pané et frit pour obtenir une croûte dorée et croustillante"
    },
    {
      name: "POISSON FRIT MARINÉ",
      price: "80",
      category: "Fritures",
      description: "Poisson du jour mariné et frit",
      details: "Poisson frais mariné dans les épices méditerranéennes, puis frit pour une texture parfaite"
    },
    {
      name: "TÊTES DE CALAMAR",
      price: "140",
      category: "Fritures",
      description: "Têtes de calamar frites",
      details: "Têtes de calamar fraîches, délicatement frites pour préserver leur tendreté"
    },
    {
      name: "GAMBAS EN TEMPURA",
      price: "140",
      category: "Fritures",
      description: "Gambas enrobées dans une pâte tempura légère",
      details: "Gambas fraîches enrobées d'une pâte tempura aérienne, frites à la perfection"
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
        staggerChildren: 0.08,
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

  const tortillas = allItems.filter(item => item.category === "Tortillas");
  const fritures = allItems.filter(item => item.category === "Fritures");

  return (
    <div id="tortillas-fritures-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-24 w-56 h-56 bg-amber-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/2 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-amber-600/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/2 w-36 h-36 bg-orange-500/2 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-5xl font-light text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Tortillas & Fritures
            </motion.h1>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Tortillas Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-3xl font-light text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Tortillas
            </motion.h2>
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {tortillas.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 bg-black/25 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-amber-500/8"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }}
                >
                  {/* Content */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right ml-3">
                      <span className="text-lg font-light text-amber-400">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-16 transition-all duration-500" />
                  
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
                  <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Fritures Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-3xl font-light text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Fritures
            </motion.h2>
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {fritures.map((item, index) => {
                const globalIndex = tortillas.length + index;
                return (
                  <motion.div
                    key={globalIndex}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative p-6 bg-black/25 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-amber-500/8"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                    }}
                  >
                    {/* Content */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors duration-300 leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      <div className="text-right ml-3">
                        <span className="text-lg font-light text-amber-400">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-16 transition-all duration-500" />
                    
                    {/* Description directly visible */}
                    <p className="text-slate-400 font-light text-sm mt-3 pt-3 border-t border-white/10">
                      {item.description}
                    </p>
                    
                    {/* Details button */}
                    <div 
                      className="mt-3 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                      onClick={() => toggleDescription(globalIndex)}
                    >
                      <span className="mr-1">{expandedItems[`item-${globalIndex}`] ? 'Moins' : 'Détails'}</span>
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
                          transform: expandedItems[`item-${globalIndex}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.3s ease' 
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    
                    {/* Expandable additional details */}
                    <AnimatePresence>
                      {expandedItems[`item-${globalIndex}`] && (
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
                    <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Footer decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center mt-16"
          >
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TortillasFrituresMenu;