import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MessageSquare, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Aktifkan Mikrofon',
    description: 'Klik tombol mikrofon untuk mulai merekam suara Anda'
  },
  {
    icon: MessageSquare,
    title: 'Ucapkan Produk',
    description: 'Sebutkan nama produk dan harganya dengan jelas'
  },
  {
    icon: ClipboardList,
    title: 'Lihat Daftar',
    description: 'Daftar belanja dan total harga akan muncul otomatis'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bagaimana <span className="gradient-text">Cara Kerjanya?</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hanya dengan tiga langkah sederhana, Anda dapat mulai mencatat belanjaan dengan suara
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};