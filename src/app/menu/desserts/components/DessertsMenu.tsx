'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Dessert {
  name: string;
  price: string;
  shortDescription: string;
  description: string;
  ingredients?: string;
}

interface ExpandedItems {
  [key: string]: boolean;
}

const DessertsMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const desserts: Dessert[] = [
    {
      name: "CRÈME BRÛLÉE",
      price: "80",
      shortDescription: "Dessert crémeux traditionnel français",
      description: "Une texture onctueuse et raffinée avec une surface caramélisée"
    },
    {
      name: "CHOU PRALINÉ",
      price: "80",
      shortDescription: "Avec sa boule de glace vanille",
      description: "Délicieuse pâte à choux garnie accompagnée d'une glace onctueuse"
    },
    {
      name: "TARTE AU CITRON",
      price: "80",
      shortDescription: "Tarte française acidulée",
      description: "Pâtisserie équilibrée entre douceur et fraîcheur"
    },
    {
      name: "GÂTEAU MOELLEUX",
      price: "80",
      shortDescription: "Passion et mangue",
      description: "Texture moelleuse avec des notes exotiques rafraîchissantes"
    },
    {
      name: "ASSIETTE DE FRUITS",
      price: "80",
      shortDescription: "Sélection de fruits de saison",
      description: "Fraîcheur et vitamines dans une présentation soignée"
    },
    {
      name: "TIRAMISU",
      price: "80",
      shortDescription: "Spécialité italienne gourmande",
      description: "Dessert crémeux aux saveurs authentiques d'Italie"
    },
    {
      name: "NOUGAT GLACÉ",
      price: "80",
      shortDescription: "Dessert glacé raffiné",
      description: "Fraîcheur glacée avec une texture fondante et croquante"
    },
    {
      name: "FONDANT AU CHOCOLAT",
      price: "80",
      shortDescription: "Dessert chocolaté chaud",
      description: "Gâteau moelleux avec un cœur fondant irrésistible"
    },
    {
      name: "COUPE FONDANT AU CHOCOLAT",
      price: "80",
      shortDescription: "Présentation élégante du fondant",
      description: "Notre fondant servi dans une présentation raffinée"
    },
    {
      name: "COOKIE TANGERINO",
      price: "80",
      shortDescription: "Biscuit artisanal maison",
      description: "Cookie croustillant préparé selon notre recette traditionnelle"
    }
  ];

  const specialty: Dessert & { ingredients: string } = {
    name: "CAFÉ GOURMAND",
    price: "80",
    shortDescription: "Fondant au chocolat, glace vanille, crème brûlée",
    ingredients: "",
    description: "L'accord parfait entre café expresso et trio de desserts miniatures"
  };

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
    <div id="desserts-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          
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
              Desserts
            </motion.h1>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>

          {/* Desserts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {desserts.map((dessert, index) => (
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
                    {dessert.name}
                  </h3>
                  <span className="text-lg font-light text-amber-400 ml-4">
                    {dessert.price}
                  </span>
                </div>
                
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                
                <p className="text-slate-300 font-light leading-relaxed mb-4 text-sm">
                  {dessert.shortDescription}
                </p>
                
                {dessert.ingredients && dessert.ingredients.trim() && (
                  <p className="text-slate-400 font-light leading-relaxed mb-4 text-xs italic">
                    {dessert.ingredients}
                  </p>
                )}
                
                <div 
                  className="mt-2 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleDescription('dessert', index)}
                >
                  <span className="mr-1">{expandedItems[`dessert-${index}`] ? 'Moins' : 'Détails'}</span>
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
                      transform: expandedItems[`dessert-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                <AnimatePresence>
                  {expandedItems[`dessert-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                        {dessert.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Specialty Café Gourmand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-amber-500/20 transition-all duration-500 shadow-2xl hover:shadow-amber-500/10 max-w-2xl w-full"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
              }}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 mb-3">
                  {specialty.name}
                </h3>
                
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                
                <div className="text-2xl font-light text-amber-400 mb-6">
                  {specialty.price}
                </div>
                
                <p className="text-slate-300 font-light leading-relaxed mb-4">
                  {specialty.shortDescription}
                </p>
                
                <div 
                  className="mt-4 text-xs text-amber-400 opacity-70 flex items-center justify-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleDescription('specialty', 0)}
                >
                  <span className="mr-1">{expandedItems['specialty-0'] ? 'Moins' : 'Détails'}</span>
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
                      transform: expandedItems['specialty-0'] ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                <AnimatePresence>
                  {expandedItems['specialty-0'] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                        {specialty.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DessertsMenu;