'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (window.location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Cerrar menú móvil al hacer clic
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Sección izquierda - Desktop */}
          <div className="hidden md:flex items-center space-x-8 -mr-16">
            <Link 
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/featuredcrypto"
              onClick={(e) => handleLinkClick('/featuredcrypto', e)}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              Criptomonedas Populares
            </Link>
            <Link 
              href="/newcrypto"
              onClick={(e) => handleLinkClick('/newcrypto', e)}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              Criptomonedas Nuevas
            </Link>
          </div>

          {/* Logo centrado */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
            <Link 
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="block px-8"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-28 w-28 object-contain drop-shadow-xl"
              />
            </Link>
          </div>

          {/* Botón hamburguesa - Mobile */}
          <div className="md:hidden">
          <button
              onClick={toggleMenu}
              className="md:hidden block px-8 transition-transform duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className={`h-20 w-20 object-contain drop-shadow-xl transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          {/* Sección derecha - Desktop */}
          <div className="hidden md:flex items-center space-x-8 -ml-16">
            {/* Aquí puedes agregar elementos para desktop */}
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-primary/95 backdrop-blur-sm border-t border-gray-700 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <Link 
                href="/"
                onClick={(e) => handleLinkClick('/', e)}
                className="text-white hover:text-accent transition-colors duration-200 font-medium py-2 flex items-center space-x-3"
              >
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Home</span>
              </Link>
              <Link 
                href="/featuredcrypto"
                onClick={(e) => handleLinkClick('/featuredcrypto', e)}
                className="text-white hover:text-accent transition-colors duration-200 font-medium py-2 flex items-center space-x-3"
              >
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Criptomonedas Populares</span>
              </Link>
              <Link 
                href="/newcrypto"
                onClick={(e) => handleLinkClick('/newcrypto', e)}
                className="text-white hover:text-accent transition-colors duration-200 font-medium py-2 flex items-center space-x-3"
              >
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Criptomonedas Nuevas</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}