import React, { useState } from "react";
import EnquiryForm from "../contact-details/EnquiryForm";
import EnquiryModal from "../contact-details/EnquiryModal";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hero-wrapper">
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/logo/amity.png')" }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content Wrapper */}
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <h2 className="hero-title">
              Empowering Education Through Online Learning
            </h2>
            <p className="hero-subtext">
              Join{" "}
              <a
                href="https://vidyarishi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amity University Online
              </a>{" "}
              and pursue globally recognized programs with flexibility,
              world-class faculty, and industry-relevant curriculum.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hero-btn"
              >
                <FaDownload />
                Download Brochure
              </button>

              <a
                href="https://vidyarishi.com/amity-university"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn link-btn"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="hero-form">
            <EnquiryForm />
          </div>
        </div>

        {/* Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
};

export default Hero;
