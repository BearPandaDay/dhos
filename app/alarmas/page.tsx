'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pill, Clock, Droplets, Dumbbell, Bell, Plus, Calendar } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Datos de ejemplo
const recordatoriosIniciales = [
  {
    id: 1,
    tipo: "medicamento",
    titulo: "Tomar medicación para la presión",
    hora: "08:00",
    dias: ["L", "M", "X", "J", "V", "S", "D"],
    icono: <Pill className="h-5 w-5" />,
  },
  {
    id: 2,
    tipo: "hidratacion",
    titulo: "Beber un vaso de agua",
    hora: "10:30",
    dias: ["L", "M", "X", "J", "V"],
    icono: <Droplets className="h-5 w-5" />,
  },
  {
    id: 3,
    tipo: "ejercicio",
    titulo: "Sesión de yoga",
    hora: "18:00",
    dias: ["L", "X", "V"],
    icono: <Dumbbell className="h-5 w-5" />,
  },
  {
    id: 4,
    tipo: "medicamento",
    titulo: "Tomar vitaminas",
    hora: "21:00",
    dias: ["L", "M", "X", "J", "V", "S", "D"],
    icono: <Pill className="h-5 w-5" />,
  },
]

export default function AlarmasPage() {
  const [recordatorios, setRecordatorios] = useState(recordatoriosIniciales)
  const [nuevoRecordatorio, setNuevoRecordatorio] = useState({
    tipo: "",
    titulo: "",
    hora: "",
    dias: ["L", "M", "X", "J", "V", "S", "D"],
  })
  const [dialogOpen, setDialogOpen] = useState(false)

  const getIconoByTipo = (tipo) => {
    switch (tipo) {
      case "medicamento":
        return <Pill className="h-5 w-5" />
      case "hidratacion":
        return <Droplets className="h-5 w-5" />
      case "ejercicio":
        return <Dumbbell className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const handleCrearRecordatorio = () => {
    if (!nuevoRecordatorio.tipo || !nuevoRecordatorio.titulo || !nuevoRecordatorio.hora) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      })
      return
    }

    const nuevoId = recordatorios.length > 0 ? Math.max(...recordatorios.map((r) => r.id)) + 1 : 1

    setRecordatorios([
      ...recordatorios,
      {
        id: nuevoId,
        ...nuevoRecordatorio,
        icono: getIconoByTipo(nuevoRecordatorio.tipo),
      },
    ])

    setNuevoRecordatorio({
      tipo: "",
      titulo: "",
      hora: "",
      dias: ["L", "M", "X", "J", "V", "S", "D"],
    })

    setDialogOpen(false)

    toast({
      title: "Recordatorio creado",
      description: "Tu recordatorio ha sido creado con éxito",
    })
  }

  return (
    <div className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Mis Recordatorios</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" /> Nuevo recordatorio
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear nuevo recordatorio</DialogTitle>
              <DialogDescription>Configura los detalles de tu nuevo recordatorio</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="tipo">Tipo de recordatorio</Label>
                <Select
                  value={nuevoRecordatorio.tipo}
                  onValueChange={(value) => setNuevoRecordatorio({ ...nuevoRecordatorio, tipo: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medicamento">Medicamento</SelectItem>
                    <SelectItem value="hidratacion">Hidratación</SelectItem>
                    <SelectItem value="ejercicio">Ejercicio</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  placeholder="Ej: Tomar medicación"
                  value={nuevoRecordatorio.titulo}
                  onChange={(e) => setNuevoRecordatorio({ ...nuevoRecordatorio, titulo: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hora">Hora</Label>
                <Input
                  id="hora"
                  type="time"
                  value={nuevoRecordatorio.hora}
                  onChange={(e) => setNuevoRecordatorio({ ...nuevoRecordatorio, hora: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" onClick={handleCrearRecordatorio}>
                Guardar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {recordatorios.map((recordatorio) => (
          <Card key={recordatorio.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div
                  className={`flex items-center justify-center p-6 ${
                    recordatorio.tipo === "medicamento"
                      ? "bg-blue-100"
                      : recordatorio.tipo === "hidratacion"
                        ? "bg-cyan-100"
                        : recordatorio.tipo === "ejercicio"
                          ? "bg-orange-100"
                          : "bg-gray-100"
                  }`}
                >
                  <div
                    className={`${
                      recordatorio.tipo === "medicamento"
                        ? "text-blue-600"
                        : recordatorio.tipo === "hidratacion"
                          ? "text-cyan-600"
                          : recordatorio.tipo === "ejercicio"
                            ? "text-orange-600"
                            : "text-gray-600"
                    }`}
                  >
                    {recordatorio.icono}
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-semibold">{recordatorio.titulo}</h3>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{recordatorio.hora}</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50">
                  <div className="flex gap-1">
                    {recordatorio.dias.map((dia, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                          recordatorio.dias.includes(dia) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {dia}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-green-600" />
          <p className="text-gray-700">
            Puedes sincronizar tus recordatorios con tu calendario personal para no olvidar ninguna actividad
            importante.
          </p>
        </div>
      </div>
    </div>
  )
}
