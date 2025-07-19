import {
  FaShieldAlt,
  FaStar,
  FaTools,
  FaTruck,
  FaCar,
  FaCog,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaWrench,
  FaOilCan,
  FaBatteryHalf,
  FaRoad,
  FaHandshake,
  FaAward,
  FaHeadset,
  FaCogs,
  FaBolt,
  FaTachometerAlt,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import { IoSpeedometer, IoConstruct, IoShield } from "react-icons/io5";
import {
  MdElectricBolt,
  MdInventory,
  MdSecurity,
  MdLocalShipping,
  MdSupport,
  MdCategory,
} from "react-icons/md";

import { GiCarWheel, GiMechanicGarage } from "react-icons/gi";
import { handleCall, handleVisit, handleWhatsApp } from "./functions";
export const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "99%", label: "Satisfaction Rate" },
];

export const features = [
  { icon: FaShieldAlt, text: "Certified Dealer" },
  { icon: FaTools, text: "Expert Service" },
  { icon: FaTruck, text: "Genuine Parts" },
];

export const testimonials = [
  {
    name: "James Mukasa",
    business: "Kampala Transport Services",
    text: "Byoreko Holdings provided excellent service when I purchased my Kainiu tuktuk. The quality is outstanding and their after-sales support is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Namuli",
    business: "Downtown Delivery",
    text: "I've been using Byoreko for spare parts and maintenance for 2 years. They're reliable, professional, and always have genuine Kainiu parts in stock.",
    rating: 5,
  },
  {
    name: "Peter Ssemakula",
    business: "City Ride Services",
    text: "The financing options made it possible for me to expand my fleet. Byoreko's team guided me through every step of the process.",
    rating: 5,
  },
];

export const teamMembers = [
  {
    name: "Aine Joram Jones",
    position: "Chief Executive Officer",
    experience: "15+ years in automotive industry",
    description:
      "Visionary leader with extensive experience in the transportation sector across East Africa.",
  },
  {
    name: "Sarah Namakula",
    position: "Operations Manager",
    experience: "12+ years in operations",
    description:
      "Expert in streamlining operations and ensuring customer satisfaction across all service points.",
  },
  {
    name: "Michael Ssemakula",
    position: "Technical Director",
    experience: "18+ years in automotive repair",
    description:
      "Master technician specializing in three-wheeler vehicles and Kainiu systems.",
  },
  {
    name: "Grace Nakato",
    position: "Sales & Marketing Manager",
    experience: "10+ years in sales",
    description:
      "Passionate about connecting customers with the perfect transportation solutions.",
  },
];

export const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "Byoreko Holdings established with a vision to revolutionize Uganda's transport sector",
  },
  {
    year: "2025",
    title: "Kainiu Partnership",
    description:
      "Became official authorized dealer for Kainiu three-wheelers in Uganda",
  },
];

export const abstats = [
  {
    number: "1500+",
    label: "TukTuks Sold",
    icon: <MdLocalShipping className="text-4xl text-[#FF8C42]" />,
  },
  {
    number: "5000+",
    label: "Repairs Completed",
    icon: <FaTools className="text-4xl text-[#FF8C42]" />,
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    icon: <FaStar className="text-4xl text-[#FF8C42]" />,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <MdSupport className="text-4xl text-[#FF8C42]" />,
  },
];

export const services = [
  {
    id: "sales",
    title: "TukTuk Sales",
    icon: <FaCar className="text-4xl" />,
    description: "Premium Kainiu TukTuks with warranty and financing options",
    features: [
      "New Models Available",
      "Financing Options",
      "Warranty Included",
      "Delivery Service",
    ],
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    icon: <FaTools className="text-4xl" />,
    description: "Expert repair services by certified technicians",
    features: [
      "Certified Technicians",
      "Genuine Parts",
      "Quick Turnaround",
      "Emergency Service",
    ],
  },
  {
    id: "spares",
    title: "Spare Parts",
    icon: <FaCog className="text-4xl" />,
    description: "Genuine Kainiu spare parts and accessories",
    features: [
      "Genuine Parts",
      "Bulk Orders",
      "Fast Delivery",
      "Installation Service",
    ],
  },
];

