import React from "react";

const courses = [
  "BA General",
  "BA Vernac",
  "BA JMC",
  "BBA General",
  "BBA Professional Certificate in Business Analytics",
  "BBA Data Analysis",
  "Bcom General",
  "Bcom International Finance & Accounting",
  "Bcom Hons",
  "Bcom Vernac",
  "BCA General",
  "BCA Data Engineering",
  "BCA Software Engineering",
  "BCA Cloud Security",
  "BCA Data Analytics",
  "MA Journalism & Mass Communication (JMC)",
  "MA Public Policy & Governance (PPG)",
  "Mcom Finance and Marketing",
  "MBA General",
  "MBA Marketing and Sales Management",
  "MBA Entrepreneurship and Leadership Management",
  "MBA Financial & Accounting Management",
  "MBA Human Resource Management",
  "MBA Information Technology Management",
  "MBA International Business Management",
  "MBA Data Science",
  "MBA Retail Management",
  "MBA Global Finance Market",
  "MBA Hospitality Management",
  "MBA Insurance Management",
  "MBA Petroleum & Natural Gas Management",
  "MBA International Finance",
  "MBA Dual Specialization",
  "MCA General",
  "MCA Cybersecurity",
  "MCA Software Engineering",
  "MCA AR VR",
  "MCA ML",
  "MSc Data Science",
];

const Footer = () => {
  // Split into 3 columns for courses
  const colSize = Math.ceil(courses.length / 3);
  const col1 = courses.slice(0, colSize);
  const col2 = courses.slice(colSize, 2 * colSize);
  const col3 = courses.slice(2 * colSize);

  return (
    <footer className="bg-[#002147] text-white text-sm mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Courses & Disclaimer - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              {col1.map((course, index) => (
                <li key={index} className="hover:text-[#FFCC00] cursor-pointer">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4 invisible md:visible"></h3>
            <ul className="space-y-2">
              {col2.map((course, index) => (
                <li key={index} className="hover:text-[#FFCC00] cursor-pointer">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4 invisible md:visible"></h3>
            <ul className="space-y-2">
              {col3.map((course, index) => (
                <li key={index} className="hover:text-[#FFCC00] cursor-pointer">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Disclaimer */}
          <div>
            <h3 className="font-bold text-lg mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We act as a marketing service partner only. Amity University holds
              full rights to request change or removal of any non-relevant content.
              Images used are for illustrative purposes and do not directly represent
              the respective colleges or universities.
            </p>
            <a href="#" className="hover:text-[#FFCC00] text-sm mb-2 block">
              Privacy & Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center">
          <p>
            © 2025{" "}
            <a href="https://vidyarishi.com/" className="hover:text-[#FFCC00]">
              vidyarishi.com
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
