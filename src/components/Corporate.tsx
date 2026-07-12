import { motion } from 'motion/react';
import { Briefcase, HeartHandshake, Presentation, Target, Bot, Music, Users } from 'lucide-react';

export default function Corporate() {
  return (
    <section id="empresas" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t-8 border-slate-900">
      {/* Background Glow & Pixel Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#4ecdc4 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl font-bold mb-6 text-[#4ecdc4]" style={{ textShadow: '4px 4px 0 #0f172a' }}>PROPUESTAS PARA EMPRESAS</h2>
          <p className="text-lg text-slate-300 font-medium">
            Orientados a fomentar la innovación, la cultura corporativa, el team building 
            y el impacto social positivo mediante la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Family Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 border-4 border-[#ff6b6b] p-8 shadow-[8px_8px_0_0_#ff6b6b] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#ff6b6b] transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#ff6b6b] text-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
                <HeartHandshake size={28} />
              </div>
              <h3 className="font-pixel text-2xl tracking-wide text-white">FAMILY DAY EN TU EMPRESA</h3>
            </div>
            <p className="text-slate-300 mb-8 font-medium">
              Eventos lúdicos y educativos para que los empleados asistan y disfruten con sus hijos.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-900 p-4 border-2 border-slate-700 shadow-[4px_4px_0_0_#0f172a]">
                <h4 className="font-pixel text-[#4ecdc4] flex items-center gap-2 mb-2 tracking-wide">
                  <Users size={18} /> ACTIVIDADES DESCONECTADAS
                </h4>
                <p className="text-sm text-slate-400 font-medium">Juegos y dinámicas de programación sin pantallas para disfrutar en familia.</p>
              </div>
              <div className="bg-slate-900 p-4 border-2 border-slate-700 shadow-[4px_4px_0_0_#0f172a]">
                <h4 className="font-pixel text-[#ffe66d] flex items-center gap-2 mb-2 tracking-wide">
                  <Bot size={18} /> ROBOT PARTY
                </h4>
                <p className="text-sm text-slate-400 font-medium">Armado y programación de robots propios con cartón, papel, y materiales creativos.</p>
              </div>
              <div className="bg-slate-900 p-4 border-2 border-slate-700 shadow-[4px_4px_0_0_#0f172a]">
                <h4 className="font-pixel text-[#ff6b6b] flex items-center gap-2 mb-2 tracking-wide">
                  <Music size={18} /> BAILANDO AL RITMO DEL CÓDIGO
                </h4>
                <p className="text-sm text-slate-400 font-medium">Participantes programan secuencias y luego bailan las instrucciones creadas.</p>
              </div>
            </div>
          </motion.div>

          {/* Other Corporate Services */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 border-4 border-slate-700 p-8 shadow-[6px_6px_0_0_#334155] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#ffe66d] text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
                  <Target size={24} />
                </div>
                <h3 className="font-pixel text-xl tracking-wide text-white">TEAM BUILDING TECNOLÓGICO</h3>
              </div>
              <p className="text-slate-300 font-medium">
                Desafíos con kits de robótica para fortalecer el trabajo en equipo, la lógica y la 
                resolución de problemas en equipos de profesionales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 border-4 border-slate-700 p-8 shadow-[6px_6px_0_0_#334155] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#9b5de5] text-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
                  <Presentation size={24} />
                </div>
                <h3 className="font-pixel text-xl tracking-wide text-white">CONFERENCIAS PARA COLABORADORES</h3>
              </div>
              <p className="text-slate-300 mb-2 font-medium">
                <strong className="text-[#4ecdc4]">Crianza Digital:</strong> Con Erica Diaz, estrategias para familias modernas.
              </p>
              <p className="text-slate-300 font-medium">
                <strong className="text-[#4ecdc4]">Pensamiento STEAM:</strong> Con Juan Pacheco, innovación y mentalidad de crecimiento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 border-4 border-[#4ecdc4] p-8 shadow-[6px_6px_0_0_#4ecdc4] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#4ecdc4] text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-pixel text-xl tracking-wide text-white">ALIANZAS DE RSE Y SUSTENTABILIDAD</h3>
              </div>
              <p className="text-slate-300 font-medium">
                Trabajamos con RRHH para generar impacto social dictando cursos virtuales gratuitos 
                a jóvenes de Latinoamérica (programación, videojuegos, streaming).
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
