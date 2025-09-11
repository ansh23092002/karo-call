import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/globals.css"

export const metadata = {
  title: "Karo Call Services Clone",
  description: "Cloned with Next.js + Tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
