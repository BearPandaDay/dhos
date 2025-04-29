"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, Utensils, Wine, Salad, Wheat, ChevronLeft, Calendar } from "lucide-react"

// Datos detallados de ejemplo para restaurantes
const restaurantesDetalle = [
  {
    id: 1,
    nombre: "La Huerta Orgánica",
    descripcion: "Restaurante farm-to-table con productos de kilómetro cero y cocina de temporada.",
    descripcionLarga:
      "La Huerta Orgánica es un restaurante comprometido con la filosofía farm-to-table, donde cada plato cuenta una historia de sostenibilidad y sabor auténtico. Nuestra cocina se basa en ingredientes frescos cultivados en nuestra propia huerta orgánica o adquiridos directamente de agricultores locales.\n\nNuestro menú cambia con las estaciones, reflejando siempre lo mejor que la tierra nos ofrece en cada momento del año. Trabajamos en estrecha colaboración con productores locales que comparten nuestra visión de una agricultura respetuosa con el medio ambiente y libre de químicos.\n\nEn La Huerta Orgánica, no solo disfrutarás de una experiencia gastronómica excepcional, sino que también contribuirás a un sistema alimentario más sostenible y justo. Nuestro equipo de chefs creativos transforma ingredientes simples y honestos en platos sofisticados que celebran los sabores naturales.",
    imagen: "/images/ensalada-frutas.png",
    imagenes: [
      "/images/ensalada-frutas.png",
      "/images/smoothie-verde.png",
      "/images/explosion-verano.png",
      "/images/mana-restaurante.png",
    ],
    ubicacion: "Valle Central",
    direccion: "Camino de la Huerta, 15, Valle Central",
    coordenadas: { lat: 40.234, lng: -3.567 },
    calificacion: 4.7,
    numeroResenas: 86,
    precioMedio: 35,
    ecoCertificado: true,
    certificaciones: ["Km 0", "Slow Food", "Agricultura Ecológica"],
    tiposCocina: ["Mediterránea", "Vegetariana", "De temporada"],
    horarios: {
      lunes: "Cerrado",
      martes: "13:00 - 16:00, 20:00 - 23:00",
      miercoles: "13:00 - 16:00, 20:00 - 23:00",
      jueves: "13:00 - 16:00, 20:00 - 23:00",
      viernes: "13:00 - 16:00, 20:00 - 23:30",
      sabado: "13:00 - 16:30, 20:00 - 23:30",
      domingo: "13:00 - 16:30",
    },
    caracteristicas: [
      { nombre: "Cocina de temporada", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Carta de vinos ecológicos", icono: <Wine className="h-4 w-4" /> },
      { nombre: "Opciones vegetarianas", icono: <Salad className="h-4 w-4" /> },
      { nombre: "Sin gluten disponible", icono: <Wheat className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Huerto orgánico propio",
      "Productos de temporada y proximidad",
      "Reducción de desperdicios alimentarios",
      "Compostaje de residuos orgánicos",
      "Envases biodegradables para llevar",
      "Apoyo a pequeños productores locales",
    ],
    platosDestacados: [
      {
        nombre: "Ensalada de tomates heritage con burrata",
        descripcion: "Tomates ecológicos de nuestra huerta con burrata artesanal y aceite de albahaca",
        precio: 14,
      },
      {
        nombre: "Risotto de setas silvestres",
        descripcion: "Elaborado con arroz carnaroli, setas recolectadas localmente y queso parmesano curado 24 meses",
        precio: 18,
      },
      {
        nombre: "Carrillera de ternera ecológica",
        descripcion: "Cocinada a baja temperatura durante 12 horas con verduras de raíz y puré de patata violeta",
        precio: 22,
      },
      {
        nombre: "Tarta de manzana con helado de vainilla",
        descripcion: "Elaborada con manzanas de cultivo ecológico local y helado artesanal",
        precio: 8,
      },
    ],
    contacto: {
      telefono: "+34 912 345 678",
      email: "reservas@lahuertaorganica.com",
      web: "www.lahuertaorganica.com",
    },
  },
  {
    id: 2,
    nombre: "Maná Restaurante",
    descripcion: "Cocina de autor con ingredientes silvestres recolectados y técnicas de cocina sostenible.",
    descripcionLarga:
      "Maná Restaurante es un espacio gastronómico único que celebra la riqueza de nuestra tierra y mar. Nuestro chef, experto en cocina sostenible, selecciona personalmente los mejores ingredientes locales y de temporada para crear experiencias culinarias memorables.\n\nNuestra filosofía culinaria se basa en el profundo respeto por los ingredientes y el entorno natural. Practicamos una selección ética y sostenible, asegurando que nuestro impacto en el ecosistema sea mínimo. Complementamos estos ingredientes con productos de agricultores y pescadores locales que practican métodos tradicionales y respetuosos.\n\nCada plato en Maná Restaurante es una experiencia sensorial que conecta al comensal con el paisaje que lo rodea. Nuestras técnicas culinarias, tanto ancestrales como modernas, están diseñadas para resaltar los sabores naturales y preservar los nutrientes de cada ingrediente.",
    imagen: "/images/mana-restaurante.png",
    imagenes: [
      "/images/mana-restaurante.png",
      "/images/explosion-verano.png",
      "/images/smoothie-verde.png",
      "/images/ensalada-frutas.png",
    ],
    ubicacion: "Parque Natural",
    direccion: "Sendero del Bosque, 8, Parque Natural",
    coordenadas: { lat: 40.567, lng: -3.89 },
    calificacion: 4.9,
    numeroResenas: 112,
    precioMedio: 45,
    ecoCertificado: true,
    certificaciones: ["Cocina Silvestre Sostenible", "Slow Food", "Restaurante Carbono Neutro"],
    tiposCocina: ["De autor", "Silvestre", "Creativa"],
    horarios: {
      lunes: "Cerrado",
      martes: "Cerrado",
      miercoles: "19:00 - 23:00",
      jueves: "19:00 - 23:00",
      viernes: "13:00 - 16:00, 19:00 - 23:30",
      sabado: "13:00 - 16:00, 19:00 - 23:30",
      domingo: "13:00 - 16:00",
    },
    caracteristicas: [
      { nombre: "Menú degustación", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Vinos naturales", icono: <Wine className="h-4 w-4" /> },
      { nombre: "Ingredientes silvestres", icono: <Leaf className="h-4 w-4" /> },
      { nombre: "Cocina de temporada", icono: <Calendar className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Recolección silvestre ética y sostenible",
      "Cocina de desperdicio cero",
      "Energía renovable",
      "Programa de compensación de carbono",
      "Filtración y embotellado de agua in situ",
      "Colaboración con proyectos de conservación forestal",
    ],
    platosDestacados: [
      {
        nombre: "Carpaccio de setas silvestres",
        descripcion: "Selección de setas de temporada con aceite de hierbas aromáticas y queso curado local",
        precio: 16,
      },
      {
        nombre: "Trucha de río con hierbas de montaña",
        descripcion: "Trucha local cocinada a baja temperatura con emulsión de hierbas silvestres y vegetales de raíz",
        precio: 24,
      },
      {
        nombre: "Cordero ecológico con bayas y tubérculos",
        descripcion: "Cordero de pastoreo libre cocinado lentamente con bayas silvestres y tubérculos olvidados",
        precio: 28,
      },
      {
        nombre: "Postre del bosque",
        descripcion: "Variación de texturas y sabores con frutos del bosque, miel silvestre y hierbas aromáticas",
        precio: 12,
      },
    ],
    contacto: {
      telefono: "+34 945 678 901",
      email: "info@saboresdelbosque.com",
      web: "www.saboresdelbosque.com",
    },
  },
  {
    id: 3,
    nombre: "Frutería Maná",
    descripcion: "Jugos y batidos naturales con frutas orgánicas de temporada y opciones saludables.",
    descripcionLarga:
      "Frutería Maná es un espacio dedicado a la alimentación saludable y consciente, donde ofrecemos una amplia variedad de jugos, batidos y opciones nutritivas elaboradas con frutas y verduras orgánicas de temporada.\n\nNuestro compromiso con la sostenibilidad se refleja en cada aspecto de nuestro negocio. Trabajamos directamente con agricultores locales que practican métodos de cultivo orgánico, asegurando así la frescura y calidad de nuestros ingredientes mientras apoyamos la economía local.\n\nEn Frutería Maná, creemos que la alimentación saludable debe ser también deliciosa. Nuestros expertos en nutrición diseñan combinaciones que no solo son explosiones de sabor, sino que también aportan beneficios específicos para la salud. Ya sea que busques energía, desintoxicación, fortalecimiento del sistema inmunológico o simplemente disfrutar de un delicioso refresco natural, tenemos la opción perfecta para ti.",
    imagen: "/images/explosion-verano.png",
    imagenes: [
      "/images/explosion-verano.png",
      "/images/smoothie-verde.png",
      "/images/ensalada-frutas.png",
      "/images/quiosco-frutas.png",
    ],
    ubicacion: "Ciudad Verde",
    direccion: "Avenida de los Frutales, 28, Ciudad Verde",
    coordenadas: { lat: 40.345, lng: -3.678 },
    calificacion: 4.8,
    numeroResenas: 75,
    precioMedio: 8,
    ecoCertificado: true,
    certificaciones: ["Agricultura Ecológica", "Comercio Justo", "Residuo Cero"],
    tiposCocina: ["Jugos y batidos", "Vegana", "Saludable"],
    horarios: {
      lunes: "8:00 - 20:00",
      martes: "8:00 - 20:00",
      miercoles: "8:00 - 20:00",
      jueves: "8:00 - 20:00",
      viernes: "8:00 - 21:00",
      sabado: "9:00 - 21:00",
      domingo: "10:00 - 18:00",
    },
    caracteristicas: [
      { nombre: "Productos orgánicos", icono: <Leaf className="h-4 w-4" /> },
      { nombre: "Opciones sin azúcar", icono: <Wheat className="h-4 w-4" /> },
      { nombre: "Menú estacional", icono: <Calendar className="h-4 w-4" /> },
      { nombre: "Para llevar", icono: <Utensils className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Envases compostables",
      "Productos 100% orgánicos",
      "Aprovechamiento integral de la fruta",
      "Programa de compostaje",
      "Reducción de desperdicio alimentario",
      "Apoyo a agricultores locales",
    ],
    platosDestacados: [
      {
        nombre: "Explosión Verde",
        descripcion: "Batido de espinacas, plátano, manzana, jengibre y semillas de chía",
        precio: 6.5,
      },
      {
        nombre: "Tropical Sunrise",
        descripcion: "Jugo de piña, mango, naranja y maracuyá con un toque de menta",
        precio: 7,
      },
      {
        nombre: "Bowl de Açaí",
        descripcion: "Base de açaí con plátano, frutos rojos, granola casera y miel de abeja local",
        precio: 9,
      },
      {
        nombre: "Tostada de Aguacate",
        descripcion: "Pan de masa madre con aguacate, tomate, semillas y brotes orgánicos",
        precio: 8,
      },
    ],
    contacto: {
      telefono: "+34 910 234 567",
      email: "hola@fruteriamana.com",
      web: "www.fruteriamana.com",
    },
  },
  {
    id: 4,
    nombre: "Smoothies Verdes",
    descripcion: "Bebidas saludables y nutritivas con ingredientes orgánicos y superalimentos.",
    descripcionLarga:
      "Smoothies Verdes es un espacio dedicado a la nutrición consciente a través de deliciosas bebidas que combinan lo mejor de las frutas, verduras y superalimentos. Nuestro objetivo es ofrecer opciones que no solo sean deliciosas, sino que también aporten beneficios reales para la salud.\n\nCada uno de nuestros smoothies está cuidadosamente formulado por nutricionistas para maximizar su valor nutricional. Utilizamos exclusivamente ingredientes orgánicos, frescos y de temporada, asegurando así el mejor sabor y los mayores beneficios para la salud.\n\nEn Smoothies Verdes entendemos que cada persona tiene necesidades diferentes, por eso ofrecemos opciones personalizables que se adaptan a diversos objetivos: desde aumentar la energía y mejorar la digestión hasta fortalecer el sistema inmunológico o apoyar la recuperación después del ejercicio.",
    imagen: "/images/smoothie-verde.png",
    imagenes: [
      "/images/smoothie-verde.png",
      "/images/ensalada-frutas.png",
      "/images/explosion-verano.png",
      "/images/quiosco-frutas.png",
    ],
    ubicacion: "Zona Saludable",
    direccion: "Calle del Bienestar, 15, Zona Saludable",
    coordenadas: { lat: 40.456, lng: -3.789 },
    calificacion: 4.7,
    numeroResenas: 68,
    precioMedio: 7,
    ecoCertificado: true,
    certificaciones: ["Agricultura Ecológica", "Superalimentos Certificados", "Envases Sostenibles"],
    tiposCocina: ["Smoothies", "Vegana", "Saludable"],
    horarios: {
      lunes: "7:30 - 20:00",
      martes: "7:30 - 20:00",
      miercoles: "7:30 - 20:00",
      jueves: "7:30 - 20:00",
      viernes: "7:30 - 21:00",
      sabado: "8:30 - 21:00",
      domingo: "9:00 - 18:00",
    },
    caracteristicas: [
      { nombre: "Superalimentos", icono: <Leaf className="h-4 w-4" /> },
      { nombre: "Sin azúcares añadidos", icono: <Wheat className="h-4 w-4" /> },
      { nombre: "Opciones proteicas", icono: <Utensils className="h-4 w-4" /> },
      { nombre: "Personalizable", icono: <Calendar className="h-4 w-4" /> },
    ],
    practicasSostenibles: [
      "Ingredientes 100% orgánicos",
      "Envases biodegradables",
      "Pajitas compostables",
      "Aprovechamiento de la pulpa para compostaje",
      "Energía renovable",
      "Programa de fidelización con vasos reutilizables",
    ],
    platosDestacados: [
      {
        nombre: "Green Power",
        descripcion: "Espinacas, plátano, manzana verde, jengibre, espirulina y leche de almendras",
        precio: 6.5,
      },
      {
        nombre: "Protein Boost",
        descripcion: "Plátano, mantequilla de almendras, cacao, proteína vegetal, maca y leche de avena",
        precio: 7.5,
      },
      {
        nombre: "Detox Delight",
        descripcion: "Piña, pepino, apio, limón, menta y agua de coco",
        precio: 6.5,
      },
      {
        nombre: "Berry Bliss",
        descripcion: "Frutos rojos, plátano, semillas de chía, açaí y leche de coco",
        precio: 7,
      },
    ],
    contacto: {
      telefono: "+34 911 345 678",
      email: "info@smoothiesverdes.com",
      web: "www.smoothiesverdes.com",
    },
  },
]

export default function RestauranteDetallePage() {
  const params = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)
  const [imagenPrincipal, setImagenPrincipal] = useState("")
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Simulamos la carga de datos
    const cargarDatos = async () => {
      setCargando(true)
      // Buscamos el restaurante por ID
      const restauranteEncontrado = restaurantesDetalle.find((r) => r.id === Number(params.id))

      if (restauranteEncontrado) {
        setRestaurante(restauranteEncontrado)
        setImagenPrincipal(restauranteEncontrado.imagen)
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

  if (!restaurante) {
    return (
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Restaurante no encontrado</h1>
        <p className="mb-6">Lo sentimos, no pudimos encontrar el restaurante que estás buscando.</p>
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
            <Image src={imagenPrincipal || "/placeholder.svg"} alt={restaurante.nombre} fill className="object-cover" />
            {restaurante.ecoCertificado && (
              <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-md flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                <span className="font-medium">Eco Certificado</span>
              </div\
