import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="text-lg font-semibold text-white">HealthStay</span>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              A trusted marketplace and concierge platform for international health stays, starting with Swiss neuro-health journeys.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Prototype for concept demonstration. Not a live medical booking platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/programs" className="text-sm hover:text-white transition-colors">Programmes</Link></li>
              <li><Link href="/centers" className="text-sm hover:text-white transition-colors">Centers</Link></li>
              <li><Link href="/compare" className="text-sm hover:text-white transition-colors">Compare</Link></li>
              <li><Link href="/pilot" className="text-sm hover:text-white transition-colors">Swiss Pilot</Link></li>
              <li><Link href="/journey" className="text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/request" className="text-sm hover:text-white transition-colors">Request a Proposal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">More</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/trust-safety" className="text-sm hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/partners" className="text-sm hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} HealthStay. Prototype. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            This is a concept prototype. No real medical services are offered through this platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
