import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What Is Amity University Online?",
    answer:
      "Amity University Online is a globally recognized institution offering UGC-approved online degree and certificate programs with industry-relevant curriculum.",
  },
  {
    question: "What Is The Admission Process Of Amity Online?",
    answer:
      "The admission process is simple: register online, fill out the application form, upload necessary documents, and pay the admission fee.",
  },
  {
    question: "How Do I Access My Course?",
    answer:
      "You can access your course via the Amity Learning Portal and Amigo mobile app anytime, anywhere.",
  },
  {
    question: "How Will I Get Admission Confirmation?",
    answer:
      "Once your application is reviewed and approved, you will receive an admission confirmation email along with login details.",
  },
  {
    question: "Cancellation Of Admission",
    answer:
      "Yes, admission can be cancelled within the given timeline by following the university's refund policy.",
  },
  {
    question: "What Academic Support Services Are Available To Online Students?",
    answer:
      "Students receive mentorship, career counseling, online doubt-solving, and access to a digital library.",
  },
  {
    question: "How Are Exams And Assessments Conducted In Online Programs?",
    answer:
      "Exams and assessments are conducted online with AI proctoring and flexible schedules.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-[#002147] mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg text-[#002147]"
            >
              {faq.question}
              {openIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
