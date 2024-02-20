'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface AppContextType {
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const handlerDark = () => {
      const darkMode = localStorage.getItem('darkMode')
      const isDarkMode = darkMode === 'true'
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      setDark(isDarkMode)
    }
    handlerDark()
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
    <AppContext.Provider value={{ menu, setMenu, dark, setDark }}>
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
