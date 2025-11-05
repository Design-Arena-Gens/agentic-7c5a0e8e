import Link from 'next/link';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200/70">
      <div className="section h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-brand text-lg">Aurora Interiors</Link>
        <nav className="hidden md:flex gap-7">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">Book a Consultation</Link>
      </div>
    </header>
  );
}
