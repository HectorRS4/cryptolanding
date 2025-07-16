// src/app/featured-crypto/page.tsx
"use client"
import { useEffect, useState } from "react";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export default function NewCryptos() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const cryptosPerPage = 15;

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&per_page=100&page=1&sparkline=false"
    )
      .then(res => res.json())
      .then(data => {
        setCryptos(data);
        setTotalPages(Math.ceil(data.length / cryptosPerPage));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Calcular las criptomonedas para la página actual
  const getCurrentPageCryptos = () => {
    const startIndex = (currentPage - 1) * cryptosPerPage;
    const endIndex = startIndex + cryptosPerPage;
    return cryptos.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-primary min-h-screen text-white font-sans px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Criptomonedas <span className="text-accent">Nuevas</span>
        </h1>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent mx-auto"></div>
            <p className="mt-4 text-lg text-gray-300">Cargando datos...</p>
          </div>
        ) : (
          <>
            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {getCurrentPageCryptos().map(coin => (
                <div
                  key={coin.id}
                  className="bg-soft p-6 rounded-md border border-gray-700 hover:shadow-lg transition relative"
                >
                  {/* Indicador de tendencia en la esquina superior derecha */}
                  <div className="absolute top-2 right-2">
                    <div className={`w-2 h-2 rounded-full ${
                      coin.price_change_percentage_24h > 0 ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={coin.image} 
                      alt={coin.name} 
                      className="w-12 h-12"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/default.png';
                      }}
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{coin.name}</h2>
                      <p className="text-gray-400 text-sm">{coin.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">
                    Precio: ${coin.current_price.toLocaleString()}
                  </p>
                  <p className={`text-sm mt-1 ${
                    coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    Cambio 24h: {coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Market Cap: ${(coin.market_cap / 1e9).toFixed(2)}B
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <a
                      href={`https://www.coingecko.com/en/coins/${coin.id}`}
                      target="_blank"
                      className="text-accent hover:text-blue-300 text-sm underline transition-colors"
                      rel="noreferrer"
                    >
                      Ver en CoinGecko →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <>
                <div className="flex justify-center items-center space-x-2 mt-8">
                  {/* Botón Anterior */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-soft border border-gray-600 rounded-md text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Anterior
                  </button>

                  {/* Números de página */}
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-3 py-2 rounded-md transition-colors ${
                            currentPage === pageNumber
                              ? 'bg-accent text-white'
                              : 'bg-soft border border-gray-600 text-white hover:bg-gray-600'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>

                  {/* Botón Siguiente */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-soft border border-gray-600 rounded-md text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Siguiente →
                  </button>
                </div>

                {/* Información de página */}
                <div className="text-center mt-4 text-gray-400 text-sm">
                  Página {currentPage} de {totalPages} • 
                  Mostrando {getCurrentPageCryptos().length} de {cryptos.length} criptomonedas
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
