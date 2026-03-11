import React from 'react';
import { Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-dark-card border border-dark-border p-8 rounded-3xl hover:border-indigo-500/50 transition-colors group"
    >
      <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Solutions = () => {
  return (
    <section className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Soluciones pensadas para tu crecimiento</h2>
          <p className="text-zinc-400 text-lg">
            No solo construyo sitios web, creo herramientas digitales que trabajan para tu negocio las 24 horas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SolutionCard
            icon={Zap}
            title="Carga Instantánea"
            description="Tus clientes no esperan. Utilizo tecnologías modernas para que tu web vuele, evitando que se escapen a la competencia."
            delay={0.1}
          />
          <SolutionCard
            icon={Smartphone}
            title="Perfecto en Móviles"
            description="El 90% de las búsquedas locales son desde el celular. Tu web se adaptará perfectamente a cada pantalla."
            delay={0.2}
          />
          <SolutionCard
            icon={ShieldCheck}
            title="Gestión Integral"
            description="Me encargo de todo: dominio, hosting y mantenimiento. Tú solo preocúpate por atender a tus nuevos clientes."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
