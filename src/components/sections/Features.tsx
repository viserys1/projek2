import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Layout, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Tanpa Login',
    description: 'Langsung gunakan tanpa perlu registrasi atau install aplikasi'
  },
  {
    icon: Globe,
    title: 'Real-time Recognition',
    description: 'Pengenalan suara instan dengan akurasi tinggi'
  },
  {
    icon: Layout,
    title: 'UI Intuitif',
    description: 'Tampilan bersih dan mudah digunakan oleh siapa saja'
  },
  {
    icon: Shield,
    title: 'Cross Browser',
    description: 'Berfungsi di semua browser modern tanpa plugin tambahan'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-space-dark/20" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fitur <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Nikmati kemudahan berbelanja dengan fitur-fitur inovatif VoiceCart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphic p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};