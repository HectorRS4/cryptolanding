'use client';

interface NewCryptoCardProps {
  name: string;
  symbol: string;
  info: string;
  iconUrl: string;
}

export default function NewCryptoCard({ name, symbol, info, iconUrl }: NewCryptoCardProps) {
  return (
    <div className="bg-[#1e293bcc] backdrop-blur-md border border-gray-700 p-4 rounded-md w-full sm:w-60 text-white grid grid-cols-1 gap-2 text-center">
      {/* Imagen con fallback */}
      <div className="flex justify-center">
        <img
          src={iconUrl}
          alt={name}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/default.png'; // ✅ RUTA CORRECTA
          }}
        />
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{symbol.toUpperCase()}</p>
      <p className="text-sm text-gray-300">{info}</p>
    </div>
  );
}