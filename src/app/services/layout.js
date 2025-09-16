

export const metadata = {
  title: "Services | Karo Call Services",
  description: "Explore our range of home repair, installation, and maintenance services. Book trusted professionals with Karo Call.",
  keywords: "services, home repair, installation, maintenance, Karo Call, professionals, booking",
  openGraph: {
    title: "Services | Karo Call Services",
    description: "Explore our range of home repair, installation, and maintenance services. Book trusted professionals with Karo Call.",
    url: "https://karocall.com/services",
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

export default function ServicesLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main >
          {children}
        </main>
    
      </body>
    </html>
  );
}
