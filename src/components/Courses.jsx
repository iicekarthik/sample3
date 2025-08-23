import React from "react";
import { GoArrowRight } from "react-icons/go";

const courses = [
  { name: "MBA", img: "/courses/mba.webp", link: "https://vidyarishi.com/amity-university/mba" },
  { name: "MCA", img: "/courses/mca.webp", link: "https://vidyarishi.com/amity-university/mca" },
  { name: "MA", img: "/courses/ma.jpg", link: "https://vidyarishi.com/amity-university/ma" },
  { name: "M.Com", img: "/courses/mcom.webp", link: "https://vidyarishi.com/amity-university/mcom" },
  { name: "M.Sc", img: "/courses/msc.webp", link: "https://vidyarishi.com/amity-university/msc" },
  { name: "B.Com", img: "/courses/bcom.webp", link: "https://vidyarishi.com/amity-university/bcom" },
  { name: "BA", img: "/courses/ba.webp", link: "https://vidyarishi.com/amity-university/ba" },
  { name: "BCA", img: "/courses/bca.webp", link: "https://vidyarishi.com/amity-university/bca" },
  { name: "BBA", img: "/courses/bba.webp", link: "https://vidyarishi.com/amity-university/bba" },
];

const Courses = () => {
  return (
    <section id="course" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl font-bold mb-10 text-[#002147]">
          Popular Courses
        </h3>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="shadow-lg rounded-2xl p-6 hover:shadow-xl transition flex flex-col items-center"
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
