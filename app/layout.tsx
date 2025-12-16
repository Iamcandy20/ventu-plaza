import './globals.css';
import type { ReactNode } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'Ventu Plaza',
  description: 'Centros comerciales al aire libre en Costa Rica.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
