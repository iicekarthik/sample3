import React, { useState } from "react";
import EnquiryForm from "./EnquiryForm";
import EnquiryModal from "./EnquiryModal";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center max-h-screen py-24 flex items-center"
      style={{ backgroundImage: "url('/img/amity.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-6 items-center">

        <div className="text-white max-w-md">
          <h2 className="text-2xl md:text-5xl font-bold mb-3">
            Empowering Education Through Online Learning
          </h2>
          <p className="text-lg md:text-base mb-4 leading-relaxed">
            Join Amity University Online and pursue globally recognized programs
            with flexibility, world-class faculty, and industry-relevant curriculum.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm flex items-center
               gap-2 hover:bg-yellow-400"
            >
              <FaDownload />
              Download Brochure
            </button>

            <a
              href="https://vidyarishi.com/amity-university"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm hover:bg-yellow-400"
            >
              Explore Courses
            </a>
          </div>
        </div>

        <div className="rounded-lg shadow-md mt-10 md:mt-0 flex items-center justify-center">
          <EnquiryForm />
        </div>
      </div>

   <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
