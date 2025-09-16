

export const metadata = {
  title: "Blog | Karo Call Services",
  description: "Read the latest articles, tips, and success stories from Karo Call Services. Stay updated with our blog.",
  keywords: "blog, articles, tips, stories, Karo Call, home repair, services",
  openGraph: {
    title: "Blog | Karo Call Services",
    description: "Read the latest articles, tips, and success stories from Karo Call Services. Stay updated with our blog.",
    url: "https://karocall.com/blog",
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

export default function BlogLayout({ children }) {
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
