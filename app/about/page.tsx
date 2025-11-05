import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About',
  description: 'Aurora Interiors is a boutique design studio creating refined, livable spaces.'
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="section pt-10 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Our Studio</h1>
        <p className="mt-3 text-gray-600">Aurora Interiors is a boutique design studio specializing in high-end residential and commercial projects. Our philosophy is grounded in quiet luxury: a refined aesthetic that prioritizes craftsmanship, materiality, and human experience.</p>

        <p className="mt-6 text-gray-600">From concept through completion, we collaborate closely with clients, architects, and makers to deliver cohesive environments that age gracefully and support daily life.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-medium text-lg">Approach</div>
            <p className="mt-2 text-gray-600">Research-driven, detail-focused, and tailored to each client?s needs and context.</p>
          </div>
          <div className="card p-6">
            <div className="font-medium text-lg">Capabilities</div>
            <p className="mt-2 text-gray-600">Concept design, space planning, finishes, furniture, lighting, art, and styling.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
