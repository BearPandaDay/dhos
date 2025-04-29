import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Hotel, UtensilsCrossed, Car } from "lucide-react"
import HotelRestaurantCarousel from "@/components/hotel-restaurant-carousel"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Banner Principal */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/gourmet-table.png"
          alt="Mesa con platos gourmet"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-full mb-4 bg-white/80 p-1">
            <Image src="/images/logo-beta.png" alt="Maná Fruit & Healthy food" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Descubre el Ecoturismo Gastro-Saludable con MANÁ- DHO&apos;s</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Hoteles, restaurantes y transporte eco-sostenible en un solo lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/listado">
              Ver hoteles-, restaurantes y estaciones de comida saludable <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white/30"
            >
              <Link href="/registro">Regístrate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Qué es  MANÁ- DHO's? */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Qué es  MANÁ- DHO&apos;s?</h2>
        <h3 style={{textAlign: "center",}}>¿ .....Comida Saludable con menú adicional para Diabéticos, Hipertensos y/u Obesos.</h3>
        <br />
        <br />
        <br />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Hotel className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hoteles Eco-amigables</h3>
            <p className="text-gray-600">Experiencia de alojamientos Eco-amigables.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <UtensilsCrossed className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Restaurantes Sostenibles</h3>
            <p className="text-gray-600">Gastronomía local con ingredientes orgánicos y de temporada.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Car className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ecomovilidad</h3>
            <p className="text-gray-600">
              Opciones de transporte que respetan el medio ambiente y reducen la huella de carbono.
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel de Hoteles/Restaurantes */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Destinos Destacados</h2>
          <HotelRestaurantCarousel />
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/listado">
                Ver todos los destinos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/20 p-1">
              <Image src="/images/logo-beta.png" alt="Maná Fruit & Healthy food" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">saludable, inclusiva para los DHO's?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Regístrate hoy y comienza a disfrutar de experiencias únicas mientras cuidas tu salud y el planeta.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            <Link href="/registro">Crear una cuenta</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
