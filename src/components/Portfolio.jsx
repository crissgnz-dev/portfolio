import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import CVGenerator from '../assets/cv-generator.jpeg';
import PortalAvellaneda from '../assets/portal-avellaneda.jpeg';
import MonsterEnergyLanding from '../assets/monster-energy.jpeg';
import ColorPickerPro from '../assets/color-picker.jpeg';

const projects = [
  {
    title: "CV-Generator",
    description: "Herramienta interactiva para la creación de currículums profesionales con exportación instantánea.",
    tag: "Herramienta Compleja",
    tech: ["React", "Tailwind", "PDF Lib"],
    image: CVGenerator,
    demo: "https://cv-generator-by-crissgnz.vercel.app/",
    code: "https://github.com/crissgnz-dev/resume-builder"
  },
  {
    title: "Portal Avellaneda",
    description: "Plataforma institucional con diseño sobrio y navegación optimizada para servicios locales.",
    tag: "Proyecto Institucional",
    tech: ["React", "CSS Modules", "Vite"],
    image: PortalAvellaneda,
    demo: "https://mda-pantalla-categoria.netlify.app/",
    code: "https://github.com/crissgnz-dev/demo-mda-pantalla-categoria"
  },
  {
    title: "Monster Energy Landing",
    description: "Landing page de alto impacto con animaciones vibrantes y estética gamer.",
    tag: "Landing Page",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: MonsterEnergyLanding,
    demo: "https://crissgnz-dev.github.io/monster-energy-homepage/",
    code: "https://github.com/crissgnz-dev/monster-energy-homepage"
  },
  {
    title: "Color Picker Pro",
    description: "Utilidad minimalista para desarrolladores y diseñadores con gestión de paletas.",
    tag: "Utility Tool",
    tech: ["JavaScript", "Tailwind"],
    image: ColorPickerPro,
    demo: "https://color-picker-crissgnz.vercel.app/",
    code: "https://github.com/crissgnz-dev/color-picker"
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-dark-card border border-dark-border rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all flex flex-col"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider border border-white/10">
          {project.tag}
        </span>
      </div>
    </div>
    
    <div className="p-8 flex flex-col grow">
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded uppercase tracking-widest border border-zinc-700">
            {t}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <a href={project.demo} target='_blank' rel='noopener noreferrer' className="flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors text-sm">
          <ExternalLink size={16} />
          Ver Demo
        </a>
        <a href={project.code} target='_blank' rel='noopener noreferrer' className="flex items-center justify-center gap-2 bg-zinc-800 text-white py-3 rounded-xl font-bold hover:bg-zinc-700 transition-colors text-sm">
          <Code2 size={16} />
          Código
        </a>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  return (
    <section className="py-32 bg-dark-bg border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Vitrina de Proyectos</h2>
          <p className="text-zinc-400 text-lg">
            Una pequeña muestra de los sistemas que he construido recientemente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
