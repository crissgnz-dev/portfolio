import React from 'react';
import { Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-dark-bg border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter">
              <span className="text-white">Fullstack</span>
              <span className="text-indigo-500">Local</span>
            </h2>
            <p className="text-zinc-500 max-w-xs text-sm">
              Transformando negocios locales con tecnología de vanguardia y diseño de alto impacto.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Contacto</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                  LinkedIn <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                  GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Ubicación</h4>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin size={16} className="text-indigo-500" />
                <span>Wilde, trabajando para todo el país</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-medium">
          <p>© {new Date().getFullYear()} Crissgnz - Desarrollador Fullstack</p>
          <p>Hecho con React, Three.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
