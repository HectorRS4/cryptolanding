'use client';

interface NewCryptoCardProps {
  name: string;
  symbol: string;
  info: string;
  iconUrl: string;
}

export default function NewCryptoCard({ name, symbol, info, iconUrl }: NewCryptoCardProps) {
  return (
    <div className="bg-[#1e293bcc] backdrop-blur-md border border-gray-700 p-4 rounded-md w-full sm:w-60 text-white">
      {/* Layout horizontal en móvil, vertical en desktop */}
      <div className="flex flex-row sm:flex-col items-center sm:items-center space-x-3 sm:space-x-0">
        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src={iconUrl}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/default.png';
            }}
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 sm:text-center">
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-400">{symbol.toUpperCase()}</p>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">{info}</p>
        </div>
      </div>
    </div>
  );
}