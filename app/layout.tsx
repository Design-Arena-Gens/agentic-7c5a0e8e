import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Aurora Interiors ? Bespoke Interior Design',
    template: '%s | Aurora Interiors'
  },
  description: 'High-end residential and commercial interior design studio crafting timeless, functional spaces.',
  metadataBase: new URL('https://agentic-7c5a0e8e.vercel.app'),
  openGraph: {
    title: 'Aurora Interiors ? Bespoke Interior Design',
    description: 'High-end residential and commercial interior design studio crafting timeless, functional spaces.',
    url: 'https://agentic-7c5a0e8e.vercel.app',
    siteName: 'Aurora Interiors',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
