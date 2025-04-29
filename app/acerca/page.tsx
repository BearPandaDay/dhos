import Header from "@/components/header"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Header />

      <main className="flex flex-col items-center max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-bold mb-8">Acerca de Nosotros</h1>

        <p className="text-lg mb-6">
          Esta es una página de ejemplo creada con Next.js para mostrar cómo funciona el enrutamiento basado en
          archivos.
        </p>

        <p className="text-lg mb-6">
          Next.js es un framework de React que te permite construir aplicaciones web rápidas y optimizadas para SEO.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mt-8 w-full">
          <h2 className="text-2xl font-semibold mb-4">Características principales:</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Renderizado híbrido (estático y del lado del servidor)</li>
            <li>Enrutamiento basado en archivos</li>
            <li>Optimización automática de imágenes</li>
            <li>Soporte para API Routes</li>
            <li>Soporte para TypeScript</li>
            <li>Fast Refresh para una experiencia de desarrollo mejorada</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
