/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Hammer, 
  TreePine, 
  PaintRoller, 
  Wrench, 
  HardHat,
  Ruler
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <a href="tel:017685496825" className="hover:text-white transition">0176 85496825</a>
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              <a href="mailto:handwerkauseinerhand@gmx.de" className="hover:text-white transition">handwerkauseinerhand@gmx.de</a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-500" />
            <span>Mo - Fr: 08:00 - 18:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <Hammer size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 leading-none">DER BAUMANN</h1>
              <p className="text-sm text-slate-500 font-medium">Bau & Handwerk</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8 font-medium text-slate-700">
            <a href="#leistungen" className="hover:text-orange-500 transition">Leistungen</a>
            <a href="#ueber-uns" className="hover:text-orange-500 transition">Über uns</a>
            <a href="#galerie" className="hover:text-orange-500 transition">Galerie</a>
            <a href="#kontakt" className="hover:text-orange-500 transition">Kontakt</a>
          </nav>

          <a 
            href="#kontakt" 
            className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold transition shadow-sm"
          >
            Angebot anfordern
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/57/576c167a-1495-4042-b148-ca5fc118817f?rule=$_59.JPG" 
            alt="Terrassenbau" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-6">
              Ihr Handwerker in Dresden & Umgebung
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Zuverlässiges Handwerk aus einer Hand.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Von der individuellen Terrasse über Maurer- und Putzarbeiten bis hin zum kompletten Innenausbau. Wir setzen Ihre Projekte fachgerecht, pünktlich und in höchster Qualität um.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontakt" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-center px-8 py-4 rounded-md font-bold text-lg transition shadow-lg"
              >
                Jetzt Projekt besprechen
              </a>
              <a 
                href="#leistungen" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-center px-8 py-4 rounded-md font-bold text-lg transition border border-white/20"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle2 size={32} className="mb-3 opacity-90" />
            <h3 className="font-bold text-lg">Top Zufriedenheit</h3>
            <p className="text-orange-100 text-sm">Zahlreiche zufriedene Kunden in Dresden</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 size={32} className="mb-3 opacity-90" />
            <h3 className="font-bold text-lg">Alles aus einer Hand</h3>
            <p className="text-orange-100 text-sm">Ein Ansprechpartner für Ihr gesamtes Projekt</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 size={32} className="mb-3 opacity-90" />
            <h3 className="font-bold text-lg">Zuverlässig & Schnell</h3>
            <p className="text-orange-100 text-sm">Termingerechte und saubere Ausführung</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Leistungen</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Wir bieten Ihnen ein breites Spektrum an handwerklichen Dienstleistungen. 
              Egal ob Neubau, Sanierung oder Umgestaltung – wir sind Ihr Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Terrassenbau</h3>
              <p className="text-slate-600 mb-4">
                Individuelle Terrassen aus Hartholz, WPC oder BPC. Inklusive professioneller Unterkonstruktion (Alu, Stelzlager, Punktfundamente).
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <Ruler size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fußbodenverlegung</h3>
              <p className="text-slate-600 mb-4">
                Fachgerechte Verlegung von Massivholzdielen, Vinyl und PVC-Böden inklusive Trittschalldämmung und Sockelleisten.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <HardHat size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Maurer- & Putzarbeiten</h3>
              <p className="text-slate-600 mb-4">
                Mauerwerk aus Ziegel, Kalksandstein oder Porenbeton. Professionelle Verputz- und Spachtelarbeiten für perfekte Oberflächen.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <TreePine size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Garten- & Landschaftsbau</h3>
              <p className="text-slate-600 mb-4">
                Bodenaustausch, Planierung, Schottereinbau sowie das Setzen von Bord- und Rasenkanten für Ihre Außenanlagen.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <PaintRoller size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trockenbau & Sanierung</h3>
              <p className="text-slate-600 mb-4">
                Kompletter Innenausbau: Abriss, Dämmung, Verkleidung und Untergrundbearbeitung für Ihre Renovierungsprojekte.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Holzarbeiten & DIY-Hilfe</h3>
              <p className="text-slate-600 mb-4">
                Individuelle Holzgegenstände (Regale, Rampen) sowie fachmännische Begleitung und Hilfestellung bei Ihren eigenen DIY-Projekten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Unsere Referenzen</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Machen Sie sich selbst ein Bild von unserer Arbeit. Qualität, die man sehen kann.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/57/576c167a-1495-4042-b148-ca5fc118817f?rule=$_59.JPG" alt="Terrassenbau Projekt" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/a7/a789c103-995d-49ce-8220-297df454d285?rule=$_59.JPG" alt="Fußbodenverlegung" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/d5/d510636b-3c91-4df2-a1ca-b7cda44c1d6d?rule=$_59.JPG" alt="Gartenbau" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/82/82affd57-a29f-4e5b-99db-5cb17fa15f4c?rule=$_59.JPG" alt="Putzarbeiten" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/4a/4a972c2a-4343-4962-adc7-243f564b691d?rule=$_59.JPG" alt="Maurerarbeiten" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
            <img src="https://img.kleinanzeigen.de/api/v1/prod-ads/images/89/89eca304-85b5-4656-a490-ba014b2dcfa8?rule=$_59.JPG" alt="Holzarbeiten" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="bg-slate-900 text-white p-10 lg:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Kontaktieren Sie uns</h3>
                <p className="text-slate-400 mb-8">
                  Schreiben Sie uns Ihr Anliegen mit groben Eckdaten Ihres Vorhabens. Wir melden uns schnellstmöglich bei Ihnen!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Telefon</p>
                      <a href="tel:017685496825" className="text-lg font-bold hover:text-orange-500 transition">0176 85496825</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">E-Mail</p>
                      <a href="mailto:handwerkauseinerhand@gmx.de" className="text-lg font-bold hover:text-orange-500 transition break-all">handwerkauseinerhand@gmx.de</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Standort</p>
                      <p className="text-lg font-bold">Lockwitzer Straße 22<br/>01219 Dresden - Strehlen</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-sm text-slate-400">
                  Ein Besichtigungstermin schafft meist noch mehr Klarheit über Ihr Projekt. Zögern Sie nicht, uns anzusprechen!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Schreiben Sie uns eine Nachricht</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="Für Rückfragen" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail Adresse</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="ihre.email@beispiel.de" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ihr Anliegen / Eckdaten zum Projekt *</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none" placeholder="Beschreiben Sie kurz Ihr Vorhaben..."></textarea>
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg w-full md:w-auto transition shadow-md">
                  Anfrage absenden
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hammer size={24} className="text-orange-500" />
              <span className="text-xl font-bold text-white">DER BAUMANN</span>
            </div>
            <p className="mb-4">Ihr gewerblicher Handwerksbetrieb in Dresden-Strehlen für individuelle Bau- und Handwerksleistungen.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><a href="#leistungen" className="hover:text-orange-500 transition">Leistungen</a></li>
              <li><a href="#galerie" className="hover:text-orange-500 transition">Referenzen</a></li>
              <li><a href="#kontakt" className="hover:text-orange-500 transition">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition">Impressum</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Der Baumann. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">Handwerk aus einer Hand in Dresden.</p>
        </div>
      </footer>
    </div>
  );
}