export const detailedServices = {
  sales: {
    title: "TukTuk Sales",
    subtitle: "Premium Kainiu TukTuks for Your Business",
    description:
      "Discover our range of reliable, efficient TukTuks perfect for passenger transport and cargo delivery across Uganda.",
    features: [
      {
        icon: <FaShieldAlt />,
        title: "Quality Assurance",
        desc: "12-month comprehensive warranty on all new vehicles",
      },
      {
        icon: <FaHandshake />,
        title: "Flexible Financing",
        desc: "Easy payment plans tailored to your budget",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Free Delivery",
        desc: "Complimentary delivery within Kampala metropolitan area",
      },
      {
        icon: <FaUsers />,
        title: "Expert Guidance",
        desc: "Professional consultation to choose the right model",
      },
    ],
    models: [
      {
        name: "Kainiu 200cc AirCooled",
        price: "UGX 18,500,000",
        features: [
          "1ton maximum load Capacity capacity",
          "Fuel efficient engine",
          "Comfortable seating",
        ],
      },
      {
        name: "Kainiu 250cc WaterCooled",
        price: "UGX 16,800,000",
        features: [
          "High payload capacity",
          "Durable construction",
          "Easy loading",
        ],
      },
      {
        name: "Kainiu 300cc WaterCooled",
        price: "UGX 21,200,000",
        features: [
          "High Payload Capacity",
          "Enhanced safety features",
          "Superior comfort",
        ],
      },
    ],
  },
  repairs: {
    title: "Repairs & Maintenance",
    subtitle: "Keep Your TukTuk Running Smoothly",
    description:
      "Professional repair and maintenance services to ensure your TukTuk operates at peak performance.",
    features: [
      {
        icon: <FaAward />,
        title: "Certified Technicians",
        desc: "Factory-trained mechanics with expertise in Kainiu systems",
      },
      {
        icon: <FaClock />,
        title: "Quick Service",
        desc: "Most repairs completed within 24-48 hours",
      },
      {
        icon: <IoShield />,
        title: "Quality Parts",
        desc: "Only genuine Kainiu parts used in all repairs",
      },
      {
        icon: <FaHeadset />,
        title: "24/7 Support",
        desc: "Emergency breakdown assistance available",
      },
    ],
    services: [
      {
        icon: <FaWrench />,
        name: "Engine Repair",
        desc: "Complete engine diagnostics and repair services",
      },
      {
        icon: <FaOilCan />,
        name: "Regular Maintenance",
        desc: "Scheduled maintenance to prevent breakdowns",
      },
      {
        icon: <MdElectricBolt />,
        name: "Electrical Systems",
        desc: "Wiring, lighting, and electrical component repairs",
      },
      {
        icon: <GiCarWheel />,
        name: "Suspension & Brakes",
        desc: "Safety-critical systems maintenance and repair",
      },
    ],
  },
  spares: {
    title: "Spare Parts",
    subtitle: "Genuine Kainiu Parts & Accessories",
    description:
      "Complete inventory of authentic spare parts to keep your TukTuk running efficiently.",
    features: [
      {
        icon: <MdSecurity />,
        title: "Genuine Parts",
        desc: "Only authentic Kainiu parts for optimal performance",
      },
      {
        icon: <MdInventory />,
        title: "Large Inventory",
        desc: "Extensive stock of commonly needed parts",
      },
      {
        icon: <FaRoad />,
        title: "Fast Delivery",
        desc: "Same-day delivery within Kampala for urgent needs",
      },
      {
        icon: <IoConstruct />,
        title: "Installation Service",
        desc: "Professional installation by our skilled technicians",
      },
    ],
    categories: [
      {
        icon: <IoSpeedometer />,
        name: "Engine Parts",
        items: ["Pistons", "Filters", "Belts", "Spark Plugs"],
      },
      {
        icon: <FaBatteryHalf />,
        name: "Electrical",
        items: ["Batteries", "Lights", "Wiring", "Alternators"],
      },
      {
        icon: <GiCarWheel />,
        name: "Body & Chassis",
        items: ["Panels", "Doors", "Mirrors", "Bumpers"],
      },
      {
        icon: <GiMechanicGarage />,
        name: "Accessories",
        items: ["Seat Covers", "Mats", "Mirrors", "Tool Kits"],
      },
    ],
  },
};

export const faqs = [
  {
    question: "How long is the warranty on new TukTuks?",
    answer:
      "All new Kainiu TukTuks come with a comprehensive 6-month warranty covering parts and labor.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we provide flexible financing plans with competitive interest rates. Down payment starts from 30%.",
  },
  {
    question: "How quickly can repairs be completed?",
    answer:
      "Most standard repairs are completed within 24-48 hours. Emergency repairs receive priority treatment.",
  },
  {
    question: "Are your spare parts genuine?",
    answer:
      "Yes, we only stock and sell genuine Kainiu parts to ensure optimal performance and longevity.",
  },
];

