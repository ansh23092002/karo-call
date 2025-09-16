import {
  RiCarWashingFill,
  RiMacbookFill,
  RiMacLine,
  RiFridgeFill,
} from "react-icons/ri";
import { GiCctvCamera, GiWashingMachine } from "react-icons/gi";
import { MdOutlinePlumbing, MdElectricalServices } from "react-icons/md";
import { TbAirConditioningDisabled } from "react-icons/tb";

export const features = [
  {
    title: "Experienced Technicians",
    description:
      "Fully trained and certified professionals. We bring years of hands-on experience to every job.",
    img: "/image/experienced.webp",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive rates with no hidden fees. Quality service doesn’t have to break the bank.",
    img: "/image/pricing.webp",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority—guaranteed. We’re not happy until you are.",
    img: "/image/satisfaction.webp",
  },
  {
    title: "24/7 Availability",
    description:
      "We’re here whenever you need us, day or night. Help is just a call away—anytime.",
    img: "/image/availability.webp",
  },
];

export const services = [
  {
    title: "Electrical Services",
    description:
      "Expert electrical repairs and installations to keep your home safe and powered.",
    icon: <MdElectricalServices className="title-3xl" />,
    link: "#",
  },
  {
    title: "Car Wash Services",
    description:
      "Get a spotless shine with our professional car wash at your doorstep.",
    icon: <RiCarWashingFill className="title-3xl" />,
    link: "#",
  },
  {
    title: "Fridge Repair Services",
    description:
      "Fast and reliable fridge repair to keep your food fresh and cool.",
    icon: <RiFridgeFill className="title-3xl" />,
    link: "#",
  },
  {
    title: "Washing Machine Repair Services",
    description:
      "Hassle-free washing machine repairs for smooth and efficient laundry days.",
    icon: <GiWashingMachine className="title-3xl" />,
    link: "#",
  },
  {
    title: "AC Repair Services",
    description:
      "Beat the heat with our quick and efficient AC repair and maintenance services.",
    icon: <TbAirConditioningDisabled className="title-3xl" />,
    link: "#",
  },
  {
    title: "Plumbing Services",
    description:
      "Trusted plumbing solutions for leaks, fittings, and installations, done right the first time.",
    icon: <MdOutlinePlumbing className="title-3xl" />,
    link: "#",
  },
  {
    title: "CCTV Camera Services",
    description:
      "Hassle-free washing machine repairs for smooth and efficient laundry days.",
    icon: <GiCctvCamera className="title-3xl" />,
    link: "#",
  },
  {
    title: "Laptop Serivce",
    description:
      "Fast, affordable laptop repair with expert technical support.",
    icon: <RiMacbookFill className="title-3xl" />,
    link: "#",
  },
  {
    title: "Desktop Services",
    description: "Expert desktop service to boost speed and performance.",
    icon: <RiMacLine className="title-3xl" />,
    link: "#",
  },
];

export const review = [
  {
    name: "Sonal",
    des: "My washing machine and fridge were repaired perfectly on the first visit. The technicians are skilled and polite! It saved me both time and money, and I will definitely choose them for future services.",
    img: "/image/reviews/Sonal.webp",
  },
  {
    name: "Naman",
    des: "I used their car wash and electrical services — both were hassle-free and neatly done. Great experience! Their team is polite and pays attention to detail, making the whole process smooth and easy.",
    img: "/image/reviews/Naman.webp",
  },
  {
    name: "Kailash",
    des: "karo Call Services did an excellent job with my AC repair — quick, professional, and affordable! The technician arrived on time and explained everything clearly. I’m really satisfied with their service.",
    img: "/image/reviews/Kailash.webp",
  },
  {
    name: "Priyanka",
    des: "From plumbing to appliance repair, they offer reliable and on-time service. I’m really happy with their work! Their service quality and customer support are truly impressive and worth recommending.",
    img: "/image/reviews/Priyanka.webp",
  },
];

export const steps = [
  {
    img: "/image/icons/book-service.webp", // replace with your /image path
    title: "Book a Service",
  },
  {
    img: "/image/icons/booking-confirmed.webp",
    title: "Booking Confirmed",
  },
  {
    img: "/image/icons/handyman.webp",
    title: "Handyman Arrives",
  },
  {
    img: "/image/icons/services-done.webp",
    title: "Services Done",
  },
  {
    img: "/image/icons/pay-feedback.webp",
    title: "Pay & Feedback",
  },
];

