interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  iconUrl: string;
}

export default function CryptoCard({ name, symbol, price, change, marketCap, iconUrl }: CryptoCardProps) {
  return (
    <div className="w-64 h-80 bg-soft text-white p-4 border border-gray-700 flex flex-col justify-between items-center">
      {/* Parte superior: información */}
      <div className="flex flex-col items-center">
        <img src={iconUrl} alt={name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 font-primary mb-2">{symbol.toUpperCase()}</p>
        <p className="text-s font-primary">💰 Precio: {price} USD </p>
        <p className="text-s font-primary">📈 Cambio 24h: {change}</p>
        <p className="text-s font-primary">🏦 Market Cap: {marketCap}</p>
      </div>

      {/* Parte inferior: contenedor para animación 3D futura */}
      <div className="w-full h-16 flex items-center justify-center border-t border-gray-600 mt-4 text-gray-400 text-sm">
        <button className="bg-accent text-white px-6 py-3 font-primary shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:scale-105 hover:animate-pulse transition-all duration-300 transform">
          {name} News
        </button>
      </div>
    </div>
  );
}
