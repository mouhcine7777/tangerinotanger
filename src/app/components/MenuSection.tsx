'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MenuSection = () => {
  const menuCategories = [
    {
      id: 1,
      title: "Cocktails & Soft",
      description: "Cocktails raffinés et boissons sans alcool",
      image: "/cocktails.jpg",
      slug: "cocktails"
    },
    {
      id: 2,
      title: "Champagne et Vins",
      description: "Sélection premium de champagnes et vins fins",
      image: "/champagne.jpg",
      slug: "champagne"
    },
    {
      id: 3,
      title: "Bières et boissons",
      description: "Bières artisanales et boissons fraîches",
      image: "/beer.jpg",
      slug: "beers"
    },
    {
      id: 4,
      title: "Tapas et entrées",
      description: "Délicieuses entrées et tapas à partager",
      image: "/tapas.jpg",
      slug: "tapas"
    },
    {
      id: 5,
      title: "Spécialités de la maison",
      description: "Nos créations signature et plats emblématiques",
      image: "/specialites.jpg",
      slug: "specialites-de-la-maison"
    },
    {
      id: 6,
      title: "Cassolettes",
      description: "Plats mijotés traditionnels servis en cassolette",
      image: "/cassolettes.jpg",
      slug: "cassolettes"
    },
    {
      id: 7,
      title: "Poisson et Viande",
      description: "Sélection premium de poissons frais et viandes nobles",
      image: "/poisson.jpg",
      slug: "poissons"
    },
    {
      id: 8,
      title: "Tortiallas & Fritures",
      description: "Savourez nos tortillas artisanales et fritures dorées à la perfection",
      image: "/tortillas.jpg",
      slug: "tortillas"
    },
    {
      id: 9,
      title: "De Rome à New York",
      description: "Deux mondes, une passion commune",
      image: "/rome-newyork.jpg",
      slug: "rome-newyork"
    },
    {
      id: 10,
      title: "Desserts",
      description: "Créations sucrées pour finir en beauté",
      image: "/desserts.jpg",
      slug: "desserts"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="menu" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber-300/3 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Notre Menu
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-amber-500 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Découvrez nos créations culinaires, chaque plat raconte une histoire de passion et de savoir-faire
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {menuCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:shadow-amber-500/10">
                {/* Elegant geometric shape with clipped corners */}
                <div className="absolute inset-0" style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Luxury border accent */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-amber-500/30 transition-colors duration-500" style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }} />

                {/* Elegant corner details */}
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-0.5 -translate-y-0.5" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-0.5 translate-y-0.5" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: category.id * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <h3 
                        className="text-white text-xl md:text-2xl font-bold mb-3 tracking-wide leading-tight"
                        style={{
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.5)'
                        }}
                      >
                        {category.title}
                      </h3>
                      {/* Subtle underline accent */}
                      <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <p 
                      className="text-white/90 text-sm md:text-base font-light leading-relaxed mb-6"
                      style={{
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      {category.description}
                    </p>
                    
                    {/* Découvrir Button with Next.js Link */}
                    <Link href={`/menu/${category.slug}`} passHref>
                      <motion.button
                        className="group/btn relative px-8 py-3 bg-black/20 text-white font-light text-sm tracking-[0.15em] border border-white/20 backdrop-blur-md transition-all duration-500 hover:border-amber-400/50 hover:bg-black/30 hover:text-amber-50 w-fit"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-400/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-3">
                          Découvrir
                          <motion.div
                            className="w-4 h-[1px] bg-white/40 group-hover/btn:bg-amber-400/70 transition-colors duration-500"
                            animate={{ 
                              scaleX: [1, 1.3, 1],
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                        </span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                {/* Elegant corner accent on hover */}
                <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-light text-amber-400 mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Nous informons notre aimable clientèle
              </motion.h3>
              
              <motion.div
                className="space-y-4 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <p className="text-lg font-light leading-relaxed">
                  Un service de <span className="text-amber-400 font-medium">6%</span> sera ajouté à votre addition
                </p>
                
                <motion.div
                  className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto my-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
                
                <p className="text-lg font-light leading-relaxed">
                  La maison n'accepte que les <span className="text-amber-400 font-medium">chèques certifiés</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;