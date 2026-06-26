import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-teal-dark rounded-lg flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">HealthStay</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Global health stays. Human review. Trusted care. Wherever you go.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal bg-teal-light/15 border border-teal/20 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Human reviewed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal bg-teal-light/15 border border-teal/20 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Clinic validated
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/programs" className="text-sm text-gray-400 hover:text-white transition-colors">Health Stays</Link></li>
              <li><Link href="/destinations" className="text-sm text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/packages" className="text-sm text-gray-400 hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/journey" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="text-sm text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/trust-safety" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/trust-safety" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/trust-safety" className="text-sm text-gray-400 hover:text-white transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="w-full lg:w-auto">
            <p className="text-sm font-medium text-white">Stay informed</p>
            <div className="mt-2 flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                disabled
                className="flex-1 lg:w-64 px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white/30 placeholder-gray-600 cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="px-4 py-2 text-sm font-medium text-white/30 bg-teal/30 rounded-lg cursor-not-allowed"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">Visual demo — no emails stored</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} HealthStay. All rights reserved.</p>
            <p>Concept prototype for demonstration.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
