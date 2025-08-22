import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6">
          Why Choose Amity University Online?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Amity University Online is India’s first UGC-recognized online university, 
          offering world-class education with flexibility, innovation, and global recognition.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Point 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition ">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Globally Recognized Degrees
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5 ">
              Earn UGC-entitled and internationally accredited degrees that hold value in India and abroad.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Graduates are equipped to pursue higher studies or global career opportunities.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Flexible Learning
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Learn at your own pace with 100% online classes, recorded lectures, and interactive live sessions.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Customize your study schedule around work or personal commitments without missing deadlines.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Industry-Relevant Curriculum
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Designed with industry experts to ensure practical skills and career-ready knowledge.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Curriculum updates regularly to match evolving technology and market trends.
            </p>
          </div>

          {/* Point 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Expert Faculty
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Learn from experienced professors, researchers, and industry professionals from across the globe.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Benefit from mentorship, guidance, and insights from leaders in your field.
            </p>
          </div>

          {/* Point 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Placement Assistance
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Career services including resume building, mock interviews, and job placement support.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Access exclusive job portals and networking opportunities with top employers.
            </p>
          </div>

          {/* Point 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Global Alumni Network
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Join a network of 250,000+ Amity alumni working in top companies worldwide.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Participate in webinars, workshops, and events to stay connected and grow professionally.
            </p>
          </div>

          {/* Point 7 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Affordable Education
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              High-quality programs designed to be financially accessible without compromising on standards.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Scholarships and flexible payment options are available to eligible students.
            </p>
          </div>

          {/* Point 8 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#002147] mb-2">
              Advanced Learning Tools
            </h3>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Use modern learning platforms, virtual labs, and digital libraries to enhance your learning experience.
            </p>
            <p className="text-gray-600 text-sm text-justify pt-2.5 pl-2.5 pr-2.5">
              Interactive quizzes, projects, and assignments make learning engaging and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
