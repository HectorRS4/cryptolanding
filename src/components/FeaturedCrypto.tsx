'use client';

// src/components/FeaturedCryptos.tsx
import Link from 'next/link';
import CryptoCard from './CryptoCard';
import { useEffect, useState } from 'react';


type Crypto = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  iconUrl: string;
};

export default function FeaturedCryptos() {

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
        price: `$${coin.current_price.toLocaleString()}`,
        change: `${coin.price_change_percentage_24h?.toFixed(2)}%`,
        marketCap: `$${(coin.market_cap / 1e9).toFixed(2)}B`,
        iconUrl: coin.image,
      }));

      setCryptos(formatted);
    };

    fetchData();
  }, []);

  return (
    <section className="py-12 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Criptomonedas <span className="text-accent">Destacadas</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {cryptos.map((crypto) => (
            <CryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>
        <div className='flex justify-center'>
          <Link href="/featuredcrypto">
        <button className="bg-accent text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:scale-105 hover:animate-pulse transition-all duration-300 transform">
            Criptomomendas Populares
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
