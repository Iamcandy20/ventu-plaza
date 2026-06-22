import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Ventu Plaza",
  description: "Centros comerciales al aire libre en Costa Rica.",
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