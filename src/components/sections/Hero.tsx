import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mic, ShoppingBag, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Belanja Cerdas</span> dengan Suara
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              Simple. Cepat. Tanpa Overbudget.
            </p>
            <Link
              to="demo"
              smooth={true}
              duration={500}
              className="btn-primary inline-flex items-center space-x-2 button-glow"
            >
              <span>Mulai Gunakan Sekarang</span>
              <ArrowDown className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full h-[400px]">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow">
                    <Mic className="w-16 h-16 text-white" />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -right-12 -bottom-6"
                  >
                    <ShoppingBag className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};