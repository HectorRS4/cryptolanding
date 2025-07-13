'use client';
import Link from 'next/link';

export default function Navbar() {
    const handleLinkClick = (href: string, e: React.MouseEvent) => {
        // Verificar si estamos en la página actual
        if (window.location.pathname === href) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 relative">
            
            {/* Sección izquierda */}
            <div className="flex items-center space-x-8 -mr-16">
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
              href="/new"
              onClick={(e) => handleLinkClick('/new', e)}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              Criptomonedas Nuevas
            </Link>
            </div>
  
            {/* Logo centrado */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
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
  
            {/* Sección derecha */}
            <div className="flex items-center space-x-8 -ml-16">
             
            </div>
          </div>
        </div>
      </nav>
    );
  }