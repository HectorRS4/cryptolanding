// src/app/featured-crypto/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Crypto = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  iconUrl: string;
};

export default function FeaturedCryptoPage() {

  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
      );
      const data = await res.json();

      const formatted = data.map((coin: any) => ({
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: `${coin.current_price.toLocaleString()}`,
        change: `${coin.price_change_percentage_24h?.toFixed(2)}%`,
        marketCap: `$${(coin.market_cap / 1e9).toFixed(2)}B`,
        iconUrl: coin.image,
      }));

      setCryptos(formatted);
    };

    fetchData();
  }, []);

  return (
    <main className="bg-primary min-h-screen text-white font-sans px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Criptomonedas <span className="text-accent">Populares</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cryptos.map((crypto) => (
            <div
              key={crypto.symbol}
              className="bg-soft p-6 rounded-md border border-gray-700 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={crypto.iconUrl} alt={crypto.name} className="w-12 h-12" />
                <div>
                  <h2 className="text-xl font-semibold">{crypto.name}</h2>
                  <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                </div>
              </div>
              <p className="text-lg font-medium">Precio: ${crypto.price}</p>
              <p className="text-sm text-green-400 mt-1">Cambio: {crypto.change}</p>
              <p className="text-sm text-gray-300 mt-1">Market Cap: {crypto.marketCap}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
