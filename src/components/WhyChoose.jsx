import React from "react";
import { FiMapPin, FiSmartphone, FiAward, FiBriefcase } from "react-icons/fi";
import { FaRobot, FaCertificate, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";


const WhyChoose = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-10 text-center">
          Why Choose Amity University Online?
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div>
            <img src="/img/wasc.png" alt="WASC" className="h-16 mb-3" />
            <h3 className="font-semibold">WASC Accreditation (USA)</h3>
            <p className="text-gray-600 text-sm">
              Amity Online is India's only university accredited by WASC — a distinguished recognition of global academic excellence.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img src="/img/wes (1).png" alt="WES" className="h-14 mb-3" />
            <h3 className="font-semibold">WES Recognition</h3>
            <p className="text-gray-600 text-sm">
              Degrees recognised by WES (Canada & USA), enabling smoother pathways for higher studies and global career mobility.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img src="/img/qs.webp" alt="QS" className="h-14 mb-3" />
            <h3 className="font-semibold">QS Ranked Online MBA</h3>
            <p className="text-gray-600 text-sm">
              India’s only Online MBA ranked by QS Asia Pacific Top 10 for academic strength and learner outcomes.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <img src="/img/qaa.webp" alt="QAA" className="h-10 mb-3" />
            <h3 className="font-semibold">QAA (UK) Accreditation</h3>
            <p className="text-gray-600 text-sm">
              Accredited by the UK’s Quality Assurance Agency (QAA), assuring globally benchmarked academic quality.
            </p>
          </div>

          {/* Card 5 */}
          <div>
            <img src="/img/the.webp" alt="Times Higher Education" className="h-10 mb-3" />
            <h3 className="font-semibold">Times Higher Education Rankings</h3>
            <p className="text-gray-600 text-sm">
              Ranked among the best globally for graduate employability and employer reputation.
            </p>
          </div>

          {/* Card 6 */}

          <div>
            <FiMapPin className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Pan-India Campus Access</h3>
            <p className="text-gray-600 text-sm">
              Access all Amity campuses for orientations, meetups, and convocation blending digital and real-world.
            </p>
          </div>

          {/* Card 7 */}
          <div>
            <FiSmartphone className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Amigo: Learning On-the-Go</h3>
            <p className="text-gray-600 text-sm">
              Learn seamlessly with live classes, track progress, and access materials anytime.
            </p>
          </div>

          {/* Card 8 */}
          <div>
            <FaRobot className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Prof. Ami: AI-Powered Tutor</h3>
            <p className="text-gray-600 text-sm">
              Your personal AI mentor for doubt-solving, learning tips, and smart academic support.
            </p>
          </div>

          {/* Card 9 */}
          <div>
            <FaCertificate className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Industry Certifications</h3>
            <p className="text-gray-600 text-sm">
              Gain in-demand certifications from top industry partners to boost your career.
            </p>
          </div>

          {/* Card 10 */}
          <div>
            <MdWork className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Internship Opportunities</h3>
            <p className="text-gray-600 text-sm">
              Curated internships with top companies to gain real-world experience and stand out in the job market.
            </p>
          </div>

          {/* Card 11 */}
          <div>
            <FaUserGraduate className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">AI-Powered Career Platform</h3>
            <p className="text-gray-600 text-sm">
              From mock interviews to job search tools — ensures you’re career-ready from day one.
            </p>
          </div>

          {/* Card 12 */}
          <div>
            <FaUsers className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">beSocial App for Campus Life</h3>
            <p className="text-gray-600 text-sm">
              A vibrant student hub for networking, joining clubs, attending events, and building connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
