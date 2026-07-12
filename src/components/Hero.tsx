import { motion } from 'motion/react';
import { Rocket, Sparkles, MonitorPlay } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Pixel Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-16 h-16 bg-yellow-400 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,0.1)] animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400 border-4 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,0.1)] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ecdc4] border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] text-slate-900 font-pixel tracking-wide mb-8 text-xs sm:text-sm"
          >
            <Sparkles size={16} />
            <span className="leading-relaxed">LEVEL UP EDUCACIÓN S.T.E.A.M.</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8"
          >
            Despierta el amor por la <br className="hidden sm:block"/>
            <span className="font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-600 tracking-wider block mt-4 sm:mt-6" style={{ textShadow: '4px 4px 0 #cbd5e1' }}>
              CIENCIA Y TECNOLOGÍA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Educación S.T.E.A.M. a través de la programación y robótica para potenciar 
            habilidades transversales que servirán para toda la vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[#ffe66d] hover:bg-[#ffd166] text-slate-900 font-pixel tracking-wide border-4 border-slate-900 shadow-[6px_6px_0_0_#0f172a] active:shadow-[0px_0px_0_0_#0f172a] active:translate-y-[6px] active:translate-x-[6px] transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              <Rocket size={20} className="shrink-0" />
              VER CURSOS
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-pixel tracking-wide border-4 border-slate-900 shadow-[6px_6px_0_0_#0f172a] active:shadow-[0px_0px_0_0_#0f172a] active:translate-y-[6px] active:translate-x-[6px] transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              <MonitorPlay size={20} className="shrink-0" />
              CONÓCENOS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
