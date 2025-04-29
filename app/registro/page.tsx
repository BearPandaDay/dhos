"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const enfermedadesCronicas = [
  { id: "diabetes", label: "Diabetes" },
  { id: "hipertension", label: "Hipertensión" },
  { id: "asma", label: "Asma" },
  { id: "artritis", label: "Artritis" },
  { id: "cardiopatia", label: "Cardiopatía" },
  { id: "otra", label: "Otra" },
]

const formSchema = z.object({
  nombreCompleto: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres.",
  }),
  fechaNacimiento: z.string().refine(
    (date) => {
      const today = new Date()
      const birthDate = new Date(date)
      return birthDate < today
    },
    {
      message: "La fecha de nacimiento debe ser anterior a hoy.",
    },
  ),
  peso: z.string().refine(
    (value) => {
      const peso = Number.parseFloat(value)
      return !isNaN(peso) && peso > 0 && peso < 300
    },
    {
      message: "Por favor ingresa un peso válido (entre 1 y 300 kg).",
    },
  ),
  enfermedadesCronicas: z.array(z.string()).optional(),
  medicamentos: z.string().optional(),
  alergias: z.string().optional(),
})

export default function RegistroPage() {
  const [activeTab, setActiveTab] = useState("datos-personales")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registroExitoso, setRegistroExitoso] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreCompleto: "",
      email: "",
      password: "",
      fechaNacimiento: "",
      peso: "",
      enfermedadesCronicas: [],
      medicamentos: "",
      alergias: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulamos una petición al servidor
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setRegistroExitoso(true)
    }, 1500)
  }

  // Si el registro fue exitoso, mostramos la pantalla de confirmación
  if (registroExitoso) {
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
            Tu cuenta ha sido creada correctamente. Ahora puedes disfrutar de todas las funcionalidades de  MANÁ- DHO&apos;s y
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

  return (
    <div className="py-8 px-4 md:px-8 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Crea tu cuenta en  MANÁ- DHO&apos;s</CardTitle>
          <CardDescription>Completa tus datos personales y de salud para una experiencia personalizada</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="datos-personales">Datos Personales</TabsTrigger>
                  <TabsTrigger value="datos-salud">Datos de Salud</TabsTrigger>
                </TabsList>

                <TabsContent value="datos-personales" className="space-y-6 pt-4">
                  <FormField
                    control={form.control}
                    name="nombreCompleto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="juan@ejemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fechaNacimiento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de nacimiento</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setActiveTab("datos-salud")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Siguiente
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="datos-salud" className="space-y-6 pt-4">
                  <FormField
                    control={form.control}
                    name="peso"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peso (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="70" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="enfermedadesCronicas"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Enfermedades crónicas</FormLabel>
                          <FormDescription>Selecciona las que apliquen</FormDescription>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {enfermedadesCronicas.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="enfermedadesCronicas"
                              render={({ field }) => {
                                return (
                                  <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...(field.value || []), item.id])
                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="medicamentos"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medicamentos que toma</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escriba los medicamentos que toma regularmente"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="alergias"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alergias</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describa sus alergias (medicamentos, alimentos, etc.)"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("datos-personales")}>
                      Anterior
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                      {isSubmitting ? "Procesando..." : "Crear cuenta"}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
