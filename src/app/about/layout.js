export const metadata = {
  title: "About Us | Karo Call Services",
  description: "Learn more about Karo Call Services, our mission, vision, and the trusted professionals behind our home repair and installation services.",
  keywords: "about, Karo Call, home repair, services, mission, vision, team, professionals",
  openGraph: {
    title: "About Us | Karo Call Services",
    description: "Learn more about Karo Call Services, our mission, vision, and the trusted professionals behind our home repair and installation services.",
    url: "https://karocall.com/about",
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

export default function AboutLayout({ children }) {
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