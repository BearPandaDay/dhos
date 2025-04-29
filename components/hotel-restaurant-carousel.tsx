"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Star, Leaf } from "lucide-react"

// Datos de ejemplo
const items = [
  {
    id: 1,
    nombre: "Hotel la Ceiba",
    tipo: "hotel",
    descripcion: "Hotel sostenible con vistas panorámicas y energía solar",
    imagen: "/images/quiosco-frutas.png",
    ubicacion: "Sierra Norte",
    calificacion: 4.8,
    ecoCertificado: true,
  },
  {
    id: 2,
    nombre: "Hotel Verde Azul",
    tipo: "hotel",
    descripcion: "Alojamiento junto al mar con prácticas de conservación marina",
    imagen: "/placeholder.svg?height=300&width=500",
    ubicacion: "Costa del Sol",
    calificacion: 4.6,
    ecoCertificado: true,
  },
  {
    id: 3,
    nombre: "Chalet de la Montaña- azul, en Lomita-Arena Orgánica",
    tipo: "restaurante",
    descripcion: "Restaurante farm-to-table con productos de kilómetro cero",
    imagen: "/images/ensalada-frutas.png",
    ubicacion: "Valle Central",
    calificacion: 4.7,
    ecoCertificado: true,
  },
  {
    id: 4,
    nombre: "Maná Restaurante",
    tipo: "restaurante",
    descripcion: "Cocina de autor con ingredientes silvestres recolectados",
    imagen: "/images/mana-restaurante.png",
    ubicacion: "Parque Natural",
    calificacion: 4.9,
    ecoCertificado: true,
  },
  {
    id: 5,
    nombre: "Chalet- Mirador Villa Helena",
    tipo: "restaurante",
    descripcion: "Jugos y batidos naturales con frutas orgánicas de temporada",
    imagen: "/images/explosion-verano.png",
    ubicacion: "Ciudad Verde",
    calificacion: 4.8,
    ecoCertificado: true,
  },
  {
    id: 6,
    nombre: "Smoothies Verdes",
    tipo: "restaurante",
    descripcion: "Bebidas saludables y nutritivas con ingredientes orgánicos",
    imagen: "/images/smoothie-verde.png",
    ubicacion: "Zona Saludable",
    calificacion: 4.7,
    ecoCertificado: true,
  },
]

export default function HotelRestaurantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  // Ajustar número de elementos visibles según el ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= items.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? Math.max(0, items.length - visibleItems) : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2">
              <Card className="h-full overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.imagen || "/placeholder.svg"} alt={item.nombre} fill className="object-cover" />
                  {item.ecoCertificado && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-md flex items-center">
                      <Leaf className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Eco Certificado</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center mb-1">
                    <span className="text-xs font-medium uppercase text-gray-500">
                      {item.tipo === "hotel" ? "Hotel" : "Restaurante"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.nombre}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{item.ubicacion}</span>
                  </div>
                  <div className="flex items-center mb-3 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{item.calificacion}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.descripcion}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/detalle/${item.tipo}/${item.id}`}>Ver detalle</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Siguiente</span>
      </Button>
    </div>
  )
}
