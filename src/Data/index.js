
import { RiCarWashingFill,RiMacbookFill,RiMacLine,RiFridgeFill } from "react-icons/ri";
import { GiCctvCamera,GiWashingMachine } from "react-icons/gi";
import { MdOutlinePlumbing,MdElectricalServices } from "react-icons/md";
import { TbAirConditioningDisabled } from "react-icons/tb";

export const features = [
    {
      title: "Experienced Technicians",
      description:
        "Fully trained and certified professionals. We bring years of hands-on experience to every job.",
      img: "/image/experienced.jpg",
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive rates with no hidden fees. Quality service doesn’t have to break the bank.",
      img: "/image/pricing.jpg",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our top priority—guaranteed. We’re not happy until you are.",
      img: "/image/satisfaction.jpg",
    },
    {
      title: "24/7 Availability",
      description:
        "We’re here whenever you need us, day or night. Help is just a call away—anytime.",
      img: "/image/availability.jpg",
    },
  ];

   export const services = [
    {
      title: "Electrical Services",
      description:
        "Expert electrical repairs and installations to keep your home safe and powered.",
      icon: <MdElectricalServices className="text-3xl" />,
      link: "#",
    },
    {
      title: "Car Wash Services",
      description:
        "Get a spotless shine with our professional car wash at your doorstep.",
      icon: <RiCarWashingFill className="text-3xl" />,
      link: "#",
    },
    {
      title: "Fridge Repair Services",
      description:
        "Fast and reliable fridge repair to keep your food fresh and cool.",
      icon: <RiFridgeFill className="text-3xl" />,
      link: "#",
    },
    {
      title: "Washing Machine Repair Services",
      description:
        "Hassle-free washing machine repairs for smooth and efficient laundry days.",
      icon: <GiWashingMachine className="text-3xl" />,
      link: "#",
    },
    {
      title: "AC Repair Services",
      description:
        "Beat the heat with our quick and efficient AC repair and maintenance services.",
      icon: <TbAirConditioningDisabled className="text-3xl" />,
      link: "#",
    },
    {
      title: "Plumbing Services",
      description:
        "Trusted plumbing solutions for leaks, fittings, and installations, done right the first time.",
      icon: <MdOutlinePlumbing className="text-3xl" />,
      link: "#",
    },
    {
      title: "CCTV Camera Services",
      description:
        "Hassle-free washing machine repairs for smooth and efficient laundry days.",
      icon: <GiCctvCamera  className="text-3xl" />,
      link: "#",
    },
    {
      title: "Laptop Serivce",
      description:
        "Fast, affordable laptop repair with expert technical support.",
      icon: <RiMacbookFill className="text-3xl" />,
      link: "#",
    },
    {
      title: "Desktop Services",
      description:
        "Expert desktop service to boost speed and performance.",
      icon: <RiMacLine className="text-3xl" />,
      link: "#",
    },
  ];

  export const review =[
    {
      name:'Sonal',
      des:'My washing machine and fridge were repaired perfectly on the first visit. The technicians are skilled and polite! It saved me both time and money, and I will definitely choose them for future services.',
      img:'/image/reviews/Sonal.jpg',
    },
    {
      name:'Naman',
      des:'I used their car wash and electrical services — both were hassle-free and neatly done. Great experience! Their team is polite and pays attention to detail, making the whole process smooth and easy.',
      img:'/image/reviews/Naman.jpg',
    },
    {
      name:'Kailash',
      des:'karo Call Services did an excellent job with my AC repair — quick, professional, and affordable! The technician arrived on time and explained everything clearly. I’m really satisfied with their service.',
      img:'/image/reviews/Kailash.jpg',
    },
    {
      name:'Priyanka',
      des:'From plumbing to appliance repair, they offer reliable and on-time service. I’m really happy with their work! Their service quality and customer support are truly impressive and worth recommending.',
      img:'/image/reviews/Priyanka.jpg',
    },
  ];

  export const steps = [
  {
    img: "image/icons/book-service.png", // replace with your image path
    title: "Book a Service",
  },
  {
    img: "image/icons/booking-confirmed.png",
    title: "Booking Confirmed",
  },
  {
    img: "image/icons/handyman.png",
    title: "Handyman Arrives",
  },
  {
    img: "image/icons/services-done.png",
    title: "Services Done",
  },
  {
    img: "image/icons/pay-feedback.png",
    title: "Pay & Feedback",
  },
];