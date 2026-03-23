import { motion } from 'motion/react';
import { 
  Wrench, 
  Hammer, 
  PaintRoller, 
  Ruler, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 tracking-tight">
                DER BAUMANN
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Leistungen</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Über uns</button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Projekte</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95"
              >
                Angebot anfordern
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-amber-600 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <button onClick={() => scrollToSection('services')} className="text-left px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Leistungen</button>
              <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Über uns</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Projekte</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 mx-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium text-center"
              >
                Angebot anfordern
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="Handwerker Hintergrund" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/95 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm mb-6 tracking-wide uppercase">
                Handwerksdienstleistungen in Dresden
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Ihr Projekt in <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  professionellen Händen.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Gewerblicher Handwerksbetrieb in Dresden-Strehlen - individuelle Terrassenbauten, Maurer- und Putzarbeiten,
                Trockenbau, Fliesen und mehr. Zuverlässig, sauber und termingerecht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Kostenlose Anfrage
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
                >
                  Unsere Leistungen
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Umfassender Service für Ihr Zuhause</h2>
            <p className="text-lg text-slate-600">Wir decken ein breites Spektrum an handwerklichen Tätigkeiten ab. Fachgerechte Ausführung steht dabei immer an erster Stelle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Hammer className="text-amber-500" size={32} />,
                title: "Terrassenbau",
                description: "Individuelle Terrassen aus Hartholz, WPC oder BPC mit professioneller Alu-Unterkonstruktion und Stelzlagern."
              },
              {
                icon: <PaintRoller className="text-amber-500" size={32} />,
                title: "Maurerarbeiten",
                description: "Professionelles Mauerwerk aus Ziegel, Kalksandstein, Porenbeton und weiteren Materialien für Neubau und Sanierung."
              },
              {
                icon: <Ruler className="text-amber-500" size={32} />,
                title: "Putz- & Spachtelarbeiten",
                description: "Fachgerechte Verputz- und Spachtelarbeiten für perfekte Wandoberflächen in Ihrem Zuhause."
              },
              {
                icon: <Wrench className="text-amber-500" size={32} />,
                title: "Holzarbeiten & Sanierung",
                description: "Individuelle Holzgegenstände, Renovierung, Trockenbau, Fliesen- und Bodenverlegung aus einer Hand."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Qualität, die man sieht. <br/><span className="text-amber-500">Service, den man spürt.</span></h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Als lokaler Handwerksbetrieb in Dresden legen wir größten Wert auf Kundenzufriedenheit, Transparenz und handwerkliche Präzision. Wir verstehen, dass Ihr Zuhause Ihr wichtigster Rückzugsort ist.
              </p>
              <ul className="space-y-4">
                {[
                  "Kostenlose und unverbindliche Beratung vor Ort",
                  "Transparente Preisgestaltung ohne versteckte Kosten",
                  "Termintreue und zuverlässige Ausführung",
                  "Sauberes Verlassen der Baustelle"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-amber-500 flex-shrink-0" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Handwerker bei der Arbeit" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl shadow-2xl">
                <div className="text-4xl font-extrabold text-white mb-1">100%</div>
                <div className="text-amber-100 font-medium">Kundenorientierung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Projekte</h2>
            <p className="text-lg text-slate-600">Ein Bild sagt mehr als tausend Worte. Überzeugen Sie sich selbst von unserer Arbeitsqualität.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group relative shadow-sm"
              >
                <img 
                  src={img} 
                  alt={`Projekt ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Projektansicht</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lassen Sie uns über Ihr Projekt sprechen.</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  Kontaktieren Sie uns für ein unverbindliches Angebot. Wir melden uns umgehend bei Ihnen zurück.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium mb-1">Rufen Sie uns an</div>
                      <div className="text-xl text-white font-semibold">0176 85496825</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium mb-1">Schreiben Sie uns</div>
                      <div className="text-xl text-white font-semibold">handwerkauseinerhand@gmx.de</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium mb-1">Standort</div>
                      <div className="text-xl text-white font-semibold">01219 Dresden - Strehlen</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-12 lg:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Ihre Nachricht</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white resize-none"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all active:scale-[0.98]"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              DER BAUMANN
            </span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Der Baumann Handwerkerservice. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">Impressum</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
