import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative w-24 h-24 md:w-24 md:h-24">
              <Image
                src="/logo.png"
                alt="Tangerino Restaurant Logo"
                fill
                className="object-contain filter brightness-90"
                priority
              />
            </div>
          </motion.div>

          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <a
              href="https://instagram.com/tangerinorestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group-hover:text-amber-400"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-all duration-300"
              >
                <Instagram size={20} className="transition-colors duration-300" />
              </motion.div>
              <span className="font-light tracking-wide text-sm md:text-base">
                @tangerinorestaurant
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-white/40 text-xs font-light tracking-wide">
            © 2025 Tangerino Restaurant. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;