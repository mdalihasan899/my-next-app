// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
// import AuthProvider from '@/components/AuthProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MarketPlace - Find Amazing Products',
  description: 'Discover and sell unique products in our marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider> */}
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}