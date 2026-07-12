import { motion } from 'motion/react';
import { School, Puzzle, CalendarDays, GraduationCap, Mic } from 'lucide-react';

const schoolServices = [
  {
    icon: School,
    title: 'Implementación Curricular',
    desc: 'Diseñamos la ruta de aprendizaje articulando programación, robótica e IA directamente dentro del horario escolar.',
  },
  {
    icon: Puzzle,
    title: 'Talleres Extraescolares',
    desc: '1 hora semanal con actividades planificadas y kits propios. Disponible en opción presencial o virtual.',
  },
  {
    icon: CalendarDays,
    title: 'Días Especiales',
    desc: '"Un día distinto en la escuela": Postas de programación y robótica diseñadas para alumnos de 5 a 13 años.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación Docente',
    desc: 'Programas "Pensar en modo STEAM" para alfabetización digital y "Workshop de IA y Educación" usando herramientas como Google AI Studio.',
  },
  {
    icon: Mic,
    title: 'Conferencias para Familias',
    desc: 'Charlas sobre tecnología y educación digital impartidas por Erica Diaz, experta en educación digital y familia.',
  },
];

export default function Schools() {
  return (
    <section id="escuelas" className="py-24 bg-white relative overflow-hidden">
      {/* Decors */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                El <span className="font-pixel text-[#ff6b6b]">aliado académico</span> para tu colegio
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                Desarrollamos y coordinamos la estrategia de Educación Digital 
                institucional desde sala de 4 años hasta 5to año de secundaria.
              </p>
              <button className="px-6 py-3 bg-[#4ecdc4] hover:bg-[#3dbdb4] text-slate-900 font-pixel tracking-wide border-4 border-slate-900 shadow-[6px_6px_0_0_#0f172a] active:shadow-[0px_0px_0_0_#0f172a] active:translate-y-[6px] active:translate-x-[6px] transition-all">
                CONTACTAR A ASESORÍA
              </button>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {schoolServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 border-4 border-slate-900 hover:-translate-y-1 transition-all shadow-[6px_6px_0_0_#0f172a] hover:shadow-[10px_10px_0_0_#0f172a] bg-white ${
                    index === 0 ? 'sm:col-span-2 bg-[#ffe66d]' : ''
                  }`}
                >
                  <div className={`w-12 h-12 border-2 border-slate-900 flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#0f172a] ${
                    index === 0 ? 'bg-[#ff6b6b] text-white' : 'bg-[#4ecdc4] text-slate-900'
                  }`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="font-pixel text-xl text-slate-900 mb-3 uppercase">{service.title}</h3>
                  <p className="text-slate-800 font-medium leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
