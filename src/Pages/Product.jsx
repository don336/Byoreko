import React, { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp, FaSearch, FaFilter } from "react-icons/fa";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { categories, tukTukModels, spareParts } from "../utils/constants";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = [...tukTukModels, ...spareParts];

  useEffect(() => {
    let filtered = allProducts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 montserrat">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 raleway">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              Premium Quality Guaranteed
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Kainiu
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-slate-300">
                  Products
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Discover our complete range of TukTuks and genuine spare parts.
                <br className="hidden md:block" />
                <span className="text-orange-400 font-medium">
                  Quality guaranteed, locally supported.
                </span>
              </p>
            </div>

            {/* Search Section */}
            <div className="pt-8">
              <div className="max-w-lg mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 pl-4">
                        <FaSearch className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-4 bg-transparent text-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-500 transition-colors"
                      />
                      <button className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["TukTuks", "Spare Parts", "Accessories", "Maintenance"].map(
                  (item) => (
                    <button
                      key={item}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Stats or Features */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-slate-400">Products Available</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-slate-400">Local Support</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-slate-400">Genuine Parts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Filters & Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Browse Products
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h3 className="text-xl font-semibold text-gray-800">
              {filteredProducts.length} Products Found
            </h3>
            <select className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-orange-100 text-lg mb-10">
            Our experts are here to help you find the perfect TukTuk or spare
            part for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <FaPhone className="mr-2" />
              Call Us Now
            </button>
            <button className="flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
              <FaWhatsapp className="mr-2" />
              WhatsApp Chat
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
