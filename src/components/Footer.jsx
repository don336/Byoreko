import React from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";

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
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  TukTuk Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Spare Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Financing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 montserrat">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Why Kainiu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 montserrat">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Byoreko Holdings Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
