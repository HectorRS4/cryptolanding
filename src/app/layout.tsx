// src/app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Landing Cripto',
  description: 'Landing page elegante sobre criptomonedas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} font-sans`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
