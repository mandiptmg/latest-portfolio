'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface AppContextType {
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
  scroll:string
  setScroll: React.Dispatch<React.SetStateAction<string>>

}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(false)
  const [scroll, setScroll] = useState('')


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

    const handlerStickey = () => {
     if (window.scrollY > 50) {
       setScroll('bg-gray-100 dark:bg-[#0f152c] shadow-xl')
     } else {
       setScroll('')
     }
    }
    // Call the handlerStickey function initially and add the scroll event listener
    handlerStickey()

    const handlerWidth = () => {
      if (window.innerWidth > 768) {
        setMenu(false)
      }
    }
    handlerWidth()
    window.addEventListener('scroll', handlerStickey)
    window.addEventListener('resize', handlerWidth)

    return () => {
      window.removeEventListener('resize', handlerWidth)
      window.removeEventListener('scroll', handlerStickey)
    }
  })
  return (
    <AppContext.Provider value={{ menu, setMenu, dark, setDark, scroll , setScroll }}>
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
