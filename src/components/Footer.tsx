import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-steel-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Werner Hastreiter <span className="text-copper-500">GmbH</span>
              </span>
            </Link>
            <p className="text-steel-400 max-w-sm mt-4">
              Ihre erfahrene Schlosserei in München. Wir sind spezialisiert auf Metallbau, Schlüsseldienst und Sicherheitstechnik für private und gewerbliche Kunden.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#projects" className="text-steel-400 hover:text-white transition-colors">Referenzen</a></li>
              <li><a href="#about" className="text-steel-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#contact" className="text-steel-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-steel-600/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            &copy; {currentYear} Werner Hastreiter GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-steel-500 text-sm">
            Designed in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
}
