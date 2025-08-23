import React, { useState } from "react";
import EnquiryForm from "../contact-details/EnquiryForm";
import EnquiryModal from "../contact-details/EnquiryModal";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center w-full px-4 sm:px-6">
      <section
        className="relative bg-cover bg-center w-full max-w-[90rem] rounded-xl overflow-hidden flex items-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100vh-250px)]"
        style={{ backgroundImage: "url('/logo/amity.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
              Empowering Education Through Online Learning
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed ">
              Join <a href="https://vidyarishi.com/" target="_blank" rel="noopener noreferrer ">
                Amity University Online
              </a> and pursue globally recognized programs
              with flexibility, world-class faculty, and industry-relevant curriculum.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm md:text-base flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
              >
                <FaDownload />
                Download Brochure
              </button>

              <a
                href="https://vidyarishi.com/amity-university"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm md:text-base text-center hover:bg-yellow-400 transition"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className=" rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-md mx-auto lg:mx-0 w-full">
            <EnquiryForm />
          </div>
        </div>

        {/* Modal */}
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    </div>
  );
};

export default Hero;
