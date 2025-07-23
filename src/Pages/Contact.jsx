import React, { useState } from "react";
import {
  FaPhone,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { businessHours, contactMethods } from "../utils/constants";
import { handleCall, handleVisit, handleWhatsApp } from "../utils/functions";
import ContactMap from "../components/ContactMap";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 montserrat">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2E4A9E] to-[#3A5998] text-white pt-36 pb-20 raleway">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to start your TukTuk business or need expert repairs? We're
              here to help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-[#FF8C42] hover:bg-orange-500 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="inline mr-2" />
                WhatsApp Us
              </button>
              <button
                onClick={handleCall}
                className="border-2 border-white hover:bg-white hover:text-[#2E4A9E] px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <FaPhone className="inline mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2E4A9E] mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the most convenient way to get in touch
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index, cta) => (
                <button
                  onClick={
                    method.title === "Call Us"
                      ? handleCall
                      : method.title === "WhatsApp"
                      ? handleWhatsApp
                      : method.title === "Visit Us"
                      ? handleVisit
                      : () => {}
                  }
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-2"
                >
                  <div className="text-[#FF8C42] mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2E4A9E] mb-3">
                    {method.title}
                  </h3>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 mt-2">
                    {method.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-3xl font-bold text-[#2E4A9E] mb-6">
                    Send Us a Message
                  </h3>

                  {showSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                      <div className="flex items-center">
                        <FaPaperPlane className="mr-2" />
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon.
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaUser className="inline mr-2 text-[#FF8C42]" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MdEmail className="inline mr-2 text-[#FF8C42]" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MdPhone className="inline mr-2 text-[#FF8C42]" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                          placeholder="+256 700 000 000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="sales">TukTuk Sales</option>
                          <option value="repairs">Repairs & Maintenance</option>
                          <option value="parts">Spare Parts</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaComment className="inline mr-2 text-[#FF8C42]" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#FF8C42] hover:bg-orange-500 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-[#2E4A9E] mb-4 flex items-center">
                    <FaClock className="mr-3 text-[#FF8C42]" />
                    Business Hours
                  </h4>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700">
                          {schedule.day}
                        </span>
                        <span className="text-[#2E4A9E] font-semibold">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3">Emergency Repairs</h4>
                  <p className="mb-4">
                    TukTuk broken down? We provide 24/7 emergency repair
                    services.
                  </p>
                  <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <FaPhone className="inline mr-2" />
                    Call Emergency Line
                  </button>
                </div>

                {/* Social Media */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-[#2E4A9E] mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-2xl transition-colors"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-500 text-2xl transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-pink-600 hover:text-pink-700 text-2xl transition-colors"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-700 text-2xl transition-colors"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Stay updated with our latest TukTuk models and offers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#2E4A9E] mb-4">
                Find Our Location
              </h3>
              <p className="text-gray-600">
                Visit our showroom and workshop in Kampala
              </p>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden">
              {/* Icon Above the Map */}
              <div className="flex flex-col items-center justify-center py-4">
                <MdLocationOn className="text-6xl text-[#FF8C42] mb-2" />
                <p className="text-gray-600 text-center">
                  Plot 123, Industrial Area, Jinja Road, Kampala
                </p>
              </div>

              {/* Map */}
              <div className="h-96 w-full">
                <ContactMap />
              </div>

              {/* Button */}
              <div className="flex justify-center py-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=0.3476,32.5825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2E4A9E] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
