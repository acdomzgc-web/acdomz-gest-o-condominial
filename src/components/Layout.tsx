import { Outlet } from 'react-router-dom'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import FloatingContact from './FloatingContact'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
