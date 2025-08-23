import React from "react";

const AmityStatsAndHighlights = () => {
  const highlights = [
    {
      title: "Emerging\nSpecializations",
      desc:
        "New-age specializations\nshaping tomorrow's business\nlandscape",
      img: "/highlights/specialization.png", 
      alt: "Emerging Specializations",
    },
    {
      title: "Robust\nLearning\nModel",
      desc:
        "550+ hours of video lectures\nto help you maximize\nyour learning",
      img: "/highlights/learningmodel.png",
      alt: "Robust Learning Model",
    },
    {
      title: "Personalized\nLearning",
      desc:
        "Personalized learning through\nunique option of choice based\ncredit system",
      img: "/highlights/learning.png",
      alt: "Personalized Learning",
    },
    {
      title: "Real World\nProjects",
      desc:
        "Real world projects & case\nstudies to help you succeed in\nyour domain",
      img: "/highlights/project.png",
      alt: "Real World Projects",
    },
  ];

  return (
    <section className="py-20">
      <div className="  px-6 lg:px-12 space-y-12">
        {/* Stats*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#FFCC00] text-[#002147] rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-extrabold">30+</div>
            <div className="mt-2 font-medium">Years Of Excellence</div>
          </div>
          <div className="bg-[#28a745] rounded-xl p-6 text-center">
            <div className="text-white text-4xl md:text-5xl font-extrabold">60+</div>
            <div className="mt-2 text-[#002147] font-medium">Programs &amp; Specializations</div>
          </div>
          <div className="bg-[#007bff] rounded-xl p-6 text-center">
            <div className="text-white text-4xl md:text-5xl font-extrabold">1.60 Lac+</div>
            <div className="mt-2 text-[#002147] font-medium">Learners</div>
          </div>
          <div className="bg-[#e83e8c] rounded-xl p-6 text-center">
            <div className="text-white text-4xl md:text-5xl font-extrabold">3.5L+</div>
            <div className="mt-2 text-[#002147] font-medium">Strong Alumni Network</div>
          </div>
        </div>

        {/*Program Highlights*/}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
        
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <h2 className="font-serif text-[28px] md:text-[34px] leading-tight text-[#0f2b54]">
              Program Highlights And<br />Advantages
            </h2>
            <p className="text-gray-600 max-w-md md:text-right">
              Discover our Online Degree Programs and<br />
              begin an exciting educational journey
            </p>
          </div>

          {/* thin divider */}
          <hr className="mt-6 mb-8 border-gray-200" />

          {/* highlight items with vertical dividers on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {highlights.map((h, idx) => (
              <div
                key={h.alt}
                className={`flex flex-col text-center px-6 py-4
                ${idx > 0 ? "md:border-l md:border-gray-200" : ""}`}
              >
                <img
                  src={h.img}
                  alt={h.alt}
                  className="h-12 w-12 mb-3 object-contain "
                  loading="lazy"
                />
                <h3 className="text-[#0f2b54] text-justify font-bold ">
                  {h.title}
                </h3>
                <p className="text-gray-500 text-justify  text-lg mt-3 whitespace-pre-line">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmityStatsAndHighlights;
