'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Type definitions
interface SimpleItem {
  name: string;
  price: string;
}

interface SpiritItem {
  name: string;
  glass: string;
  bottle: string;
}

interface SimpleItemSectionProps {
  title: string;
  items: SimpleItem[];
  className?: string;
}

interface SpiritTableSectionProps {
  title: string;
  items: SpiritItem[];
  className?: string;
}

const BieresMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
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

  // Bières data
  const bieres: SimpleItem[] = [
    { name: 'Corelli Lager 25cl', price: '40' },
    { name: 'Mahou Original 33cl', price: '60' },
    { name: 'San Miguel 33cl', price: '45' },
    { name: 'San Miguel Fresca 33cl', price: '60' },
    { name: 'San Miguel Sans Alcool', price: '50' },
    { name: 'Leffe Blonde 33cl', price: '70' },
    { name: 'Smirnoff Ice', price: '60' }
  ];

  // Sangria data
  const sangria: SimpleItem[] = [
    { name: 'Sangria Carafe', price: '440' }
  ];

  // Apéritifs data
  const aperitifs: SimpleItem[] = [
    { name: 'Pastis', price: '70' },
    { name: 'Porto Offley Rouge', price: '70' },
    { name: 'Porto Offley Blanc', price: '70' },
    { name: 'Martini Rouge', price: '70' },
    { name: 'Martini Blanc', price: '80' },
    { name: 'Martini Rosé', price: '80' },
    { name: 'Campari', price: '80' }
  ];

  // Digestifs data
  const digestifs: SimpleItem[] = [
    { name: 'Sambuca Isolabella', price: '70' },
    { name: 'Fernet Branca', price: '70' },
    { name: 'Armagnac', price: '70' },
    { name: 'Get 27', price: '70' },
    { name: 'Grappa Sandro Bottega', price: '70' },
    { name: 'Limoncello', price: '70' },
    { name: 'Baileys', price: '100' },
    { name: 'Amaretto Disaronno', price: '100' },
    { name: 'Cointreau', price: '90' },
    { name: 'Grand Marnier', price: '90' },
    { name: 'Eau de Vie Prune', price: '90' },
    { name: 'Eau de Vie Poire Williams', price: '90' }
  ];

  // Cognac/Brandy data
  const cognacBrandy: SimpleItem[] = [
    { name: 'Calvado Boulard', price: '90' },
    { name: 'ABK6 VS', price: '90' },
    { name: 'ABK6 VSOP', price: '150' },
    { name: 'ABK6 X.O', price: '300' }
  ];

  // Rhum data
  const rhum: SimpleItem[] = [
    { name: 'Bacardi Blanc', price: '100' },
    { name: 'Bacardi Gold', price: '100' },
    { name: 'Relicario Superior', price: '100' },
    { name: 'Relicario Supremo', price: '150' }
  ];

  // Whisky data
  const whisky: SpiritItem[] = [
    { name: 'Grant\'s', glass: '100', bottle: '-' },
    { name: 'Monkey Shoulder', glass: '120', bottle: '-' },
    { name: 'Jack Daniel\'s', glass: '120', bottle: '2000' },
    { name: 'Jack Daniel\'s Honey', glass: '120', bottle: '-' },
    { name: 'Gentleman Jack', glass: '140', bottle: '2500' },
    { name: 'Jack Daniel\'s Sinatra', glass: '450', bottle: '-' },
    { name: 'Jack Daniel\'s Single Barrel', glass: '150', bottle: '-' },
    { name: 'Dewar\'s 12 Years', glass: '100', bottle: '-' },
    { name: 'Dewar\'s 15 Years', glass: '120', bottle: '-' },
    { name: 'Dewar\'s 18 Years', glass: '150', bottle: '-' },
    { name: 'Glenfiddich 12 Years', glass: '120', bottle: '-' },
    { name: 'Glenfiddich 15 Years', glass: '140', bottle: '-' },
    { name: 'Glenfiddich 18 Years', glass: '160', bottle: '-' },
    { name: 'Black Label', glass: '150', bottle: '2000' },
    { name: 'Gold Label', glass: '200', bottle: '3000' },
    { name: 'Blue Label', glass: '-', bottle: '9500' }
  ];

  // Vodka data
  const vodka: SpiritItem[] = [
    { name: 'Russian Standard', glass: '100', bottle: '1500' },
    { name: 'Grey Goose', glass: '150', bottle: '2000' },
    { name: 'Cristal Head', glass: '200', bottle: '3000' }
  ];

  // Gin data
  const gin: SpiritItem[] = [
    { name: 'Bombay Original', glass: '100', bottle: '1500' },
    { name: 'Bombay Sapphire', glass: '120', bottle: '2000' },
    { name: 'Hendrick\'s', glass: '150', bottle: '2000' },
    { name: 'Monkey 47', glass: '250', bottle: '3000' }
  ];

  // Tequila data
  const tequila: SpiritItem[] = [
    { name: 'Camino', glass: '100', bottle: '-' },
    { name: 'Patron Silver', glass: '200', bottle: '2000' },
    { name: 'Patron Reposado', glass: '250', bottle: '2500' },
    { name: 'Patron Anejo', glass: '300', bottle: '3000' }
  ];

  // Animation variants
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

  const sectionVariants: Variants = {
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

  // Simple section component (for bières, sangria, etc.)
  const SimpleItemSection: React.FC<SimpleItemSectionProps> = ({ title, items, className = "" }) => (
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
        {items.map((item, index: number) => (
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

  // Spirit table section component (for whisky, vodka, gin, tequila)
  const SpiritTableSection: React.FC<SpiritTableSectionProps> = ({ title, items, className = "" }) => (
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
      <div className="grid grid-cols-[2fr_0.7fr_0.7fr] text-amber-400/80 font-light text-sm mb-4 border-b border-white/20 pb-2">
        <div className="text-left">Nom</div>
        <div className="text-center">Verre</div>
        <div className="text-center">Bouteille</div>
      </div>
      
      <motion.div variants={containerVariants} className="space-y-2">
        {items.map((item, index: number) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="grid grid-cols-[2fr_0.7fr_0.7fr] py-3 px-2 border-b border-white/5 group/item hover:bg-white/5 transition-colors duration-300"
          >
            <span className="text-slate-300 group-hover/item:text-amber-200 transition-colors duration-300 font-light pr-2">
              {item.name}
            </span>
            <span className="text-center text-amber-400/80 text-sm">
              {item.glass}
            </span>
            <span className="text-center text-amber-400/80 text-sm">
              {item.bottle}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  return (
    <div 
      id="bieres-menu" 
      ref={menuRef} 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
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
              Bières & Spiritueux
            </motion.h1>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>

          {/* Bières & Sangria Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SimpleItemSection 
                title="BIÈRES" 
                items={bieres}
              />
              <SimpleItemSection 
                title="SANGRIA" 
                items={sangria}
              />
            </div>
          </div>

          {/* Apéritifs & Digestifs Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SimpleItemSection 
                title="APÉRITIFS" 
                items={aperitifs}
              />
              <SimpleItemSection 
                title="DIGESTIFS" 
                items={digestifs}
              />
            </div>
          </div>

          {/* Cognac/Brandy & Rhum Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SimpleItemSection 
                title="COGNAC / BRANDY" 
                items={cognacBrandy}
              />
              <SimpleItemSection 
                title="RHUM" 
                items={rhum}
              />
            </div>
          </div>

          {/* Spirits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SpiritTableSection 
                title="WHISKY" 
                items={whisky}
              />
              <SpiritTableSection 
                title="VODKA" 
                items={vodka}
              />
              <SpiritTableSection 
                title="GIN" 
                items={gin}
              />
              <SpiritTableSection 
                title="TEQUILA" 
                items={tequila}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BieresMenu;