import React from "react";

const testimonials = [
  {
    name: "Ajimsha Puthur Abdul Hameed",
    course: "MBA, Student",
    text: "I'm Ajimsha from Oman, and completing my MBA from Amity Online was an incredible journey. Despite initial COVID concerns, the transition was seamless with excellent support. I'm proud to have referred two friends from Oman too.",
    img: "/placement/s1.webp",
  },
  {
    name: "Himanshu Chhabra",
    course: "BBA, Student",
    text: "Studying at Amity Online has been transformative. The flexibility and global exposure prepared me for my career journey.",
    img: "/placement/s2.webp",
  },
];

const StudentTestimonials = () => {
  return (
    <section className="py-16  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-4">
          Hear From Our Students And Where They Are Placed
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
          Discover the real-world impact of our education. From our students and
          alumni, learn about their thriving careers today!
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center p-8 text-center"
            >
              {/* Image */}
              <div className="w-24 h-24 md:w-28 md:h-28 mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full rounded-full object-cover border-4 border-[#FFCC00] shadow-md"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed">
                “{t.text}”
              </p>

              {/* Name + Course */}
              <div>
                <h4 className="font-semibold text-lg text-[#002147]">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
