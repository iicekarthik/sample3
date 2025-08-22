import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="bg-[#002147] text-white shadow-md fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <img src="/img/amitylogo.png" alt="Amity University Logo" className="h-12" />

                    </div>
                    <nav className="space-x-6 hidden md:flex">
                        <a href="#about" className="hover:text-[#FFCC00]">About</a>
                        <a href="#course" className="hover:text-[#FFCC00]">Courses</a>
                        <a href="#admissions" className="hover:text-[#FFCC00]">Admissions</a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hover:text-[#FFCC00] focus:outline-none"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </header>
            {/* Enquiry Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Header;
