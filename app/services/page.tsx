import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Services',
  description: 'Full-service interior design, renovations, and decor & styling.'
};

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <main className="section pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Our Services</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">We offer tailored services to match your project scope, budget, and timeline?from comprehensive design packages to focused styling engagements.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            title: 'Full-Service Design',
            bullets: [
              'Concept development and mood boards',
              'Space planning and 3D visualization',
              'Material and finish selections',
              'Procurement and installation management'
            ]
          }, {
            title: 'Renovations',
            bullets: [
              'Architectural coordination',
              'Lighting and electrical plans',
              'Custom millwork and built-ins',
              'Site supervision'
            ]
          }, {
            title: 'Decor & Styling',
            bullets: [
              'Furniture and lighting curation',
              'Art, textiles, and objects',
              'Window treatments and rugs',
              'Finishing touches for photoshoot readiness'
            ]
          }].map((group) => (
            <div key={group.title} className="card p-6">
              <div className="font-medium text-lg">{group.title}</div>
              <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                {group.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-8">
          <div className="text-lg font-medium">Process</div>
          <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside">
            <li>Discovery call to understand needs and goals</li>
            <li>Site visit, measurements, and initial concept</li>
            <li>Design development and selections</li>
            <li>Procurement, project management, and installation</li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
