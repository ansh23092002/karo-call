import './globals.css'
import Head from "next/head";

import LayoutWrapper from '../components/LayoutWrapper'


export const metadata = {
    metadataBase: new URL( process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"), // 👈 apna domain daalna
  title: "Karo Call Services | Home Repairs & Services",
  description: "Book trusted home repair, installation, and maintenance services with Karo Call. Fast, reliable, and verified professionals.",
  keywords: "home repair, handyman, installation, maintenance, Karo Call, services, trusted, verified, booking",
    icons: {
    icon: '/favicon.ico', // Browser tab favicon
    apple: '/favicon-apple.png', // Optional for Apple devices
  },
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
        
        <link rel="preload" href="/styles/globals.css" as="style" />
        <link rel="preload" href="../image/Banner/ACRepair.webp" as="image" />
             
                {/* SEO: JSON-LD structured data for Organization and Website */}
        
              {/* SEO: JSON-LD for Services */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "",
                "@type": "Service",
                "serviceType": "Home Repair & Maintenance",
                "provider": {
                  "@type": "Organization",
                  "name": "Karo Call Services",
                  "url": "https://karocall.com"
                },
                "areaServed": "India",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "IN"
                    }
                  }
                }
              })
            }}
            aria-label="Karo Call Services Service Structured Data"
          />
          {/* SEO: JSON-LD for Customer Reviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "Karo Call Services"
                },
                "ratingValue": "4.8",
                "reviewCount": "120"
              })
            }}
            aria-label="Karo Call Services Reviews Structured Data"
          />
      </Head>
      <body className="bg-gray-50">

        <main>
          <LayoutWrapper>   

          {children}
          </LayoutWrapper>
        </main>
     
      </body>
    </html>
  );
}