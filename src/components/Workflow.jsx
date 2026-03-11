import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Entrevista",
    description: "Diagnóstico gratuito para entender los objetivos de tu negocio."
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Plan de trabajo detallado y pago del 50% de anticipo."
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Acceso a una URL privada para ver los avances en tiempo real."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Pago del saldo final y lanzamiento oficial con dominio propio."
  }
];

const Workflow = () => {
  return (
    <section className="py-32 bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Método de Trabajo Seguro</h2>
          <p className="text-zinc-400 text-lg">
            Transparencia total en cada etapa del proceso, garantizando que el resultado final sea exactamente lo que tu negocio necesita.
          </p>
        </div>
        
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-px bg-zinc-800 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  {step.number}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed italic">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
