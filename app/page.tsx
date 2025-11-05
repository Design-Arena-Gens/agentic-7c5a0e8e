import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="section hero-gradient pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                Timeless interiors for modern living
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                We design refined spaces that balance beauty and function?crafted uniquely for how you live and work.
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
                <Link href="/portfolio" className="btn btn-secondary">View Portfolio</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[5/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop"
                alt="Elegant living room designed by Aurora Interiors"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="section mt-10 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`https://images.unsplash.com/photo-15${50+i}692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-medium">Project {i}</div>
                  <div className="text-sm text-gray-600">Residential ? Full Renovation</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/portfolio" className="nav-link">See all projects ?</Link>
          </div>
        </section>

        <section className="section mt-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Service Design',
                desc: 'Comprehensive end-to-end design from concept to installation.'
              },
              {
                title: 'Renovations',
                desc: 'Space planning, material selection, and coordination for renovations.'
              },
              {
                title: 'Decor & Styling',
                desc: 'Furniture, lighting, art, and objects to complete your space.'
              }
            ].map((s) => (
              <div key={s.title} className="card p-6">
                <div className="font-medium text-lg">{s.title}</div>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="nav-link">Explore our services ?</Link>
          </div>
        </section>

        <section className="section mt-20">
          <div className="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-2xl font-semibold">Ready to create your dream space?</div>
              <p className="text-gray-600 mt-1">Book a complimentary discovery call with our team.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
