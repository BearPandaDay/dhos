import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src="/images/logo-beta.png" alt="ADMINISTRADORA BETA" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold">DHO&apos;s</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Plataforma digital ecoturística que integra hoteles, restaurantes y transporte eco-sostenible.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explorar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/listado" className="text-gray-600 hover:text-green-600">
                  Hoteles
                </Link>
              </li>
              <li>
                <Link href="/listado" className="text-gray-600 hover:text-green-600">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/mapa" className="text-gray-600 hover:text-green-600">
                  Mapa Interactivo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Ecomovilidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-600">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full mb-4">
              <Image
                src="/images/logo-beta.png"
                alt="ADMINISTRADORA BETA, ABC & CIA. LTDA."
                fill
                className="object-cover"
              />
            </div>
            <p>ADMINISTRADORA BETA, ABC & CIA. LTDA.</p>
            <p>&copy; {new Date().getFullYear()} DHO&apos;s. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
