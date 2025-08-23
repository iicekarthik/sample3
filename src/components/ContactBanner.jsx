import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import EnquiryModal from "./EnquiryModal";

const ContactBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="my-16 px-6">
      <div className="bg-[#002147] rounded-3xl overflow-hidden relative flex flex-col justify-center items-center p-10 md:p-16 min-h-[400px]">

        {/* Top-left decorative gradient */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

        {/* Bottom-right decorative gradient */}
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-[#FFCC00] rounded-full opacity-30 blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect with Amity Online University
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl">
            Get all the support you need for your academic and career growth.
            Our team is ready to guide you through enrollment, courses, and more.
          </p>

          {/* Features / Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-gray-200 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Expert Guidance
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Flexible Programs
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Global Recognition
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Career Support
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Affordable Fees
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> Interactive Learning
            </div>
          </div>

          {/* Call to Action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-[#002147] font-semibold rounded-full px-6 py-3 
                       flex items-center gap-2 hover:bg-yellow-300 transition-shadow shadow-lg"
          >
            <IoCall /> Call Now
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ContactBanner;
