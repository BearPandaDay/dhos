"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Hotel, UtensilsCrossed, Car, MapPin, Leaf } from "lucide-react"

export default function MapaPage() {
  const [mapaLoaded, setMapaLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("todos")

  // Simulamos la carga del mapa
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapaLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Datos de ejemplo para los puntos de interés
  const puntosInteres = [
    {
      id: 1,
      nombre: "Hotel la Ceiba",
      tipo: "hotel",
      ubicacion: "Sierra Norte",
      coordenadas: { lat: 40.123, lng: -3.456 },
      ecoCertificado: true,
    },
    {
      id: 2,
      nombre: "Chalet de la Montaña- azul Orgánica",
      tipo: "restaurante",
      ubicacion: "Valle Central",
      coordenadas: { lat: 40.234, lng: -3.567 },
      ecoCertificado: true,
    },
    {
      id: 3,
      nombre: "Estación de Bicicletas Eléctricas",
      tipo: "transporte",
      ubicacion: "Ciudad Verde",
      coordenadas: { lat: 40.345, lng: -3.678 },
      ecoCertificado: true,
    },
    {
      id: 4,
      nombre: "Hotel Verde Azul",
      tipo: "hotel",
      ubicacion: "Costa del Sol",
      coordenadas: { lat: 40.456, lng: -3.789 },
      ecoCertificado: true,
    },
    {
      id: 5,
      nombre: "Sabores del Bosque",
      tipo: "restaurante",
      ubicacion: "Parque Natural",
      coordenadas: { lat: 40.567, lng: -3.89 },
      ecoCertificado: true,
    },
    {
      id: 6,
      nombre: "Punto de Carga Vehículos Eléctricos",
      tipo: "transporte",
      ubicacion: "Autovía Verde",
      coordenadas: { lat: 40.678, lng: -3.901 },
      ecoCertificado: true,
    },
  ]

  const puntosFiltrados =
    activeTab === "todos" ? puntosInteres : puntosInteres.filter((punto) => punto.tipo === activeTab)

  const getIconoByTipo = (tipo) => {
    switch (tipo) {
      case "hotel":
        return <Hotel className="h-5 w-5" />
      case "restaurante":
        return <UtensilsCrossed className="h-5 w-5" />
      case "transporte":
        return <Car className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  return (
    <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Mapa Interactivo</h1>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <div className="order-2 lg:order-1">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[60vh] relative">
            {!mapaLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                {/* Aquí iría la implementación real del mapa con una librería como Leaflet o Google Maps */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-medium">Mapa Interactivo</p>
                    <p className="text-gray-500 mt-2">Aquí se mostraría el mapa con los puntos de interés marcados.</p>
                  </div>
                </div>

                {/* Simulación de marcadores en el mapa */}
                {puntosFiltrados.map((punto, index) => (
                  <div
                    key={punto.id}
                    className="absolute w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      top: `${20 + index * 10}%`,
                      left: `${20 + index * 10}%`,
                    }}
                  >
                    <div
                      className={`
                      ${
                        punto.tipo === "hotel"
                          ? "text-blue-600"
                          : punto.tipo === "restaurante"
                            ? "text-orange-600"
                            : "text-green-600"
                      }
                    `}
                    >
                      {getIconoByTipo(punto.tipo)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Puntos de Interés</h2>

              <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="hotel">Hoteles</TabsTrigger>
                  <TabsTrigger value="restaurante">Rest.</TabsTrigger>
                  <TabsTrigger value="transporte">Trans.</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                {puntosFiltrados.map((punto) => (
                  <div
                    key={punto.id}
                    className="flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        punto.tipo === "hotel"
                          ? "bg-blue-100"
                          : punto.tipo === "restaurante"
                            ? "bg-orange-100"
                            : "bg-green-100"
                      }`}
                    >
                      <div
                        className={`
                        ${
                          punto.tipo === "hotel"
                            ? "text-blue-600"
                            : punto.tipo === "restaurante"
                              ? "text-orange-600"
                              : "text-green-600"
                        }
                      `}
                      >
                        {getIconoByTipo(punto.tipo)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium">{punto.nombre}</h3>
                        {punto.ecoCertificado && (
                          <div className="ml-2 text-green-600">
                            <Leaf className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{punto.ubicacion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-sm">Hoteles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                    <span className="text-sm">Restaurantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                    <span className="text-sm">Transporte</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4">
            <Button className="w-full bg-green-600 hover:bg-green-700">Planificar Ruta Eco-sostenible</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
