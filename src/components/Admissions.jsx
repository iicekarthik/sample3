import React from "react";

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 px-6 bg-gray-50">
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#002147] mb-8">
          Admission Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Getting started with Amity University Online is simple. Follow these
          easy steps to secure your admission and begin your learning journey.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="w-80 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-[#FFCC00] text-2xl font-bold mb-4">01</div>
            <h3 className="font-semibold text-lg mb-2">Register Online</h3>
            <p className="text-gray-600 text-sm">
              Sign up on the admission portal with your basic details to create
              your student account.
            </p>
          </div>


          {/* Step 2 */}
          <div className="w-80 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-[#FFCC00] text-2xl font-bold mb-4">02</div>
            <h3 className="font-semibold text-lg mb-2">Fill Application</h3>
            <p className="text-gray-600 text-sm">
              Complete the online application form with academic and personal
              information.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-80 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-[#FFCC00] text-2xl font-bold mb-4">03</div>
            <h3 className="font-semibold text-lg mb-2">Upload Documents</h3>
            <p className="text-gray-600 text-sm">
              Submit scanned copies of required documents such as mark sheets,
              ID proof, and photographs.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-80 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-[#FFCC00] text-2xl font-bold mb-4">04</div>
            <h3 className="font-semibold text-lg mb-2">Pay Fees & Confirm</h3>
            <p className="text-gray-600 text-sm">
              Pay the admission fees online and receive your confirmation along
              with student login details.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Admissions;

