import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Info, Leaf } from "lucide-react"

// Datos de ejemplo
const hoteles = [
  {
    id: 1,
    nombre: "Eco Lodge Las Montañas",
    descripcion: "Hotel sostenible con vistas panorámicas y energía solar",
    imagen: "/images/quiosco-frutas.png",
    ubicacion: "Sierra Norte",
    calificacion: 4.8,
    ecoCertificado: true,
  },
  {
    id: 2,
    nombre: "Hotel Verde Azul",
    descripcion: "Alojamiento junto al mar con prácticas de conservación marina",
    imagen: "/images/smoothie-verde.png",
    ubicacion: "Costa del Sol",
    calificacion: 4.6,
    ecoCertificado: true,
  },
  {
    id: 3,
    nombre: "Cabañas del Bosque",
    descripcion: "Cabañas integradas en el entorno natural con mínimo impacto",
    imagen: "/images/quiosco-frutas.png",
    ubicacion: "Bosque de Robles",
    calificacion: 4.9,
    ecoCertificado: true,
  },
  {
    id: 4,
    nombre: "Posada Rural El Molino",
    descripcion: "Antigua construcción rehabilitada con materiales locales",
    imagen: "/images/ensalada-frutas.png",
    ubicacion: "Valle Verde",
    calificacion: 4.7,
    ecoCertificado: true,
  },
  {
    id: 5,
    nombre: "Eco Resort & Spa",
    descripcion: "Resort de lujo con tratamientos naturales y alimentación orgánica",
    imagen: "/images/explosion-verano.png",
    ubicacion: "Bahía Cristalina",
    calificacion: 4.9,
    ecoCertificado: true,
  },
  {
    id: 6,
    nombre: "Hostal Tierra y Agua",
    descripcion: "Alojamiento económico con huerto propio y talleres ecológicos",
    imagen: "/images/smoothie-verde.png",
    ubicacion: "Ciudad Jardín",
    calificacion: 4.5,
    ecoCertificado: true,
  },
]

const restaurantes = [
  {
    id: 1,
    nombre: "La Huerta Orgánica",
    descripcion: "Restaurante farm-to-table con productos de kilómetro cero",
    imagen: "/images/ensalada-frutas.png",
    ubicacion: "Valle Central",
    calificacion: 4.7,
    ecoCertificado: true,
  },
  {
    id: 2,
    nombre: "Maná Restaurante",
    descripcion: "Cocina de autor con ingredientes silvestres recolectados",
    imagen: "/images/mana-restaurante.png",
    ubicacion: "Parque Natural",
    calificacion: 4.9,
    ecoCertificado: true,
  },
  {
    id: 3,
    nombre: "Frutería Maná",
    descripcion: "Jugos y batidos naturales con frutas orgánicas de temporada",
    imagen: "/images/explosion-verano.png",
    ubicacion: "Puerto Azul",
    calificacion: 4.8,
    ecoCertificado: true,
  },
  {
    id: 4,
    nombre: "Veggie Garden",
    descripcion: "Cocina vegetariana y vegana con productos de temporada",
    imagen: "/images/smoothie-verde.png",
    ubicacion: "Ciudad Verde",
    calificacion: 4.6,
    ecoCertificado: true,
  },
  {
    id: 5,
    nombre: "Raíces Locales",
    descripcion: "Gastronomía tradicional con un enfoque moderno y sostenible",
    imagen: "/images/quiosco-frutas.png",
    ubicacion: "Pueblo Antiguo",
    calificacion: 4.7,
    ecoCertificado: true,
  },
  {
    id: 6,
    nombre: "Café del Comercio Justo",
    descripcion: "Cafetería con productos de comercio justo y pastelería artesanal",
    imagen: "/images/mana-restaurante.png",
    ubicacion: "Centro Histórico",
    calificacion: 4.5,
    ecoCertificado: true,
  },
]

export default function ListadoPage() {
  return (
    <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Explora Nuestros Destinos</h1>

      <Tabs defaultValue="hoteles" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="hoteles">Hoteles</TabsTrigger>
          <TabsTrigger value="restaurantes">Restaurantes</TabsTrigger>
        </TabsList>

        <TabsContent value="hoteles">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hoteles.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={hotel.imagen || "/placeholder.svg"} alt={hotel.nombre} fill className="object-cover" />
                  {hotel.ecoCertificado && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-md flex items-center">
                      <Leaf className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Eco Certificado</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{hotel.nombre}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{hotel.ubicacion}</span>
                  </div>
                  <div className="flex items-center mb-3 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{hotel.calificacion}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.descripcion}</p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/detalle/hotel/${hotel.id}`}>Ver detalle</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="restaurantes">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantes.map((restaurante) => (
              <Card key={restaurante.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={restaurante.imagen || "/placeholder.svg"}
                    alt={restaurante.nombre}
                    fill
                    className="object-cover"
                  />
                  {restaurante.ecoCertificado && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-md flex items-center">
                      <Leaf className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Eco Certificado</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{restaurante.nombre}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurante.ubicacion}</span>
                  </div>
                  <div className="flex items-center mb-3 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{restaurante.calificacion}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{restaurante.descripcion}</p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/detalle/restaurante/${restaurante.id}`}>Ver detalle</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12 p-6 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-green-600" />
          <p className="text-gray-700">
            Explora nuestro{" "}
            <Link href="/mapa" className="text-green-600 font-medium hover:underline">
              mapa interactivo
            </Link>{" "}
            para descubrir todos los puntos de interés.
          </p>
        </div>
      </div>
    </div>
  )
}
