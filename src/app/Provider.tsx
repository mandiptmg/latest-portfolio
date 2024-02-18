'use client'
import { AppProvider } from "@/context/context"
export const Provider =({children}:{children:React.ReactNode})=>{
 return(
  <div>
   <AppProvider>
   {children}
   </AppProvider>
  </div>
 )
}