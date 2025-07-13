export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página no encontrada</p>
        <a 
          href="/" 
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
} 