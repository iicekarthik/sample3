import React from "react";
import Header from "./pages/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Admissions from "./components/Admissions";
import Footer from "./pages/Footer";
import Courses from "./components/Courses";
import WhyChoose from "./components/WhyChoose";
import Accreditations from "./components/Accreditations";
import CTCSection from "./contact-details/ContactBanner";
import AmityStatsAndHighlights from "./components/AmityStatsAndHighlights";
import FAQ from "./components/FAQ";
import StudentTestimonials from "./components/StudentTestimonials";


function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <AmityStatsAndHighlights />
      <About />
      <Accreditations />
      <Courses />
      <WhyChoose />
      <CTCSection />
      <Admissions />
      <StudentTestimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
