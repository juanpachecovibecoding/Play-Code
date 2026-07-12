import { motion } from 'motion/react';
import { Lightbulb, Brain, Users, MessageSquare, Heart, Cpu, Rocket } from 'lucide-react';

const benefits = [
  { icon: Lightbulb, text: 'Favorece el aprendizaje autónomo' },
  { icon: Brain, text: 'Aumenta la retención y comprensión de conceptos' },
  { icon: MessageSquare, text: 'Mejora la creatividad y la comunicación' },
  { icon: Users, text: 'Fomenta el trabajo en equipo y colaborativo' },
  { icon: Heart, text: 'Estimula la autoestima' },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-purple-100 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a] text-purple-700 text-sm font-pixel tracking-wide mb-6">
              SOBRE NOSOTROS
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Más de 7 años transformando la educación
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              En Play Code diseñamos, planificamos y llevamos adelante experiencias 
              educativas innovadoras utilizando el enfoque <strong>S.T.E.A.M.</strong> 
              (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas).
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nuestro propósito es despertar el amor por el conocimiento científico 
              y tecnológico, trabajando de forma integral para potenciar habilidades.
            </p>

            <div className="bg-slate-50 p-6 border-4 border-slate-900 shadow-[6px_6px_0_0_#0f172a]">
              <h3 className="font-pixel text-xl text-slate-900 mb-4 flex items-center gap-2">
                <Users className="text-indigo-600" /> EL EQUIPO DIRECTIVO
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-400 pl-4">
                  <h4 className="font-bold text-slate-900">Juan Pacheco</h4>
                  <p className="text-sm text-slate-600">Codirector, Socio y Especialista en Innovación y Gestión Educativa.</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-bold text-slate-900">Erica Diaz</h4>
                  <p className="text-sm text-slate-600">Codirectora, Socia y Especialista en Gestión Educativa y Comunicación.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits & Park */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* STEAM Benefits */}
            <div>
              <h3 className="font-pixel text-2xl text-slate-900 mb-6">BENEFICIOS S.T.E.A.M.</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-4 bg-white p-4 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all"
                  >
                    <div className="bg-indigo-100 p-2 border-2 border-slate-900 text-indigo-600">
                      <benefit.icon size={20} />
                    </div>
                    <span className="text-slate-800 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Parque Tecnologico */}
            <div className="bg-slate-900 p-8 text-white border-4 border-indigo-500 shadow-[8px_8px_0_0_#4f46e5] relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                <Cpu size={120} />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Rocket className="text-purple-200" /> Parque Tecnológico
              </h3>
              <p className="text-indigo-100 mb-4 leading-relaxed">
                Contamos con kits que rotan según el curso. Destacamos <strong>Arduino</strong>, 
                una placa de desarrollo electrónico para proyectos interactivos enfocados a 
                soluciones reales (ej. contenedor de basura inteligente).
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
