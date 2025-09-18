"use client"

import { usePathname } from "next/navigation"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()

  // agar admin route hai to navbar/footer hide kar do
  const hideLayout = pathname.startsWith("/admin")

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}
