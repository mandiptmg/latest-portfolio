import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Footer/Header'
import Footer from '@/components/Header/Footer/Footer'
import { Provider } from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mandip Tamang',
  description: 'Created by Mandip Tamang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className=' overflow-x-hidden'>
      <body className={`${inter.className} dark:text-white dark:bg-[#0f152c] `}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
