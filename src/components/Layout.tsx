import { Outlet } from 'react-router-dom'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import { Toaster } from '@/components/ui/sonner'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
