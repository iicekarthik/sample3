import React from "react";

const PrivacyPolicy = () => {
  return (
    
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#002147] mb-8 text-center">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          At <strong>Vidyarishi</strong>, accessible from{" "}
          <a
            href="https://vidyarishi.com"
            className="text-[#002147] font-medium hover:text-[#FFCC00]"
          >
            https://vidyarishi.com
          </a>
          , safeguarding the privacy of our visitors is one of our top
          priorities. This Privacy Policy outlines the types of information we
          collect and record, and how we use it to deliver better services.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          If you have questions or require additional details about our Privacy
          Policy, please feel free to contact us.
        </p>

        {/* Scope */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          Scope of This Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This Privacy Policy applies only to the online activities of visitors
          to our website and is valid for the information they share and/or we
          collect. This policy does not extend to data collected offline or
          through other communication channels.
        </p>

        {/* Consent */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">Consent</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          By using our website, you consent to our Privacy Policy and agree to
          its terms.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The personal details you may be asked to provide will be explained at
          the point where we request such information. This may include your
          name, email address, phone number, or other contact details when you
          reach out to us or register on our platform.
        </p>

        {/* How We Use Information */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
          <li>To operate and maintain our website</li>
          <li>To improve, personalize, and expand our services</li>
          <li>To analyze website usage and user behavior</li>
          <li>To communicate with you for support, updates, or promotions</li>
          <li>To prevent fraudulent or unauthorized activity</li>
        </ul>

        {/* Log Files */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          Log Files
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Like most websites, Vidyarishi follows standard log file procedures.
          These files capture details such as IP addresses, browser type,
          Internet Service Provider (ISP), timestamps, referring/exit pages, and
          clicks. This information is not linked to personally identifiable
          data. It is used for analyzing trends, administering the site, and
          gathering demographic insights.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          Cookies and Web Beacons
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our website may use cookies to store visitor preferences and track
          activity for an improved browsing experience. You may choose to
          disable cookies through your browser settings, though this may affect
          certain functionalities.
        </p>

        {/* Third-Party Policies */}
        <h2 className="text-xl font-semibold text-[#002147] mb-3">
          Third-Party Privacy Policies
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Vidyarishi’s Privacy Policy does not apply to third-party advertisers
          or websites. We recommend consulting the respective privacy policies
          of these third-party platforms for detailed information.
        </p>

      
      </div>
    </div>
    
  );
};

export default PrivacyPolicy;
