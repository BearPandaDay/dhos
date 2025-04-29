"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RegistroExitosoPage() {
  // Efecto para simular confeti o animación al cargar la página
  useEffect(() => {
    // Aquí podríamos agregar alguna animación adicional si se desea
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-center"
      >
        <CheckCircle className="h-32 w-32 text-green-600 mx-auto mb-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4">¡Registro Exitoso!</h1>
        <p className="text-gray-600 mb-8">
          Tu cuenta ha sido creada correctamente. Ahora puedes disfrutar de todas las funcionalidades de DHO&apos;s y
          comenzar a explorar destinos eco-sostenibles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/listado">Explorar destinos</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-green-50 rounded-lg max-w-md text-center"
      >
        <h2 className="font-semibold text-green-800 mb-2">¿Qué puedes hacer ahora?</h2>
        <ul className="text-green-700 text-sm space-y-2">
          <li>• Explorar hoteles y restaurantes eco-sostenibles</li>
          <li>• Configurar recordatorios para tus medicamentos</li>
          <li>• Descubrir puntos de interés en el mapa interactivo</li>
          <li>• Planificar tu próxima aventura eco-turística</li>
        </ul>
      </motion.div>
    </div>
  )
}
