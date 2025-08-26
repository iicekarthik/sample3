import React from "react";
import { FiMapPin, FiSmartphone } from "react-icons/fi";
import { FaRobot, FaCertificate, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const WhyChoose = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-10 text-center">
          Why Choose Amity University Online?
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <img src="/img/wasc.png" alt="WASC" className="h-16 mb-3" />
            <h3 className="font-semibold">WASC Accreditation (USA)</h3>
            <p className="text-gray-600 text-sm">
              Recognised by the Western Association of Schools and Colleges (WASC, USA), Amity Online aligns with world-class education benchmarks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <img src="/img/wes.png" alt="WES" className="h-14 mb-3" />
            <h3 className="font-semibold">WES Recognition</h3>
            <p className="text-gray-600 text-sm">
              Amity Online degrees are accepted by WES in Canada and the USA, opening global opportunities for higher studies and careers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <img src="/img/qs.png" alt="QS" className="h-14 mb-3" />
            <h3 className="font-semibold">QS Ranked Online MBA</h3>
            <p className="text-gray-600 text-sm">
              Amity’s Online MBA is among the top programs in Asia Pacific as per QS rankings, recognised for academic strength and learner success.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <img src="/img/qaa.png" alt="QAA" className="h-10 mb-3" />
            <h3 className="font-semibold">QAA (UK) Accreditation</h3>
            <p className="text-gray-600 text-sm">
              Accredited by the Quality Assurance Agency (QAA), UK, ensuring globally recognised and trusted academic quality.
            </p>
          </div>

          {/* Card 5 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <img src="/img/the.png" alt="Times Higher Education" className="h-10 mb-3" />
            <h3 className="font-semibold">Times Higher Education Rankings</h3>
            <p className="text-gray-600 text-sm">
              Featured in global Times Higher Education rankings for graduate employability and academic reputation.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FiMapPin className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Pan-India Campus Access</h3>
            <p className="text-gray-600 text-sm">
              Students can access Amity campuses across India for orientations, meetups, and convocation ceremonies.
            </p>
          </div>

          {/* Card 7 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FiSmartphone className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Amigo: Learning On-the-Go</h3>
            <p className="text-gray-600 text-sm">
              A smart learning app with live classes, study materials, and progress tracking anytime, anywhere.
            </p>
          </div>

          {/* Card 8 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FaRobot className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Prof. Ami: AI-Powered Tutor</h3>
            <p className="text-gray-600 text-sm">
              Get instant academic support with Prof. Ami, an AI-driven learning assistant for doubt-solving and guidance.
            </p>
          </div>

          {/* Card 9 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FaCertificate className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Industry Certifications</h3>
            <p className="text-gray-600 text-sm">
              Earn valuable certifications from leading industry partners to strengthen your professional profile.
            </p>
          </div>

          {/* Card 10 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <MdWork className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">Internship Opportunities</h3>
            <p className="text-gray-600 text-sm">
              Access curated internships with reputed companies to gain hands-on experience and career exposure.
            </p>
          </div>

          {/* Card 11 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FaUserGraduate className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">AI-Powered Career Platform</h3>
            <p className="text-gray-600 text-sm">
              A digital career platform with mock interviews, resume tools, and job search assistance to boost employability.
            </p>
          </div>

          {/* Card 12 */}
          <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <FaUsers className="text-[#002147] text-4xl mb-3" />
            <h3 className="font-semibold">beSocial App for Campus Life</h3>
            <p className="text-gray-600 text-sm">
              A vibrant online community to network, join clubs, attend events, and connect with peers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
