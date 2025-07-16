interface CryptoCardProps {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  iconUrl: string;
}

export default function CryptoCard({ id, name, symbol, price, change, marketCap, iconUrl }: CryptoCardProps) {
  return (
    <div className="w-full sm:w-64 h-auto sm:h-80 bg-soft text-white p-4 border border-gray-700 flex flex-col sm:flex-col justify-between items-center">
      {/* Layout responsive: horizontal en móvil, vertical en desktop */}
      <div className="flex flex-row sm:flex-col items-center w-full">
        {/* Imagen y símbolo */}
        <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:mb-4">
          <img src={iconUrl} alt={name} className="w-10 h-10 sm:w-12 sm:h-12" />
          <div className="sm:text-center">
            <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-400 font-primary">{symbol.toUpperCase()}</p>
          </div>
        </div>

        {/* Información de precio - horizontal en móvil */}
        <div className="flex flex-col sm:flex-col space-y-1 sm:space-y-2 ml-4 sm:ml-0 sm:text-center">
          <p className="text-sm font-primary">💰 {price} USD</p>
          <p className="text-sm font-primary">📈 {change}</p>
          <p className="text-sm font-primary">🏦 {marketCap}</p>
        </div>
      </div>

      {/* Botón - siempre en la parte inferior */}
      <div className="mt-4 pt-4 border-t border-gray-600">
                    <a
                      href={`https://www.coingecko.com/en/coins/${id}`}
                      target="_blank"
                      className="text-accent hover:text-blue-300 text-sm underline transition-colors"
                      rel="noreferrer"
                    >
                      Ver en CoinGecko →
                    </a>
                  </div>
    </div>
  );
}
