import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaTools,
  FaCog,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaPlay,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import {
  MdLocalShipping,
  MdBuild,
  MdInventory,
  MdSecurity,
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ByorekoHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = "./blue.jpg";
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  const features = [
    { icon: FaShieldAlt, text: "Certified Dealer" },
    { icon: FaTools, text: "Expert Service" },
    { icon: FaTruck, text: "Genuine Parts" },
  ];

  const testimonials = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E4A9E]/90 via-[#3A5998]/80 to-[#FF8C42]/70 mix-blend-multiply"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF8C42] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FF8C42] rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#FF8C42]/20 backdrop-blur-sm border border-[#FF8C42]/30 px-4 py-2 rounded-full">
                <FaStar className="text-[#FF8C42] text-sm" />
                <span className="text-white text-sm font-medium">
                  Uganda's #1 Kainiu Dealer
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white block"> Uganda's Premium</span>
                  <span className="text-[#FF8C42] ">Kainiu</span>
                  <span className="text-white "> Dealer</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Experience excellence with Uganda's most trusted Kainiu
                  dealer. Quality vehicles, expert repairs, and genuine parts
                  delivered with pride.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#FF8C42] text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <FaShoppingCart className="text-lg" />
                  <span>Explore TukTuks</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#2E4A9E] transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm">
                  <FaPhone className="text-lg" />
                  <span>Get Free Quote</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#FF8C42] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                  >
                    <feature.icon className="text-[#FF8C42] text-lg" />
                    <span className="text-white text-sm font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Contact Card */}
            <div className="relative">
              {/* Floating Contact Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FF8C42] to-orange-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full opacity-20 blur-xl"></div>

                <div className="relative z-10">
                  <div className="flex flex-col text-center mb-8 justify-center align-middle items-center">
                    <img src="./logo2.png" alt="kainiu" className="w-20 mb-2" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Get Started Today
                    </h3>
                    <p className="text-gray-200">
                      Connect with our experts instantly
                    </p>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-4">
                    <div className="bg-[#FF8C42] rounded-2xl p-6 hover:bg-orange-600 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-full">
                          <FaPhone className="text-white text-xl" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            Call Now
                          </div>
                          <div className="text-white/90 text-lg">
                            +256 700 123 456
                          </div>
                        </div>
                        <FaArrowRight className="text-white ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="bg-green-600 rounded-2xl p-6 hover:bg-green-700 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-full">
                          <FaWhatsapp className="text-white text-xl" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            WhatsApp
                          </div>
                          <div className="text-white/90">Chat with us now</div>
                        </div>
                        <FaArrowRight className="text-white ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-2xl p-6 hover:bg-white/30 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#FF8C42]/20 p-3 rounded-full">
                          <FaMapMarkerAlt className="text-[#FF8C42] text-xl" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            Visit Us
                          </div>
                          <div className="text-gray-200">Kampala, Uganda</div>
                        </div>
                        <FaArrowRight className="text-white ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Video Call Option */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30">
                    <div className="flex items-center space-x-3 text-white">
                      <FaPlay className="text-purple-400" />
                      <span className="text-sm">Schedule a virtual tour</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#FF8C42]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs">Scroll down</span>
          </div>
        </div>

        {/* Background Image Control (Demo) */}
        <div className="absolute top-4 right-4 z-20">
          <select
            className="bg-black/50 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm"
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
          >
            <option value="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
              TukTuk Street
            </option>
            <option value="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
              City View
            </option>
            <option value="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
              Transport Hub
            </option>
          </select>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 raleway">
              Comprehensive solutions for all your TukTuk needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mb-6">
                <MdLocalShipping className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2E4A9E] mb-4 montserrat">
                TukTuk Sales
              </h3>
              <p className="text-gray-600 mb-6 raleway">
                Brand new Kainiu TukTuks with flexible financing options and
                nationwide delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Multiple models available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Financing options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Nationwide delivery</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mb-6">
                <MdBuild className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2E4A9E] mb-4 montserrat">
                Repairs & Maintenance
              </h3>
              <p className="text-gray-600 mb-6 raleway">
                Expert repair services by certified technicians using genuine
                Kainiu parts.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Certified technicians</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Quick turnaround</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Warranty on repairs</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mb-6">
                <MdInventory className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2E4A9E] mb-4 montserrat">
                Spare Parts
              </h3>
              <p className="text-gray-600 mb-6 raleway">
                Genuine Kainiu spare parts and accessories with guaranteed
                quality and compatibility.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Genuine parts only</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Large inventory</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#FF8C42]" />
                  <span>Competitive prices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#2E4A9E] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold playfair-display mb-4">
              Why Choose Byoreko Holdings?
            </h2>
            <p className="text-xl opacity-90 raleway">
              Your trusted partner in the TukTuk industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                <MdSecurity className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 montserrat">
                Authorized Dealer
              </h3>
              <p className="text-sm opacity-90">
                Official Kainiu dealer with full authorization and support
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 montserrat">
                Expert Service
              </h3>
              <p className="text-sm opacity-90">
                Skilled technicians with years of TukTuk experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 montserrat">
                Quality Parts
              </h3>
              <p className="text-sm opacity-90">
                Only genuine Kainiu parts for optimal performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 montserrat">
                24/7 Support
              </h3>
              <p className="text-sm opacity-90">
                Round-the-clock customer support and emergency services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 raleway">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <FaQuoteLeft className="text-4xl text-[#FF8C42] mx-auto mb-6" />
                <p className="text-xl text-gray-700 mb-6 raleway italic">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FF8C42] text-xl" />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-[#2E4A9E] montserrat">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentSlide].business}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-[#FF8C42]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF8C42] to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 playfair-display">
            Ready to Start Your TukTuk Journey?
          </h2>
          <p className="text-xl mb-8 raleway opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#FF8C42] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors montserrat flex items-center space-x-2">
              <FaPhone />
              <span>Call Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF8C42] transition-colors montserrat flex items-center space-x-2">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ByorekoHomepage;
