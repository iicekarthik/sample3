import React, { useState } from "react";
import EnquiryModal from "../contact-details/EnquiryModal";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <img src="/logo/amitylogo.png" alt="Amity University Logo" />
          </div>

          {/* Desktop CTA */}
          <nav className="desktop-nav">
            <button
              onClick={() => setIsModalOpen(true)}
              className="enquire-btn"
            >
              <span>Enquire Now</span>
              <GoArrowRight className="icon" />
            </button>
          </nav>

          {/* Mobile Menu Button */}

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="enquire-btn full-width"
            >
              <span>Enquire Now</span>
              <GoArrowRight className="icon" />
            </button>
          </div>
        )}
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;