import type { Metadata } from 'next';
import { Inter, Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'COMERG - Natural Extraction Solution',
  description: 'COMERG - A Natural Extraction Solution. Breakthrough extraction and purification technology.',
  themeColor: '#2A3D24',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-green selection:text-white bg-brand-dark">
        {children}
      </body>
    </html>
  );
}
