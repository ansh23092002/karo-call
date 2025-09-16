

export const metadata = {
  title: "Join Us | Service Provider | Karo Call Services",
  description: "Become a service provider with Karo Call. Join our network of trusted professionals and grow your business.",
  keywords: "join us, service provider, Karo Call, partner, business, network, professionals",
  openGraph: {
    title: "Join Us | Service Provider | Karo Call Services",
    description: "Become a service provider with Karo Call. Join our network of trusted professionals and grow your business.",
    url: "https://karocall.com/join-us/serviceProvider",
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

export default function ServiceProviderLayout({ children }) {
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
