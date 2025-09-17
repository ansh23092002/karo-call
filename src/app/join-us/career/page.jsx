import Career from "./Career"

export const metadata = {
  title: "Join Us | Career | Karo Call Services",
  description: "Explore career opportunities with Karo Call Services. Join our team and build your future with us.",
  keywords: "career, jobs, join us, Karo Call, opportunities, team, work",
  openGraph: {
    title: "Join Us | Career | Karo Call Services",
    description: "Explore career opportunities with Karo Call Services. Join our team and build your future with us.",
    url: "https://karocall.com/join-us/career",
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

const page = () => {
  return (
    <div>
      <Career/>
    </div>
  )
}

export default page
