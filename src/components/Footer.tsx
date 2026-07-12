import { Code2, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 text-slate-300 py-16 border-t-8 border-slate-900 relative">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#4ecdc4 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <div className="bg-[#4ecdc4] p-2 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a] text-slate-900">
                <Code2 size={24} />
              </div>
              <span className="font-pixel font-bold text-2xl tracking-wide">Play Code</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Despertando el amor por la ciencia y tecnología a través del enfoque STEAM para formar los creadores del mañana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 border-2 border-transparent hover:border-[#4ecdc4] text-slate-400 hover:text-[#4ecdc4] hover:shadow-[4px_4px_0_0_#4ecdc4] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 border-2 border-transparent hover:border-[#ff6b6b] text-slate-400 hover:text-[#ff6b6b] hover:shadow-[4px_4px_0_0_#ff6b6b] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 border-2 border-transparent hover:border-[#ffe66d] text-slate-400 hover:text-[#ffe66d] hover:shadow-[4px_4px_0_0_#ffe66d] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-pixel text-white mb-6 tracking-wide">NAVEGACIÓN</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#nosotros" className="hover:text-[#4ecdc4] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#cursos" className="hover:text-[#4ecdc4] transition-colors">Cursos y Oferta Académica</a></li>
              <li><a href="#escuelas" className="hover:text-[#4ecdc4] transition-colors">Propuestas para Escuelas</a></li>
              <li><a href="#empresas" className="hover:text-[#4ecdc4] transition-colors">Experiencias Corporativas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-white mb-6 tracking-wide">CURSOS DESTACADOS</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>Aula Maker (6 a 8 años)</li>
              <li>Robótica y Programación (9 a 13 años)</li>
              <li>PlayCoders Virtual (Latam)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-white mb-6 tracking-wide">CONTACTO</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff6b6b] shrink-0 mt-0.5" />
                <span>
                  CCA Centro Cristiano Académico<br />
                  4 de Enero 2567<br />
                  Santa Fe, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ffe66d] shrink-0" />
                <a href="mailto:playcodeacademia@gmail.com" className="hover:text-[#ffe66d] transition-colors">
                  playcodeacademia@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t-4 border-slate-900 mt-16 pt-8 text-center text-sm text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 font-medium">
          <p>© {new Date().getFullYear()} Play Code. Todos los derechos reservados.</p>
          <p>
            Diseñado con <span className="text-[#ff6b6b] text-lg leading-none align-middle">♥</span> para el futuro.
          </p>
        </div>
      </div>
    </footer>
  );
}
