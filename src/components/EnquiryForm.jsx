import { useState } from "react";

const EnquiryForm = ({ onClose, showClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    course: "",
  });

  const IndianAllStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
    "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
  ];

  const Courses = ["MBA", "MCA", "M.Com", "MA", "M.Sc", "BA", "BCA", "BBA", "B.Com"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We’ll contact you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      state: "",
      course: "",
    });
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg">
      {/* Close button only if showClose is true */}
      {showClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-lg"
        >
          ✕
        </button>
      )}

      {/* Heading */}
      <h3 className="text-xl font-semibold text-center mb-6">Enquiry Now</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Full Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your no."
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />

          </div>
        </div>

        {/* Row 2: Email + Course */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email ID *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@xyz.com"
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Course *</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Course</option>
              {Courses.map((course, idx) => (
                <option key={idx} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Your State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">Select Your State</option>
            {IndianAllStates.map((state, idx) => (
              <option key={idx} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#002147] text-white py-3 rounded-xl font-semibold hover:bg-[#1a3a6d] transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
