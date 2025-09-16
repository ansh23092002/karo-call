
export const metadata = {
  title: "Contact Us | Karo Call Services",
  description: "Get in touch with Karo Call Services for home repair, installation, and maintenance inquiries. We're here to help!",
  keywords: "contact, Karo Call, home repair, support, help, services",
  openGraph: {
    title: "Contact Us | Karo Call Services",
    description: "Get in touch with Karo Call Services for home repair, installation, and maintenance inquiries. We're here to help!",
    url: "https://karocall.com/contact",
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

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <main >
          {children}
        </main>

      </body>
    </html>
  );
}
