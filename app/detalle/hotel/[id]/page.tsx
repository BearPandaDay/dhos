"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  MapPin,
  Star,
  Calendar,
  Wifi,
  Coffee,
  Utensils,
  ParkingMeterIcon as Parking,
  PocketIcon as Pool,
  Dumbbell,
  SpadeIcon as Spa,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  Heart,
  Share2,
} from "lucide-react"

// Datos detallados de ejemplo para hoteles
const hotelesDetalle = [
  {
    id: 1,
    nombre: "Hotel la Ceiba, barrio el Bosque, corredor- de carga-.,  Cartagena de Indias",
    descripcion:
      "Ubicado en el corazón de la Sierra Norte, Hotel la Ceiba ofrece una experiencia única de alojamiento sostenible con vistas panorámicas impresionantes. Nuestras cabañas están construidas con materiales locales y sostenibles, y funcionamos completamente con energía solar.",
    descripcionLarga:
      "Hotel la Ceiba es un refugio de paz y sostenibilidad en medio de la naturaleza. Nuestro compromiso con el medio ambiente se refleja en cada aspecto de nuestra operación. Desde la construcción de nuestras cabañas con materiales locales y sostenibles, hasta nuestro sistema de energía 100% solar, cada detalle ha sido cuidadosamente pensado para minimizar nuestro impacto ambiental.\n\nNuestros huéspedes pueden disfrutar de habitaciones confortables con vistas panorámicas a las montañas, una gastronomía basada en productos locales y orgánicos, y una variedad de actividades que permiten conectar con la naturaleza de manera respetuosa.\n\nContamos con programas de conservación activos y colaboramos con las comunidades locales para promover prácticas sostenibles y el desarrollo económico de la región.",
    imagen: "/images/quiosco-frutas.png",
    imagenes: [
      "/images/quiosco-frutas.png",
      "/images/smoothie-verde.png",
      "/images/explosion-verano.png",
      "/images/ensalada-frutas.png",
    ],
    ubicacion: "Sierra Norte",
    direccion: "Camino de las Cumbres, km 5, Sierra Norte",
    coordenadas: { lat: 40.123, lng: -3.456 },
    calificacion: 4.8,
    numeroResenas: 124,
    precioNoche: 120,
    ecoCertificado: true,
    certificaciones: ["Certificación Biosphere", "Llave Verde", "Huella de Carbono Cero"],
    caracteristicas: [
      { nombre: "Wi-Fi gratuito", icono: <Wifi className="h-4 w-4" /> },
      { nombre: "Desayuno incluido", icono: <Coffee className="h-4 w-4" /> },
      { nombre: "Restaurante orgánico", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Estacionamiento", icono: <Parking className="h-4 w-4" /> },
      { nombre: "Piscina natural", icono: <Pool className="h-4 w-4" /> },
      { nombre: "Gimnasio al aire libre", icono: <Dumbbell className="h-4 w-4" /> },
      { nombre: "Spa ecológico", icono: <Spa className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Energía 100% solar",
      "Sistema de recolección de agua de lluvia",
      "Productos de limpieza biodegradables",
      "Compostaje de residuos orgánicos",
      "Programa de reciclaje integral",
      "Huerto orgánico propio",
    ],
    contacto: {
      telefono: "+34 912 345 678",
      email: "reservas@ecolodgelasmontanas.com",
      web: "www.ecolodgelasmontanas.com",
    },
  },
  {
    id: 2,
    nombre: "Hotel Verde Azul",
    descripcion:
      "Alojamiento junto al mar con prácticas de conservación marina y vistas espectaculares al océano. Nuestras habitaciones están diseñadas para maximizar la eficiencia energética y minimizar el impacto ambiental.",
    descripcionLarga:
      "Hotel Verde Azul es un oasis de sostenibilidad frente al mar, donde el lujo se encuentra con la responsabilidad ambiental. Nuestro hotel ha sido diseñado siguiendo los más altos estándares de construcción sostenible, utilizando materiales reciclados y de bajo impacto.\n\nNos enorgullece nuestro programa de conservación marina, que incluye la protección de arrecifes de coral, limpieza regular de playas y educación ambiental para huéspedes y comunidad local. Todas nuestras habitaciones ofrecen vistas al mar y están equipadas con sistemas de ahorro de agua y energía.\n\nNuestra gastronomía se basa en productos locales y de temporada, con especial énfasis en pescados y mariscos de pesca sostenible certificada. Ofrecemos a nuestros huéspedes experiencias únicas como snorkel en zonas protegidas, avistamiento responsable de cetáceos y talleres de conservación marina.",
    imagen: "/images/smoothie-verde.png",
    imagenes: [
      "/images/smoothie-verde.png",
      "/images/mana-restaurante.png",
      "/images/explosion-verano.png",
      "/images/ensalada-frutas.png",
    ],
    ubicacion: "Costa del Sol",
    direccion: "Avenida del Mar 23, Playa Cristalina, Costa del Sol",
    coordenadas: { lat: 36.5, lng: -4.6 },
    calificacion: 4.6,
    numeroResenas: 98,
    precioNoche: 150,
    ecoCertificado: true,
    certificaciones: ["Bandera Azul", "Travelife Gold", "ISO 14001"],
    caracteristicas: [
      { nombre: "Wi-Fi gratuito", icono: <Wifi className="h-4 w-4" /> },
      { nombre: "Desayuno incluido", icono: <Coffee className="h-4 w-4" /> },
      { nombre: "Restaurante de mariscos sostenibles", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Estacionamiento", icono: <Parking className="h-4 w-4" /> },
      { nombre: "Piscina de agua salada", icono: <Pool className="h-4 w-4" /> },
      { nombre: "Gimnasio", icono: <Dumbbell className="h-4 w-4" /> },
      { nombre: "Spa con productos naturales", icono: <Spa className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Sistemas de ahorro de agua en todas las instalaciones",
      "Iluminación LED de bajo consumo",
      "Programa de conservación de arrecifes de coral",
      "Eliminación de plásticos de un solo uso",
      "Tratamiento y reutilización de aguas grises",
      "Apoyo a pescadores locales sostenibles",
    ],
    contacto: {
      telefono: "+34 952 678 901",
      email: "info@hotelverdeazul.com",
      web: "www.hotelverdeazul.com",
    },
  },
  {
    id: 3,
    nombre: "Cabañas del Bosque",
    descripcion:
      "Cabañas integradas en el entorno natural con mínimo impacto ambiental, perfectas para los amantes de la naturaleza que buscan una experiencia auténtica y sostenible.",
    descripcionLarga:
      "Cabañas del Bosque ofrece una experiencia única de alojamiento en plena naturaleza, donde nuestras cabañas se integran perfectamente con el entorno boscoso que las rodea. Construidas sobre pilotes para minimizar el impacto en el suelo y utilizando madera certificada FSC, nuestras cabañas representan la armonía perfecta entre confort y sostenibilidad.\n\nCada cabaña cuenta con grandes ventanales que permiten disfrutar de vistas espectaculares al bosque, creando una conexión directa con la naturaleza. El diseño bioclimático aprovecha la ventilación natural y la luz solar, reduciendo significativamente el consumo energético.\n\nOfrecemos a nuestros huéspedes experiencias enriquecedoras como rutas de senderismo guiadas, observación de aves, talleres de identificación de plantas medicinales y sesiones de yoga al amanecer. Nuestro restaurante sirve platos elaborados con ingredientes silvestres recolectados de manera responsable y productos de agricultores locales.",
    imagen: "/images/quiosco-frutas.png",
    imagenes: [
      "/images/quiosco-frutas.png",
      "/images/smoothie-verde.png",
      "/images/explosion-verano.png",
      "/images/ensalada-frutas.png",
    ],
    ubicacion: "Bosque de Robles",
    direccion: "Sendero del Roble Antiguo, km 3, Bosque Nacional",
    coordenadas: { lat: 42.1, lng: -2.8 },
    calificacion: 4.9,
    numeroResenas: 87,
    precioNoche: 95,
    ecoCertificado: true,
    certificaciones: ["Certificación Ecológica Europea", "Bosques Sostenibles", "Turismo Responsable"],
    caracteristicas: [
      { nombre: "Wi-Fi limitado", icono: <Wifi className="h-4 w-4" /> },
      { nombre: "Desayuno orgánico", icono: <Coffee className="h-4 w-4" /> },
      { nombre: "Restaurante vegetariano", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Estacionamiento limitado", icono: <Parking className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Construcción con materiales locales y sostenibles",
      "Energía solar y eólica",
      "Baños secos ecológicos",
      "Filtración natural de aguas grises",
      "Programa de reforestación activo",
      "Educación ambiental para huéspedes",
    ],
    contacto: {
      telefono: "+34 947 123 456",
      email: "reservas@cabanasdelbosque.com",
      web: "www.cabanasdelbosque.com",
    },
  },
]

export default function HotelDetallePage() {
  const params = useParams()
  const [hotel, setHotel] = useState<any>(null)
  const [imagenPrincipal, setImagenPrincipal] = useState("")
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Simulamos la carga de datos
    const cargarDatos = async () => {
      setCargando(true)
      // Buscamos el hotel por ID
      const hotelEncontrado = hotelesDetalle.find((h) => h.id === Number(params.id))

      if (hotelEncontrado) {
        setHotel(hotelEncontrado)
        setImagenPrincipal(hotelEncontrado.imagen)
      }

      // Simulamos un tiempo de carga
      setTimeout(() => {
        setCargando(false)
      }, 800)
    }

    cargarDatos()
  }, [params.id])

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!hotel) {
    return (
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Hotel no encontrado</h1>
        <p className="mb-6">Lo sentimos, no pudimos encontrar el hotel que estás buscando.</p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/listado">Volver al listado</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/listado" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al listado
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Columna izquierda - Imágenes y detalles principales */}
        <div className="lg:w-2/3">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4">
            <Image src={imagenPrincipal || "/placeholder.svg"} alt={hotel.nombre} fill className="object-cover" />
            {hotel.ecoCertificado && (
              <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-md flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                <span className="font-medium">Eco Certificado</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2 mb-8">
            {hotel.imagenes.map((img, index) => (
              <div
                key={index}
                className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                  img === imagenPrincipal ? "border-green-600" : "border-transparent"
                }`}
                onClick={() => setImagenPrincipal(img)}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${hotel.nombre} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{hotel.nombre}</h1>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-600">{hotel.direccion}</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="font-medium">{hotel.calificacion}</span>
                <span className="text-gray-500 ml-1">({hotel.numeroResenas} reseñas)</span>
              </div>
              <div className="flex gap-1">
                {hotel.certificaciones.slice(0, 2).map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {cert}
                  </Badge>
                ))}
                {hotel.certificaciones.length > 2 && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    +{hotel.certificaciones.length - 2} más
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <Tabs defaultValue="descripcion" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="descripcion">Descripción</TabsTrigger>
              <TabsTrigger value="caracteristicas">Características</TabsTrigger>
              <TabsTrigger value="sostenibilidad">Sostenibilidad</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="mt-4">
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{hotel.descripcionLarga}</p>
              </div>
            </TabsContent>
            <TabsContent value="caracteristicas" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                    <div className="text-green-600 mr-3">{caracteristica.icono}</div>
                    <span>{caracteristica.nombre}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sostenibilidad" className="mt-4">
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Certificaciones</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.certificaciones.map((cert, index) => (
                    <Badge key={index} className="bg-white border-green-200 text-green-700">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">Prácticas sostenibles</h3>
              <ul className="space-y-2">
                {hotel.practicasSostenibles.map((practica, index) => (
                  <li key={index} className="flex items-start">
                    <Leaf className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{practica}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Columna derecha - Reserva y contacto */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <div className="border rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold">{hotel.precioNoche}€</span>
                  <span className="text-gray-500"> / noche</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Llegada</label>
                  <div className="flex items-center border rounded-md p-2">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <input type="date" className="w-full outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Salida</label>
                  <div className="flex items-center border rounded-md p-2">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <input type="date" className="w-full outline-none text-sm" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Huéspedes</label>
                <select className="w-full border rounded-md p-2 outline-none">
                  <option>1 adulto</option>
                  <option>2 adultos</option>
                  <option>2 adultos, 1 niño</option>
                  <option>2 adultos, 2 niños</option>
                </select>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">Reservar ahora</Button>
              <Button variant="outline" className="w-full">
                Consultar disponibilidad
              </Button>

              <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                <p>No se te cobrará nada todavía</p>
              </div>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span>{hotel.contacto.telefono}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span>{hotel.contacto.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-3" />
                  <span>{hotel.contacto.web}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
