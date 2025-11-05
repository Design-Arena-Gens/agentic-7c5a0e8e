import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio',
  description: 'Selected residential and commercial interior design projects.'
};

const projects = Array.from({ length: 9 }).map((_, idx) => ({
  id: idx + 1,
  title: `Project ${idx + 1}`,
  tag: idx % 2 === 0 ? 'Residential' : 'Commercial',
  image: `https://images.unsplash.com/photo-15${60 + idx}692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop`
}));

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <main className="section pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Portfolio</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">A curated selection of spaces shaped by our studio. Each project tells a story of form, function, and feeling.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-600">{p.tag} ? Full Service</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
