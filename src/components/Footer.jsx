import React from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2E4A9E] text-white py-12 montserrat">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo imageSrc={"./logo.PNG"} />
            <p className="text-sm opacity-90">
              Uganda's premier Kainiu dealer providing quality TukTuks and
              exceptional service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 montserrat">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  TukTuk Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  Financing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 montserrat">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.kainiuinvestmentsltd.com/"
                  target="_blank"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  Why Kainiu
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FF8C42] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#FF8C42] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 montserrat">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>+256 744 688 477</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp />
                <span>+256 751 773 769</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Byoreko Holdings Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
