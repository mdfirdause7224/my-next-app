import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Roboto_Mono } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans-serif',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trangla Innovations',
  description: 'Contact Trangla Innovations to collaborate and build awesome projects together.',
  authors: [{ name: 'Trangla Innovations' }],
  keywords: ['Trangla Innovations', 'partner', 'contact', 'web development', 'app development'],
  openGraph: {
    title: 'Trangla Innovations',
    description: 'Contact Trangla Innovations to collaborate and build awesome projects together.',
    url: 'https://tranglainnovations.com',
    siteName: 'Trangla Innovations',
    images: [
      {
        // Use the triangle icon OG image we generated (1200x630)
        url: '/trangla_icon_outputs/og_meta_1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Trangla triangle icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trangla Innovations',
    description: 'Contact Trangla Innovations to collaborate and build awesome projects together.',
    images: ['/trangla_icon_outputs/og_meta_1200x630.png'],
  },
  // Favicons / icons: point to the triangle favicon outputs in your public folder
  icons: {
    icon: '/trangla_icon_outputs/favicon-32.png',
    shortcut: '/trangla_icon_outputs/favicon-16.png',
    apple: '/trangla_icon_outputs/apple-touch-180.png',
  },
};

// Viewport moved to a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
