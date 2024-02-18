'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface AppContextType {
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const handlerWidth = () => {
      if (window.innerWidth > 768) {
        setMenu(false)
      }
    }

    handlerWidth()
    window.addEventListener('resize', handlerWidth)

    return () => {
      window.removeEventListener('resize', handlerWidth)
    }
  })
  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider')
  }
  return context
}
