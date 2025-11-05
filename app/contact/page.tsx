import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function submitForm(formData: FormData) {
  'use server';
  // Simulated processing; in production integrate with email/service provider
  const values = Object.fromEntries(formData.entries());
  console.log('New inquiry:', values);
}

export const metadata = {
  title: 'Contact',
  description: 'Book a consultation with Aurora Interiors.'
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="section pt-10 pb-20 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold">Book a Consultation</h1>
        <p className="mt-3 text-gray-600">Tell us about your project and we?ll get back within 1?2 business days.</p>

        <form action={submitForm} className="mt-8 card p-6 grid gap-5">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input required name="name" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" required name="email" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Project Type</label>
            <select name="type" className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
              <option>Decor & Styling</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows={5} className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <p className="text-xs text-gray-500">We respect your privacy. Your information is kept confidential.</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
