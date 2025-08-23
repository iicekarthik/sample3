import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const courses = {
  UG: [
    { name: "B.Com", img: "/courses/bcom.png", link: "https://vidyarishi.com/amity-university/bcom" },
    { name: "BA", img: "/courses/ba.png", link: "https://vidyarishi.com/amity-university/ba" },
    { name: "BCA", img: "/courses/bca.png", link: "https://vidyarishi.com/amity-university/bca" },
    { name: "BBA", img: "/courses/bba.png", link: "https://vidyarishi.com/amity-university/bba" },
  ],
  PG: [
    { name: "MBA", img: "/courses/mba.png", link: "https://vidyarishi.com/amity-university/mba" },
    { name: "MCA", img: "/courses/mca.png", link: "https://vidyarishi.com/amity-university/mca" },
    { name: "MA", img: "/courses/ma.png", link: "https://vidyarishi.com/amity-university/ma" },
    { name: "M.Com", img: "/courses/mcom.png", link: "https://vidyarishi.com/amity-university/mcom" },
    { name: "M.Sc", img: "/courses/msc.png", link: "https://vidyarishi.com/amity-university/msc" },
  ],
};

const Courses = () => {
  const [selected, setSelected] = useState("UG");

  return (
    <section id="course" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl font-bold mb-10 text-[#002147]">
          Explore Our Online Degree Programs
        </h3>

        {/* UG/PG Filter Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setSelected("UG")}
            className={`px-6 py-2 rounded-lg border font-semibold transition ${
              selected === "UG" ? "bg-[#002147] text-white" : "bg-white text-[#002147] border-[#002147]"
            }`}
          >
            UG PROGRAM
          </button>
          <button
            onClick={() => setSelected("PG")}
            className={`px-6 py-2 rounded-lg border font-semibold transition ${
              selected === "PG" ? "bg-[#002147] text-white" : "bg-white text-[#002147] border-[#002147]"
            }`}
          >
            PG PROGRAM
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses[selected].map((course, idx) => (
            <div
              key={idx}
              className="shadow-lg rounded-2xl p-6 hover:shadow-xl transition flex flex-col items-center bg-white"
            >
              {/* Course Image */}
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h4 className="text-xl font-semibold mb-4 text-[#002147]">
                {course.name}
              </h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed text-center">
                Enroll in Amity’s {course.name} program and enhance your career
                with flexible, industry-ready learning.
              </p>

              {/* Learn More button */}
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#002147] text-white px-5 py-2 rounded-full hover:bg-[#1a3a6d] transition"
              >
                <span>Learn More</span>
                <GoArrowRight className="text-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
