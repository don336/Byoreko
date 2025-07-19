import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTools,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaHandshake,
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaIndustry,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdLocalShipping,
  MdEngineering,
  MdSupport,
  MdTrendingUp,
} from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { abstats as stats, teamMembers, milestones } from "../utils/constants";

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-[#2E4A9E] to-[#3A5998] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold playfair-display mb-6">
              About <span className="text-[#FF8C42]">Byoreko</span> Holdings
            </h1>
            <p className="text-xl raleway opacity-90 mb-8">
              Leading Uganda's transportation revolution through quality,
              innovation, and unwavering commitment to customer success
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-[#FF8C42]" />
                <span>Established 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdVerified className="text-[#FF8C42]" />
                <span>Authorized Kainiu Dealer</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-[#FF8C42]" />
                <span>1500+ Satisfied Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 raleway">
                <p className="text-lg">
                  Founded in 2024 with a simple yet powerful vision: to
                  transform Uganda's transportation landscape through reliable,
                  affordable, and innovative three-wheeler solutions.
                </p>
                <p>
                  What started as a small venture that has grown into Uganda's
                  most trusted Kainiu dealer, serving over 1,500 customers
                  across the country. Our journey began when our founder
                  recognized the growing need for efficient, cost-effective
                  transportation solutions in Uganda's rapidly developing
                  economy.
                </p>
                <p>
                  Today, Byoreko Holdings stands as a beacon of excellence in
                  the automotive industry, combining traditional values of trust
                  and reliability with modern innovation and customer-centric
                  service.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FF8C42] to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 montserrat">
                Our Mission
              </h3>
              <p className="text-lg mb-6">
                To provide Uganda with world-class three-wheeler solutions that
                empower entrepreneurs, support economic growth, and create
                sustainable transportation opportunities for all.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-2xl" />
                  <span>Quality First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-2xl" />
                  <span>Customer-Centric Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-2xl" />
                  <span>Continuous Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 raleway">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-[#2E4A9E] mb-2 montserrat">
                  {stat.number}
                </h3>
                <p className="text-gray-600 raleway">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#2E4A9E] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold playfair-display mb-4">
              Our Core Values
            </h2>
            <p className="text-xl opacity-90 raleway">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 montserrat">Integrity</h3>
              <p className="opacity-90 raleway">
                We conduct business with honesty, transparency, and ethical
                practices, building trust with every interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <MdEngineering className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 montserrat">Excellence</h3>
              <p className="opacity-90 raleway">
                We strive for perfection in every service we provide,
                continuously improving to exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 montserrat">
                Partnership
              </h3>
              <p className="opacity-90 raleway">
                We believe in building long-term relationships with our
                customers, suppliers, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 raleway">
              Key milestones that shaped our growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-[#FF8C42] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold montserrat">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#2E4A9E] mb-2 montserrat">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 raleway">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E4A9E] playfair-display mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 raleway">
              The experts behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-[#2E4A9E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2E4A9E] mb-2 montserrat">
                  {member.name}
                </h3>
                <p className="text-[#FF8C42] font-semibold mb-2 raleway">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.experience}
                </p>
                <p className="text-gray-700 text-sm raleway">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kainiu Partnership Section */}
      <section className="py-20 bg-[#2E4A9E] text-white">
        <div className="container mx-auto px-4">
          <img src="./logo2.png" alt="" className="w-15 inline items-center" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold playfair-display mb-6">
                Our Partnership with{" "}
                <span className="text-[#FF8C42]">Kainiu</span>
              </h2>
              <div className="space-y-4 raleway">
                <p className="text-lg">
                  As an authorized Kainiu dealer, we represent one of the most
                  trusted names in three-wheeler manufacturing. This partnership
                  allows us to offer our customers proven, reliable vehicles
                  backed by comprehensive support.
                </p>
                <p>
                  Kainiu's commitment to quality manufacturing combined with our
                  local expertise creates the perfect synergy for serving
                  Uganda's transportation needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <MdVerified className="text-[#FF8C42] text-xl" />
                  <span>Authorized Dealer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaAward className="text-[#FF8C42] text-xl" />
                  <span>Quality Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdSecurity className="text-[#FF8C42] text-xl" />
                  <span>Warranty Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-[#FF8C42] text-xl" />
                  <span>Global Standards</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 montserrat text-[#FF8C42]">
                Why Kainiu?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#FF8C42] mt-1 flex-shrink-0" />
                  <span>
                    Proven track record in three-wheeler manufacturing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#FF8C42] mt-1 flex-shrink-0" />
                  <span>Advanced engineering and quality control</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#FF8C42] mt-1 flex-shrink-0" />
                  <span>Comprehensive spare parts availability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#FF8C42] mt-1 flex-shrink-0" />
                  <span>Local manufacturing and assembly in Uganda</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#FF8C42] mt-1 flex-shrink-0" />
                  <span>Competitive pricing and financing options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF8C42] to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 playfair-display">
            Ready to Partner with Uganda's Best?
          </h2>
          <p className="text-xl mb-8 raleway opacity-90">
            Join thousands of satisfied customers who trust Byoreko Holdings for
            their transportation needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#FF8C42] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors montserrat flex items-center space-x-2">
              <FaPhone />
              <span>Contact Us Today</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF8C42] transition-colors montserrat flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Visit Our Showroom</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
