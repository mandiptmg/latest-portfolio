'use client'
import { AppProvider } from '@/context/context'
// import { useEffect, useRef } from 'react'
export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <AppProvider>{children}</AppProvider>
    </div>
  )
}
