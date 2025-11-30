import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ali from "../assets/person2.avif"
import ahmed from "../assets/person3.avif"
import mohamed from "../assets/person.avif"
import anas from "../assets/asan.avif"
import osama from "../assets/person4.avif"
import salah from "../assets/person5.avif"
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anas",
      result: "Earned $250 in 6 Weeks",
      story: "I started with zero experience. After the Web Development track, I landed my first three clients on Upwork. The live sessions and feedback were game-changers!",
      image: anas,
      track: "Web Development",
      video: true
    },
    {
      name: "osama",
      result: "Earned $250 in 6 Weeks",
      story: "I started with zero experience. After the Web Development track, I landed my first three clients on Upwork. The live sessions and feedback were game-changers!",
      image: osama,
      track: "Web Development",
      video: true
    },
    {
      name: "salah",
      result: "Earned $250 in 6 Weeks",
      story: "I started with zero experience. After the Web Development track, I landed my first three clients on Upwork. The live sessions and feedback were game-changers!",
      image: salah,
      track: "Web Development",
      video: true
    },
    {
      name: "ali",
      result: "Landed Full-Time Job in 2 Months",
      story: "The AI Automation track transformed my career. I went from unemployed to getting hired as a Python developer at a tech startup. Thank you AMIT Pro!",
      image: ali,
      track: "AI Automation",
      video: true
    },
    {
      name: "ahmed",
      result: "Built 5 Apps, Earning $180/Week",
      story: "No-Code track showed me how to build real apps without writing code. Now I'm creating apps for local businesses and my income keeps growing!",
      image: ahmed,
      track: "No-Code Development",
      video: true
    },
    {
      name: "Amgad",
      result: "From Zero to $300 in First Month",
      story: "The instructors really care about your success. They helped me polish my profile, send proposals, and win projects. I'm now a confident freelancer!",
      image: ali,
      track: "Web Development",
      video: false
    },
    {
      name: "mohamed",
      result: "Got Freelance Clients in 1 Month",
      story: "The live sessions and feedback helped me build a portfolio fast. Now I have recurring clients!",
      image: mohamed,
      track: "Web Development",
      video: false
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = () => {
    if (window.innerWidth < 640) setVisibleCount(1);
    else if (window.innerWidth < 768) setVisibleCount(2);
    else setVisibleCount(3);
  };

  useEffect(() => {
    updateVisibleCount(); 
    window.addEventListener("resize", updateVisibleCount); 
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - visibleCount ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-600">Real Students. Real Success.</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Don't just take our word for it — hear from students who transformed their careers through AMIT 
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white rounded-xl border-2 border-gray-300 hover:border-red-600 duration-500 hover:scale-105 p-4 h-full flex flex-col">
                    <div className="relative h-48 mb-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {t.video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer rounded-xl">
                          <i className="fas fa-play text-white text-3xl"></i>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-red-600 font-bold flex items-center gap-1 mb-2">
                      <i className="fas fa-chart-line"></i> {t.result}
                    </p>
                    <h3 className="font-bold text-lg mb-1">{t.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{t.track}</p>
                    <p className="text-sm italic text-gray-600">"{t.story}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-[-35px] -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-[-35px] -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;