export const categories = [
  { id: "all", name: "All Products", icon: <MdCategory /> },
  { id: "tuktuks", name: "TukTuks", icon: <FaCar /> },
  { id: "engine", name: "Engine Parts", icon: <FaCogs /> },
  { id: "body", name: "Body Parts", icon: <FaTools /> },
  { id: "electrical", name: "Electrical", icon: <FaBolt /> },
  { id: "accessories", name: "Accessories", icon: <FaWrench /> },
];

export const tukTukModels = [
  {
    id: 1,
    name: "Kainiu Classic 200cc",
    category: "tuktuks",
    price: "UGX 18,500,000",
    image: "./200cc.jpg",
    features: ["200cc Engine", "Manual Transmission", "Cargo Capacity: 500kg"],
    rating: 4.8,
    inStock: true,
    popular: true,
    description: "Perfect for urban transportation and light cargo delivery",
  },
  {
    id: 2,
    name: "Kainiu Pro 250",
    category: "tuktuks",
    price: "UGX 22,800,000",
    image: "./250cc.jpg",
    features: ["250cc Engine", "Enhanced Suspension", "Cargo Capacity: 650kg"],
    rating: 4.9,
    inStock: true,
    popular: true,
    description: "Heavy-duty model for commercial use and rough terrain",
  },
  {
    id: 3,
    name: "Kainiu 300cc Water cooled Cabin",
    category: "tuktuks",
    price: "UGX 25,500,000",
    image: "./image1.jpg",
    features: ["Electric Motor", "Eco-Friendly", "Range: 80km"],
    rating: 4.7,
    inStock: true,
    new: true,
    description: "Environment-friendly tuktuk for sustainable transport",
  },
  {
    id: 4,
    name: "Kainiu 300cc Water cooled",
    category: "tuktuks",
    price: "UGX 25,500,000",
    image: "./image2.jpg",
    features: ["Electric Motor", "Eco-Friendly", "Range: 80km"],
    rating: 4.7,
    inStock: true,
    new: true,
    description: "Environment-friendly tuktuk for sustainable transport",
  },
];

export const spareParts = [
  {
    id: 4,
    name: "Engine Oil Filter",
    category: "engine",
    price: "UGX 45,000",
    image: "/api/placeholder/300/250",
    compatibility: ["Classic 200", "Pro 250"],
    rating: 4.6,
    inStock: true,
    icon: <FaOilCan />,
  },
  {
    id: 5,
    name: "Brake Pads Set",
    category: "body",
    price: "UGX 85,000",
    image: "/api/placeholder/300/250",
    compatibility: ["All Models"],
    rating: 4.8,
    inStock: true,
    icon: <FaTools />,
  },
  {
    id: 6,
    name: "LED Headlight Kit",
    category: "electrical",
    price: "UGX 120,000",
    image: "/api/placeholder/300/250",
    compatibility: ["Classic 200", "Pro 250"],
    rating: 4.7,
    inStock: false,
    icon: <FaBolt />,
  },
  {
    id: 7,
    name: "Speedometer Digital",
    category: "electrical",
    price: "UGX 95,000",
    image: "/api/placeholder/300/250",
    compatibility: ["Pro 250", "E-150"],
    rating: 4.5,
    inStock: true,
    icon: <FaTachometerAlt />,
  },
  {
    id: 8,
    name: "Cargo Cover",
    category: "accessories",
    price: "UGX 65,000",
    image: "/api/placeholder/300/250",
    compatibility: ["All Models"],
    rating: 4.4,
    inStock: true,
    icon: <FaTruck />,
  },
];

export const contactMethods = [
  {
    icon: <FaPhone className="text-2xl" />,
    title: "Call Us",
    details: ["+256 700 123 456", "+256 772 654 321"],
    description: "Available 24/7 for emergency repairs",
    cta: handleCall,
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: "Email Us",
    details: ["info@byoreko.co.ug", "sales@byoreko.co.ug"],
    description: "Get a response within 2 hours",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: "WhatsApp",
    details: ["+256 700 123 456"],
    description: "Chat with us instantly",
    cta: handleWhatsApp,
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: "Visit Us",
    details: ["Industrial Area, Kampala", "Plot 123, Jinja Road"],
    description: "Open Monday to Saturday",
    cta: handleVisit,
  },
];

export const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Emergency Services Only" },
];
