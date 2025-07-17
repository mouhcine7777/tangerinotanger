'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const menuItems = [
  { id: 'cocktails', label: 'Cocktails & Soft', link: '/menu/cocktails' },
  { id: 'champagne', label: 'Champagne et Vins', link: '/menu/champagne' },
  { id: 'bieres', label: 'Bières & Spiritueux', link: '/menu/beers' },
  { id: 'tapas', label: 'Tapas & Entrées', link: '/menu/tapas' },
  { id: 'Spécialités de la maison', label: 'Spécialités de la maison', link: '/menu/specialites-de-la-maison' },
  { id: 'cassolettes', label: 'Cassolettes', link: '/menu/cassolettes' },
  { id: 'poissons', label: 'Poissons & Viandes', link: '/menu/poissons' },
  { id: 'Tortiallas & Fritures', label: 'Tortiallas & Fritures', link: '/menu/tortillas' },
  { id: 'De Rome à New York', label: 'De Rome à New York', link: '/menu/rome-newyork' },
  { id: 'desserts', label: 'Desserts', link: '/menu/desserts' }
];

export default function StickyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Animation variants with proper TypeScript typing
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    closed: { 
      x: 20, 
      opacity: 0 
    },
    open: { 
      x: 0, 
      opacity: 1 
    }
  };

  return (
    <>
      {/* Sticky Navbar */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-gradient-to-r from-blue-50/95 via-sky-50/95 to-blue-50/95 shadow-2xl backdrop-blur-md border-b border-blue-200/30' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-19 w-27 md:h-16 md:w-16">
                <Image 
                  src={scrolled ? "/logoblack.png" : "/logo.png"}
                  alt="Restaurant Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>

            {/* Burger Menu Button */}
            <button 
              className="relative z-50 block focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex items-center justify-center h-10 w-10 relative">
                <span
                  className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 transform transition duration-300 ease-in-out ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${
                    isMenuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md z-40 overflow-y-auto pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-md mx-auto">
                <nav className="flex flex-col space-y-1 items-center">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="w-full"
                    >
                      <Link 
                        href={item.link}
                        className="block py-3 px-3 text-white hover:bg-amber-200/10 rounded-md font-light text-center transition-all duration-200 group flex items-center justify-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-amber-300/70 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          ›
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}