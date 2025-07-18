'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface TapasItem {
  name: string;
  price: string;
  shortDescription: string;
  description: string;
  ingredients?: string;
}

interface ExpandedItems {
  [key: string]: boolean;
}

const TapasEntreesMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});
  
  const tapasItems: TapasItem[] = [
    {
      name: "POIVRONS DU 'PATRON'",
      price: "80",
      shortDescription: "Spécialité maison traditionnelle",
      description: "Poivrons préparés selon la recette spéciale du chef"
    },
    {
      name: "FROMAGE MANCHEGO ANEJO A.O.C",
      price: "180",
      shortDescription: "Fromage espagnol authentique",
      description: "Fromage affiné aux saveurs intenses et caractéristiques"
    },
    {
      name: "JAMBON IBÉRIQUE",
      price: "180",
      shortDescription: "Charcuterie espagnole premium",
      description: "Jambon de qualité supérieure aux saveurs raffinées"
    },
    {
      name: "CHORIZO IBÉRIQUE DE BELLOTA",
      price: "140",
      shortDescription: "Saucisson espagnol traditionnel",
      description: "Chorizo artisanal aux épices authentiques d'Espagne"
    },
    {
      name: "POMMES DE TERRE FAÇON « BRAVAS »",
      price: "60",
      shortDescription: "Accompagnement espagnol classique",
      description: "Pommes de terre préparées dans la tradition madrilène"
    },
    {
      name: "TOMATE AVEC THON ET OIGNON",
      price: "70",
      shortDescription: "Salade méditerranéenne fraîche",
      description: "Mélange harmonieux de saveurs méditerranéennes"
    },
    {
      name: "TOMATE À L'AIL",
      price: "50",
      shortDescription: "Entrée simple et savoureuse",
      description: "Tomates fraîches relevées à l'ail parfumé"
    },
    {
      name: "CROQUETTES AUX FRUITS DE MER",
      price: "80",
      shortDescription: "Bouchées croustillantes de la mer",
      description: "Croquettes dorées garnies de fruits de mer délicats"
    },
    {
      name: "CROQUETTES AU POULET",
      price: "70",
      shortDescription: "Classique espagnol croustillant",
      description: "Croquettes traditionnelles à la garniture fondante"
    },
    {
      name: "CROQUETTES DE JAMBON IBÉRIQUE",
      price: "80",
      shortDescription: "Spécialité premium espagnole",
      description: "Croquettes raffinées au jambon de qualité supérieure"
    },
    {
      name: "CROQUETTES DE POISSON",
      price: "80",
      shortDescription: "Bouchées croustillantes de poisson",
      description: "Croquettes dorées garnies de poisson frais"
    },
    {
      name: "TORTILLA ESPAGNOLE",
      price: "70",
      shortDescription: "Omelette traditionnelle aux pommes de terre",
      description: "Spécialité incontournable de la cuisine espagnole"
    },
    {
      name: "TORTILLA ESPAGNOLE AUX CHAMPIGNONS",
      price: "80",
      shortDescription: "Variante gourmande aux champignons",
      description: "Tortilla enrichie de champignons savoureux"
    },
    {
      name: "TORTILLA ESPAGNOLE AU MANCHEGO GRAN CESAR",
      price: "90",
      shortDescription: "Version fromage premium",
      description: "Tortilla noble au fromage Manchego affiné"
    },
    {
      name: "TORTILLA ESPAGNOLE AU CHORIZO DE BELLOTA",
      price: "90",
      shortDescription: "Tortilla au chorizo artisanal",
      description: "Mariage parfait entre tortilla et chorizo de qualité"
    },
    {
      name: "ANCHOIS AU VINAIGRE",
      price: "80",
      shortDescription: "Poisson mariné traditionnel",
      description: "Anchois frais marinés dans un vinaigre parfumé"
    },
    {
      name: "ANCHOIS FRITS",
      price: "80",
      shortDescription: "Petits poissons croustillants",
      description: "Anchois dorés à la friture méditerranéenne"
    },
    {
      name: "SALADE RUSSE",
      price: "70",
      shortDescription: "Salade composée classique",
      description: "Mélange généreux de légumes et mayonnaise"
    },
    {
      name: "POISSON BLANC MARINÉ ET FRIT",
      price: "80",
      shortDescription: "Poisson de mer préparé",
      description: "Filet de poisson blanc mariné puis frit à la perfection"
    },
    {
      name: "CHAMPIGNONS À L'AIL",
      price: "70",
      shortDescription: "Champignons sautés parfumés",
      description: "Champignons frais revenus à l'ail et aux herbes"
    },
    {
      name: "SALPICON DE FRUITS DE MER",
      price: "90",
      shortDescription: "Salade de fruits de mer",
      description: "Mélange rafraîchissant de fruits de mer assaisonnés"
    },
    {
      name: "POULPE À LA GALICIENNE",
      price: "140",
      shortDescription: "Poulpe, purée de pommes de terre",
      description: "Spécialité du nord de l'Espagne aux saveurs authentiques"
    },
    {
      name: "POULE À LA GALICIENNE",
      price: "140",
      shortDescription: "Poule, purée de pommes de terre",
      description: "Spécialité du nord de l'Espagne aux saveurs authentiques"
    },
    {
      name: "CREVETTES À L'AIL",
      price: "120",
      shortDescription: "Crevettes, ail, huile d'olive",
      description: "Crevettes sautées dans l'huile d'olive parfumée à l'ail"
    },
    {
      name: "CREVETTES GRILLÉES",
      price: "130",
      shortDescription: "Crustacés grillés au naturel",
      description: "Crevettes fraîches grillées pour conserver leurs saveurs"
    },
    {
      name: "PALOURDES MARINIÈRES",
      price: "120",
      shortDescription: "Coquillages en sauce",
      description: "Palourdes fraîches cuisinées dans leur jus naturel"
    },
    {
      name: "CALAMARS FRITS",
      price: "160",
      shortDescription: "Encornets croustillants",
      description: "Calamars tendres enrobés d'une panure dorée"
    },
    {
      name: "PETITS CALAMARS FRITS",
      price: "160",
      shortDescription: "Jeunes calamars croustillants",
      description: "Petits calamars tendres frits à la perfection"
    },
    {
      name: "SALADE DE CAMEMBERT FRIT",
      price: "120",
      shortDescription: "Camembert frit, confiture de fraise, laitue, noix, figue sèche",
      description: "Salade originale mêlant fromage chaud et fruits sucrés"
    },
    {
      name: "CREVETTES TEMPURA",
      price: "140",
      shortDescription: "Crevettes en pâte japonaise",
      description: "Crevettes enrobées de tempura légère et croustillante"
    },
    {
      name: "SÉLECTION DE POISSONS FRITS",
      price: "180",
      shortDescription: "Assortiment de poissons variés",
      description: "Plateau de différents poissons frits de la pêche du jour"
    },
    {
      name: "POIVRONS ROUGE AU FOUR AVEC THON",
      price: "90",
      shortDescription: "Légumes farcis méditerranéens",
      description: "Poivrons rouges grillés garnis de thon savoureux"
    },
    {
      name: "SOUPE AUX FRUITS DE MER",
      price: "80",
      shortDescription: "Bouillon de mer parfumé",
      description: "Soupe riche en saveurs marines et fruits de mer"
    },
    {
      name: "SALADE DE CRUDITÉS",
      price: "80",
      shortDescription: "Légumes frais variés",
      description: "Mélange de légumes crus de saison et vinaigrette"
    },
    {
      name: "SALADE PÊCHEUR",
      price: "140",
      shortDescription: "Laitue, tomate, avocat, calamars, crevettes, surimi, saumon fumé, sauce cocktail",
      description: "Salade généreuse aux produits de la mer et sauce délicate"
    },
    {
      name: "SALADE EL TANGERINO",
      price: "140",
      shortDescription: "Crevettes grillées, calamars grillés, espadon grillé, surimi, palourdes",
      description: "Notre salade signature mêlant tous les trésors de l'océan"
    },
    {
      name: "TARTARE DE THON ROUGE",
      price: "140",
      shortDescription: "Poisson cru de qualité premium",
      description: "Thon rouge frais coupé au couteau et assaisonné"
    },
    {
      name: "CARPACCIO DE VEAU",
      price: "120",
      shortDescription: "Tranches de veau, huile d'olive, câpres, parmesan",
      description: "Fines lamelles de veau avec accompagnements italiens"
    },
    {
      name: "CARPACCIO DE THON",
      price: "120",
      shortDescription: "Tranches de thon rouge, huile d'olive, câpres, pesto",
      description: "Thon rouge en fines tranches avec condiments méditerranéens"
    },
    {
      name: "CARPACCIO DE SAUMON",
      price: "120",
      shortDescription: "Saumon frais, 5 baies, gros sel, poivre, câpres, citron, huile d'olive",
      description: "Saumon frais mariné aux épices et aromates délicats"
    },
    {
      name: "TAPENADE MAISON AUX OLIVES NOIRES",
      price: "60",
      shortDescription: "Pâte d'olives noires traditionnelle",
      description: "Tapenade préparée selon notre recette maison"
    },
    {
      name: "GUACAMOLE AVEC TORTILLA CHIPS",
      price: "70",
      shortDescription: "Avocat écrasé avec chips croustillantes",
      description: "Guacamole frais accompagné de tortilla chips dorées"
    }
  ];

  const toggleDescription = (index: number): void => {
    const key = `tapas-${index}`;
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
        staggerChildren: 0.05,
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
    <div id="tapas-menu" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-amber-400/4 rounded-full blur-2xl"></div>
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
              Tapas & Entrées
            </motion.h1>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>

          {/* Tapas Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {tapasItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-black/30 backdrop-blur-md border border-white/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-300 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-base font-light text-amber-400 ml-3 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mb-3 group-hover:w-16 transition-all duration-500" />
                
                <p className="text-slate-300 font-light leading-relaxed mb-3 text-sm">
                  {item.shortDescription}
                </p>
                
                <div 
                  className="mt-2 text-xs text-amber-400 opacity-70 flex items-center cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleDescription(index)}
                >
                  <span className="mr-1">{expandedItems[`tapas-${index}`] ? 'Moins' : 'Détails'}</span>
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
                      transform: expandedItems[`tapas-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                
                <AnimatePresence>
                  {expandedItems[`tapas-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 font-light text-sm italic mt-3 pt-3 border-t border-white/10">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TapasEntreesMenu;