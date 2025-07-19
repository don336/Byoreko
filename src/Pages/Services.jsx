import React, { useState } from "react";
import {
  FaCar,
  FaTools,
  FaCog,
  FaPhone,
  FaWhatsapp,
  FaCalendarAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWrench,
  FaOilCan,
  FaBatteryHalf,
  FaRoad,
  FaHandshake,
  FaAward,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoSpeedometer, IoConstruct, IoShield } from "react-icons/io5";
import { MdElectricBolt, MdInventory, MdSecurity } from "react-icons/md";
import { GiCarWheel, GiMechanicGarage } from "react-icons/gi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState("sales");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
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

  const detailedServices = {
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
          name: "Kainiu Passenger",
          price: "UGX 18,500,000",
          features: [
            "7-seater capacity",
            "Fuel efficient engine",
            "Comfortable seating",
          ],
        },
        {
          name: "Kainiu Cargo",
          price: "UGX 16,800,000",
          features: [
            "High payload capacity",
            "Durable construction",
            "Easy loading",
          ],
        },
        {
          name: "Kainiu Deluxe",
          price: "UGX 21,200,000",
          features: [
            "Premium interior",
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

  const faqs = [
    {
      question: "How long is the warranty on new TukTuks?",
      answer:
        "All new Kainiu TukTuks come with a comprehensive 12-month warranty covering parts and labor.",
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

  const currentService = detailedServices[activeService];

  return (
    <div className="min-h-screen bg-gray-50 montserrat">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-[#2E4A9E] to-[#3A5998]  text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center p-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 raleway">
            Our <span className="text-orange-400 ">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto montserrat">
            Comprehensive TukTuk solutions from sales to maintenance - your
            trusted Kainiu dealer in Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <FaPhone />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Complete TukTuk solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeService === service.id
                    ? "ring-2 ring-orange-500 transform scale-105"
                    : ""
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {currentService.title}
            </h2>
            <h3 className="text-2xl text-orange-500 mb-6">
              {currentService.subtitle}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentService.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {currentService.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-500 text-3xl mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Service-specific content */}
          {activeService === "sales" && currentService.models && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Available Models
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {currentService.models.map((model, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h4 className="text-xl font-bold text-blue-900 mb-2">
                      {model.name}
                    </h4>
                    <p className="text-2xl font-bold text-orange-500 mb-4">
                      {model.price}
                    </p>
                    <ul className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeService === "repairs" && currentService.services && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Repair Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentService.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4"
                  >
                    <div className="text-orange-500 text-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">
                        {service.name}
                      </h4>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeService === "spares" && currentService.categories && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Parts Categories
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentService.categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="text-orange-500 text-3xl mb-4 flex justify-center">
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">
                      {category.name}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 text-center"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-semibold text-blue-900">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-orange-500" />
                  ) : (
                    <FaChevronDown className="text-orange-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and quote on any of our
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <FaCalendarAlt />
              <span>Book Service</span>
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <FaWhatsapp />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
