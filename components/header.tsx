"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, Bell, LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { user, isLoggedIn, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 mr-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/images/logo-beta.png" alt="ADMINISTRADORA BETA" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold">DHO&apos;s</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inicio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explorar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/listado"
                        >
                          <div className="relative h-10 w-10 overflow-hidden rounded-full mb-2">
                            <Image
                              src="/images/logo-beta.png"
                              alt="ADMINISTRADORA BETA"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Destinos Eco-sostenibles</div>
                          <p className="text-sm leading-tight text-white/90">
                            Descubre hoteles y restaurantes comprometidos con el medio ambiente.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/listado" title="Hoteles">
                      Alojamientos eco-amigables para tu estancia.
                    </ListItem>
                    <ListItem href="/listado" title="Restaurantes">
                      Gastronomía sostenible con productos locales.
                    </ListItem>
                    <ListItem href="/mapa" title="Mapa Interactivo">
                      Visualiza todos los puntos de interés.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/mapa" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Mapa</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/alarmas">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name || "Usuario"} />
                    <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "US"}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Mis recordatorios</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Iniciar sesión</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/registro">Registrarse</Link>
              </Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 py-6">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src="/images/logo-beta.png" alt="ADMINISTRADORA BETA" fill className="object-cover" />
                </div>
                <span>DHO&apos;s</span>
              </Link>
              <div className="grid gap-4">
                <Link href="/" className="flex items-center gap-2 text-base font-medium">
                  Inicio
                </Link>
                <Link href="/listado" className="flex items-center gap-2 text-base font-medium">
                  Hoteles y Restaurantes
                </Link>
                <Link href="/mapa" className="flex items-center gap-2 text-base font-medium">
                  Mapa Interactivo
                </Link>
                {isLoggedIn && (
                  <Link href="/alarmas" className="flex items-center gap-2 text-base font-medium">
                    Mis Recordatorios
                  </Link>
                )}
              </div>
              <div className="grid gap-2">
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name || "Usuario"} />
                        <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "US"}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar sesión
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/login">Iniciar sesión</Link>
                    </Button>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/registro">Registrarse</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
