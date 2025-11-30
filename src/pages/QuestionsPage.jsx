import { useState, forwardRef, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FAQSection = forwardRef((props, ref) => {
  const faqCategories = [
    {
      category: "Entrance & Exams",
      questions: [
        {
          q: "Is the entrance exam free?",
          a: "Yes — your first attempt is completely free. If you wish to retake the exam, a small fee of 500 EGP applies.",
        },
        {
          q: "What happens if I don't pass the entrance exam?",
          a: "You'll start with the Prerequisite Bootcamp to build your technical foundations. After completing it successfully, you'll need to retake the entrance exam and pass it in order to join the Main Program.",
        },
      ],
    },
    {
      category: "Program Access & Learning",
      questions: [
        {
          q: "Do I need to attend all live sessions?",
          a: "Yes — attending all live sessions is mandatory to get feedback and interaction with instructors and peers.",
        },
        {
          q: "How long do I have access to program materials?",
          a: "You'll have full access to all recorded lessons, resources, and projects until the end of your Freelancing Support phase.",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState({ cat: null, q: null });
  const [contactOpen, setContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
    }
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactOpen(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-red-600">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our programs.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-10">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                {category.category}
              </h3>

              {category.questions.map((item, qIdx) => {
                const isOpen = openIndex.cat === catIdx && openIndex.q === qIdx;
                return (
                  <div
                    key={qIdx}
                    className={`border rounded-lg mb-3 transition-all duration-300 ${
                      isOpen ? "border-red-600" : "border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? { cat: null, q: null } : { cat: catIdx, q: qIdx }
                        )
                      }
                      className="w-full flex justify-between items-center p-4 text-left font-semibold hover:text-red-600"
                    >
                      <span>{item.q}</span>
                      <i
                        className={`fa-solid ${
                          isOpen ? "fa-chevron-up" : "fa-chevron-down"
                        } text-red-600`}
                      ></i>
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Send your question to our support team — we'll
              respond within 24 hours.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              <i className="fa-solid fa-envelope mr-2"></i> Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full sm:w-3/4 md:w-1/2 rounded-xl p-6 relative shadow-lg">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-red-600"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-red-600 text-center">
              Contact Support
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.name && (
                  <div className="mt-1 text-red-600 text-sm border border-red-200 rounded p-2 bg-red-50">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && (
                  <div className="mt-1 text-red-600 text-sm border border-red-200 rounded p-2 bg-red-50">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
                {errors.message && (
                  <div className="mt-1 text-red-600 text-sm border border-red-200 rounded p-2 bg-red-50">
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-green-600 text-center mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
