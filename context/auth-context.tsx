"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  name: string
  email: string
  avatar: string
}

type AuthContextType = {
  user: User | null
  isLoggedIn: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}
