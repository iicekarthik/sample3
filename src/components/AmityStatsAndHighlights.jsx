import React from "react";
import { FaStar, FaBookOpen, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";

const AmityStatsAndHighlights = () => {
  return (
    <section className="py-16 bg-gray-100">
    <div className="space-y-16 px-6 md:px-16">

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-[#FFCC00] text-[#002147] rounded-xl p-5 text-justify">
          <h2 className="text-[2.5rem] font-bold ">30+</h2>
          <p className="mt-2">Years Of Excellence</p>
        </div>
        <div className="bg-[#28a745] rounded-xl p-5 text-justify">
          <h2 className="text-[2.5rem] text-white font-bold">60+</h2>
          <p className="mt-2 text-[#002147]">Programs & Specializations</p>
        </div>
        <div className="bg-[#007bff] rounded-xl p-5 text-justify">
          <h2 className="text-[2.5rem] text-white font-bold">1.60 Lac+</h2>
          <p className="mt-2 text-[#002147]">Learners</p>
        </div>
        <div className="bg-[#e83e8c] rounded-xl p-5 text-justify">
          <h2 className="text-[2.5rem] text-white font-bold">3.5L+</h2>
          <p className="mt-2 text-[#002147]">Strong Alumni Network</p>
        </div>
      </div>

      {/* Program Highlights Section */}
      <div className="bg-white shadow-lg rounded-xl p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Heading */}
          <div className="md:w-1/4">
            <h2 className="text-3xl font-semibold text-[#002147] mb-2">
              Program Highlights And Advantages
            </h2>
            <p className="text-gray-500 text-sm">
              Discover our Online Degree Programs and begin an exciting educational journey
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:w-3/4">
            <div className="flex flex-col items-center text-center">
              <FaStar className="text-[#002147] text-4xl mb-2" />
              <h3 className="font-semibold">Emerging Specializations</h3>
              <p className="text-gray-500 text-sm">
                New-age specializations shaping tomorrow's business landscape
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBookOpen className="text-[#002147] text-4xl mb-2" />
              <h3 className="font-semibold">Robust Learning Model</h3>
              <p className="text-gray-500 text-sm">
                550+ hours of video lectures to help you maximize your learning
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUserGraduate className="text-[#002147] text-4xl mb-2" />
              <h3 className="font-semibold">Personalized Learning</h3>
              <p className="text-gray-500 text-sm">
                Personalized learning through unique option of choice based credit system
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaProjectDiagram className="text-[#002147] text-4xl mb-2" />
              <h3 className="font-semibold">Real World Projects</h3>
              <p className="text-gray-500 text-sm">
                Real world projects & case studies to help you succeed in your domain
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AmityStatsAndHighlights;
