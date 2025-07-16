import NewCryptoCard from './NewCryptoCard';
import Link from 'next/link';

const newCryptos = [
  {
    "name": "Aptos",
    "symbol": "APT",
    "info": "Blockchain de alta velocidad con bajo consumo.",
    "iconUrl": "https://assets.coingecko.com/coins/images/26455/large/aptos_round.png"
  },
  {
    "name": "Sui",
    "symbol": "SUI",
    "info": "Red basada en Move, diseñada para escalabilidad.",
    "iconUrl": "https://assets.coingecko.com/coins/images/18829/large/sui.png"
  },
  {
    "name": "Blur",
    "symbol": "BLUR",
    "info": "Marketplace descentralizado de NFTs.",
    "iconUrl": "https://assets.coingecko.com/coins/images/32751/large/blur.png"
  },
  {
    "name": "Arbitrum",
    "symbol": "ARB",
    "info": "Capa 2 para escalado de Ethereum.",
    "iconUrl": "https://assets.coingecko.com/coins/images/24027/large/arbitrum_circle.png"
  },
  {
    "name": "Aleph Zero",
    "symbol": "AZERO",
    "info": "Blockchain privada y rápida.",
    "iconUrl": "https://assets.coingecko.com/coins/images/6911/large/AZERO_logo.png"
  },
  {
    "name": "Worldcoin",
    "symbol": "WLD",
    "info": "Proyecto de identidad global.",
    "iconUrl": "https://assets.coingecko.com/coins/images/25383/large/worldcoin.png"
  },
  {
    "name": "dYdX",
    "symbol": "DYDX",
    "info": "Intercambio descentralizado de derivados.",
    "iconUrl": "https://assets.coingecko.com/coins/images/12315/large/dydx.png"
  },
  {
    "name": "Mina",
    "symbol": "MINA",
    "info": "Blockchain más ligera del mundo.",
    "iconUrl": "https://assets.coingecko.com/coins/images/11915/large/Mina_logo.png"
  },
  {
    "name": "Render",
    "symbol": "RNDR",
    "info": "Renderizado distribuido vía blockchain.",
    "iconUrl": "https://assets.coingecko.com/coins/images/10459/large/Render_token.png"
  },
  {
    "name": "Kaspa",
    "symbol": "KAS",
    "info": "BlockDAG de alta frecuencia de bloques.",
    "iconUrl": "https://assets.coingecko.com/coins/images/30103/large/kaspa-logo.png"
  }
];

export default function NewCryptos() {
  const maxDisplay = 10;
  const showMore = newCryptos.length > maxDisplay;

  return (
    <section className="relative py-12 px-6 text-white">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('/images/bg-newcryptos.jpg')`,
        }}
      />

      {/* Capa oscura opcional para mayor contraste */}
      <div className="absolute inset-0 bg-[#0f172acc]" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuevas <span className="text-accent">Criptomonedas</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {newCryptos.slice(0, maxDisplay).map((crypto) => (
            <NewCryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>
        <div className="text-center z-10">
          <Link href="/newcrypto">
            <button className="bg-accent text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:scale-105 hover:animate-pulse transition-all duration-300 transform">
              Ver todas las criptomonedas nuevas
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}