export const services_data = [
  {
    top: "Fridge Repair Services",
    description:
      "Keep your fridge running efficiently with our prompt and professional repair services. We service all major brands and models with expert diagnostics and tools. Our goal is to minimize food spoilage and inconvenience with fast turnaround times.",
    why: {
      title: "We fix",
      list: [
        {
          point:
            "Cooling Issues: Fixing problems like uneven cooling or no cooling at all.",
        },
        {
          point:
            "Water Leakage: Resolving leaks caused by clogged drain pipes or faulty valves.",
        },
        {
          point:
            "Strange Noises: Diagnosing and repairing unusual humming, buzzing, or rattling sounds.",
        },
      ],
    },
    img: "/image/services/Fridge.webp",
  },
  {
    top: "AC Repair Services",
    description:
      "Stay cool and comfortable year-round with our efficient AC repair and maintenance services. We work on all types of air conditioners including window, split, and central systems. Our experienced team ensures your AC runs at peak performance during every season.",
    why: {
      title: "We provide",
      list: [
        {
          point:
            "Diagnostic and Troubleshooting: Identifying and fixing issues quickly and accurately",
        },
        {
          point:
            "Refrigerant Recharge: Replenishing low refrigerant to restore proper cooling efficiency.",
        },
        {
          point:
            "Compressor Repairs: Fixing or replacing faulty compressors for optimal performance.",
        },
      ],
    },
    img: "/image/services/AC.webp",
  },
  {
    top: "Electrical Services",
    description:
      "Our licensed electricians deliver safe and reliable solutions to keep your home powered and protected. We handle both residential and commercial electrical needs with complete precision. Whether it’s a small fix or a major upgrade, we ensure top-notch workmanship every time.",
    why: {
      title: "We offer",
      list: [
        { point: "Electrical repairs and rewiring" },
        { point: "Outlet and switch installation" },
        { point: "Lighting fixture setup" },
        { point: "Electrical panel upgrades" },
        { point: "Comprehensive safety inspections." },
      ],
    },
    img: "/image/services/electrician.webp",
  },
  {
    top: "Car Wash Services",
    description:
      "We bring shine back to your vehicle with a range of expert car cleaning services tailored to your needs. Our team uses premium products and eco-friendly methods for the best results. Every wash is carried out with care to maintain the beauty and condition of your vehicle..",
    why: {
      title: "Our services",
      list: [
        {
          point:
            "Exterior Hand Wash: Thorough cleaning of the vehicle’s exterior, including wheels and tires.",
        },
        {
          point:
            "Interior Cleaning: Vacuuming and wiping down surfaces, cleaning of carpets and upholstery.",
        },
      ],
    },
    img: "/image/services/Car.webp",
  },
  {
    top: "Washing Machine Repair Services",
    description:
      "Ensure smooth laundry days with our trusted washing machine repair solutions. We understand how disruptive a faulty washer can be to your routine. Our expert technicians arrive fully equipped to diagnose and repair on the spot.",
    why: {
      title: "Our expertise covers",
      list: [
        {
          point:
            "Not Spinning or Draining: Fixing issues that prevent your machine from spinning or draining properly.",
        },
        {
          point:
            "Leaks and Water Damage: Repairing water leakage from hoses, door seals, and pumps.",
        },
        {
          point:
            "No Power: Troubleshooting and fixing electrical issues causing your",
        },
      ],
    },
    img: "/image/services/washing.webp",
  },
  {
    top: "Plumbing Services",
    description:
      "From minor leaks to major installations, our plumbing experts have you covered. We use modern tools to ensure accurate detection and effective repair. Your satisfaction is our priority, with prompt service and lasting results.",
    why: {
      title: "We offer",
      list: [
        {
          point:
            "Leak Detection & Repair: We specialize in locating and repairing leaks in your pipes, faucets, and fixtures, saving you from expensive water damage",
        },
        {
          point:
            "Drain Cleaning & Unclogging: Whether it’s a slow drain or a completely blocked pipe, we have the tools and expertise to restore smooth drainage.",
        },
      ],
    },
    img: "/image/services/plumbing.webp",
  },
  {
    top: "CCTV Camera Installation & Repair Services",
    description:
      "Secure your property with our professional CCTV installation and repair services. We offer tailored solutions to meet your safety needs, whether for homes, offices, or commercial spaces.",
    why: {
      title: "Our Services",
      list: [
        {
          point:
            "Expert installation of CCTV cameras for complete area coverage.",
        },
        { point: "Quick and reliable repair of all types of CCTV systems." },
        { point: "System upgrades and configuration for enhanced performance" },
        { point: "Troubleshooting camera connectivity and recording issues." },
        {
          point:
            "Routine maintenance to ensure smooth and uninterrupted surveillance.",
        },
      ],
    },
    img: "/image/services/CCTV.webp",
  },
  {
    top: "Laptop Services",
    description:
      "Keep Your Devices Running Smoothly with Our Expert Laptop Repair and Maintenance Services We provide reliable and efficient laptop solutions tailored to meet your personal or business needs. Whether it's a hardware issue or software glitch, our technicians are here to help.",
    why: {
      title: "We Services",
      list: [
        {
          point:
            "Professional diagnosis and repair of all laptop brands and models.",
        },
        {
          point:
            "Drain Cleaning & Unclogging: Whether it’s a slow drain or a completely",
        },
        {
          point:
            "blocked pipe, we have the tools and expertise to restore smooth drainage.",
        },
        {
          point:
            "Screen replacements, keyboard repairs, and battery servicing.",
        },
        { point: "Operating system installation, updates, and optimization." },
      ],
    },
    img: "/image/services/laptop.webp",
  },
];

