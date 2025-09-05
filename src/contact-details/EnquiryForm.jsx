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
<div className="enquiry-form">
  {/* Close button only if showClose is true */}
  {showClose && (
    <button onClick={onClose} className="close-btn">
      ✕
    </button>
  )}

  {/* Heading */}
  <h3 className="form-title">Enquiry Now</h3>

     <form onSubmit={handleSubmit} className="form-body">

  <div className="form-row-2">
    <div>
      <label>Full Name *</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter full name"
        required
        className="form-input"
      />
    </div>

    <div>
      <label>Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="abc@xyz.com"
        required
        className="form-input"
      />
    </div>
  </div>

<div>
  <label>Phone *</label>
  <div className="phone-input">
    {/* Country Code Selector */}
    <select
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      className="country-code"
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
      className="phone-number"
    />
  </div>
</div>

<div className="form-row">
  {/* Program Level */}
  <div>
    <label>Program Level *</label>
    <select
      name="level"
      value={formData.level}
      onChange={handleChange}
      required
      className="program-select"
    >
      <option value="">Select Level</option>
      <option value="UG">UG</option>
      <option value="PG">PG</option>
    </select>
  </div>

          {/* Program Course */}
    <div>
  <label>Program Course *</label>
  <select
    name="course"
    value={formData.course}
    onChange={handleChange}
    required
    className="program-select"
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
<div className="consent-box">
  <input
    type="radio"
    name="consent"
    checked={formData.consent}
    onChange={handleChange}
    required
  />
  <span>
    I agree that associates can contact me via Email, SMS, WhatsApp, and Voice calls
    as per the Privacy Policy. This consent overrides any DNC/NDNC registration.
  </span>
</div>


          {/* Submit */}
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
