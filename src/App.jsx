import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import WhyChoose from "./components/WhyChoose";
import Accreditations from "./components/Accreditations";
import CTCSection from "./components/ContactBanner";
import AmityStatsAndHighlights from "./components/AmityStatsAndHighlights";
import FAQ from "./components/FAQ";


function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <About />
      <AmityStatsAndHighlights/>
      <Accreditations/>
      <WhyChoose/>
      <Courses />
      <CTCSection/>
      <Admissions />
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