export const KCS_Promises = [
  {
    title: "Our Offerings",
    img: "/image/promises/v1.webp",
  },
  {
    title: "Free Reschedule",
    img: "/image/promises/v2.webp",
  },
  {
    title: "Guaranteed Solution",
    img: "/image/promises/v3.webp",
  },
  {
    title: "Kcs Partners",
    img: "/image/promises/v4.webp",
  },
];

export const Popular_Services = [
  {
    img: "/image/services/AC.webp", // replace with your /image path
    title: "AC Repair Services",
  },
  {
    img: "/image/services/plumbing.webp",
    title: "Plumbing Services",
  },
  {
    img: "/image/services/electrician.webp",
    title: "Electrician Services",
  },
];

export const about = [
  {
    top: "Vision",
    description:
      "To be the best service provider company across Chhattisgarh and expand to a Pan-India level. We aim to set new standards for service excellence by offering reliable, innovative installation, repair, and automation solutions while building long-term relationships with our clients.",
    img: "/image/idea.webp",
  },
  {
    top: "Mission",
    description:
      "To provide exceptional automation services that exceed customer expectations, while fostering a culture of innovation, reliability, and trust. Our mission is to simplify service experiences, deliver consistent quality, and become a name customers can confidently rely on.",
    img: "/image/rocket.webp",
  },
  {
    top: "Goals",
    description:
      "To enhance the quality of repair and installation services and extend our offerings into complete home service solutions. Our goal is to grow as a trusted partner for individuals and businesses, expanding from Chhattisgarh to a recognized brand at the Pan-India level",
    img: "/image/goal-icon.webp",
  },
];

export const aboutWhatdeliver = [
  {
    icon: "/image/icons/icon1.webp",
    text: "100% Satisfaction & Best Price Guaranteed",
    dec: "We promise complete satisfaction or offer free rework for your peace of mind. Our pricing is transparent and competitive, with no hidden costs. You always get the best value for your money with guaranteed quality.",
  },
  {
    icon: "/image/icons/icon2.webp",
    text: "Highly Trained & Skilled Handymen",
    dec: "Our technicians are professionally trained and experienced in their craft. They ensure every job is completed with precision and safety. We prioritize quality workmanship and customer satisfaction in every service.",
  },
  {
    icon: "/image/icons/icon3.webp",
    text: "On-Time Service & Quality Assurance",
    dec: "We are committed to delivering services on time, every time. Our team follows strict quality checks to maintain high standards. You can count on us for reliable and efficient service, always.",
  },
  {
    icon: "/image/icons/icon4.webp",
    text: "Hassle-Free Work Process",
    dec: "From booking to completion, we handle everything smoothly for you. No more stress, delays, or follow-ups — we ensure a seamless experience. Your convenience and comfort are our top priorities",
  },
];
