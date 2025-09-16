import Navbar from "../components/Navbar";
import './globals.css'
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Karo Call Services | Home Repairs & Services",
  description: "Book trusted home repair, installation, and maintenance services with Karo Call. Fast, reliable, and verified professionals.",
  keywords: "home repair, handyman, installation, maintenance, Karo Call, services, trusted, verified, booking",
  openGraph: {
    title: "Karo Call Services",
    description: "Book trusted home repair, installation, and maintenance services with Karo Call.",
    url: "https://karocall.com",
    siteName: "Karo Call Services",
    images: [
      {
        url: "/image/BANNER.png",
        width: 1200,
        height: 630,
        alt: "Karo Call Services Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <Head>
    <link ref="preload" href="/styles/globals.css"  as="style"/>
      <link rel="preload" href="../image/Banner/ACRepair.webp" as="image" />
   </Head>
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}