import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { detailedServices, faqs, services } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { handleCall, handleWhatsApp } from "../utils/functions";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState("sales");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();
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
            <button
              onClick={handleWhatsApp}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={handleCall}
              className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
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
                    <button
                      onClick={() => navigate("/contact")}
                      className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
                    >
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
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <FaCalendarAlt />
              <span>Book Service</span>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
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
