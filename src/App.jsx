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

function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <About />
      <Accreditations/>
      <WhyChoose/>
      <Courses />
      <CTCSection/>
      <Admissions />
      <Footer />
    </div>
  );
}

export default App;
