import AboutCrypto from "@/components/AboutCrypto";
import FeaturedCryptos from "@/components/FeaturedCrypto";
import NewCryptos from "@/components/NewCryptos";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="bg-primary min-h-screen text-white font-sans">
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('/images/bg-newcryptos.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-[#0f172acc]" />
        </div>
        <div className="relative z-10">
          <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('/images/bg-newcryptos.jpg')`,
              }}
            />
            {/* Columna izquierda: Texto */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Explora el mundo de las <span className="text-accent">Criptomonedas</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Conoce las monedas más populares, precios en tiempo real y análisis detallado del mercado financiero global.
              </p>
              <button className="bg-accent text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:scale-105 hover:animate-pulse transition-all duration-300 transform">              Comenzar ahora
              </button>
            </div>

            {/* Columna derecha: Imagen ilustrativa (placeholder) */}
            <div className="flex justify-center">
              <img
                src="/images/main.png"
                alt="Logo"
                className="h-30 w-30 object-contain drop-shadow-xl"
              />
            </div>
          </section>
          <div className="relative z-10">
            <AboutCrypto />
          </div>
        </div>
        <div className="relative z-10">
          {/* Criptomonedas destacadas */}
          <FeaturedCryptos />
          {/* Nuevas criptomonedas */}
          <NewCryptos />
        </div>
      </main>
    </>
  );
}
