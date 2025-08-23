import { useState } from "react";

const EnquiryForm = ({ onClose, showClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "+91",
    level: "",
    course: "",
    consent: false,
  });

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+971", country: "United Arab Emirates" },
    { code: "+65", country: "Singapore" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+880", country: "Bangladesh" },
    { code: "+92", country: "Pakistan" },
    { code: "+93", country: "Afghanistan" },
    { code: "+86", country: "China" },
    { code: "+7", country: "Russia" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+55", country: "Brazil" },
    { code: "+27", country: "South Africa" },
    { code: "+82", country: "South Korea" },
    { code: "+60", country: "Malaysia" },
    { code: "+64", country: "New Zealand" },
    { code: "+351", country: "Portugal" },
    { code: "+31", country: "Netherlands" },
    { code: "+90", country: "Turkey" },
    { code: "+254", country: "Kenya" },
    { code: "+20", country: "Egypt" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+62", country: "Indonesia" },
    { code: "+84", country: "Vietnam" },
    { code: "+63", country: "Philippines" },
    { code: "+45", country: "Denmark" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+358", country: "Finland" },
    { code: "+41", country: "Switzerland" },
    { code: "+48", country: "Poland" },
    { code: "+43", country: "Austria" },
    { code: "+40", country: "Romania" },
    { code: "+380", country: "Ukraine" },
    { code: "+56", country: "Chile" },
    { code: "+57", country: "Colombia" },
    { code: "+52", country: "Mexico" },
    { code: "+598", country: "Uruguay" },
    { code: "+234", country: "Nigeria" },
    { code: "+212", country: "Morocco" },
    { code: "+251", country: "Ethiopia" },
    { code: "+36", country: "Hungary" },
    { code: "+420", country: "Czech Republic" },
    { code: "+421", country: "Slovakia" },
    { code: "+30", country: "Greece" },
    { code: "+386", country: "Slovenia" },
    { code: "+353", country: "Ireland" },
    { code: "+507", country: "Panama" },
    { code: "+505", country: "Nicaragua" },
    { code: "+595", country: "Paraguay" },
    { code: "+591", country: "Bolivia" },
    { code: "+58", country: "Venezuela" },
  ];

  // UG & PG Courses
  const courses = {
    UG: ["BA", "BCA", "BBA", "B.Com", "B.Sc"],
    PG: ["MBA", "MCA", "M.Com", "MA", "M.Sc"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the consent before submitting.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Thank you! We’ll contact you soon.");
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-md w-full">
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

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <div className="flex border border-gray-300 rounded-xl overflow-hidden">
            {/* Country Code Selector */}
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="px-2 py-2 text-sm bg-gray-50 border-r border-gray-300 outline-none"
            >
              {countryCodes.map((c, idx) => (
                <option key={idx} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>

            {/* Phone Number Input */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className="w-full px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Program Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Level *
            </label>
            <select
              name="level"  
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Level</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>

          {/* Program Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Course *
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Course</option>
              {formData.level &&
                courses[formData.level].map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2 text-sm">
          <input
            type="radio"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1"
          />
         <span className="text-gray-600 text-xs leading-relaxed">
    I agree that associates can contact me via Email, SMS, WhatsApp, and Voice calls 
    as per the Privacy Policy. This consent overrides any DNC/NDNC registration.
  </span>
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
