import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200/70">
      <div className="section py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold text-brand">Aurora Interiors</div>
          <p className="mt-3 text-gray-600">Bespoke interior design for discerning residential and commercial clients.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Studio</div>
          <ul className="space-y-2 text-gray-600">
            <li><Link className="hover:text-brand" href="/about">About</Link></li>
            <li><Link className="hover:text-brand" href="/services">Services</Link></li>
            <li><Link className="hover:text-brand" href="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-gray-600">
            <li><a className="hover:text-brand" href="mailto:hello@aurora.interiors">hello@aurora.interiors</a></li>
            <li><span>+1 (555) 012-3456</span></li>
            <li><Link className="hover:text-brand" href="/contact">Book a Consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="section py-6 text-xs text-gray-500 flex items-center justify-between">
        <span>? {new Date().getFullYear()} Aurora Interiors. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
