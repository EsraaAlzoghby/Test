import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ali from "../assets/person2.avif";
import ahmed from "../assets/person3.avif";
import mohamed from "../assets/person.avif";
import anas from "../assets/asan.avif";
import osama from "../assets/person4.avif";
import salah from "../assets/person5.avif";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Ahmed ali",
      title: "Top Rated Plus – Web Developer",
      earnings: "$65,000+ Earned on Upwork",
      specialty: "Frontend Development & React",
      image: ahmed,
    },
    {
      name: "Ahmed ali",
      title: "Top Rated Plus – Web Developer",
      earnings: "$65,000+ Earned on Upwork",
      specialty: "Frontend Development & React",
      image: salah,
    },
    {
      name: "osama Mohamed",
      title: "Top Rated Plus – AI Specialist",
      earnings: "$58,000+ Earned on Freelancer",
      specialty: "Python Automation & AI Tools",
      image: osama,
    },
    {
      name: "ali mohemed",
      title: "Top Rated Plus – No-Code Expert",
      earnings: "$52,000+ Earned on Upwork",
      specialty: "Bubble, Flutterflow & Zapier",
      image: ali,
    },
    {
      name: "ahmed Ali",
      title: "Top Rated Plus – Full Stack Developer",
      earnings: "$60,000+ Earned on Upwork",
      specialty: "MERN Stack & APIs",
      image: mohamed,
    },
    {
      name: "ahmed Ali",
      title: "Top Rated Plus – Full Stack Developer",
      earnings: "$60,000+ Earned on Upwork",
      specialty: "MERN Stack & APIs",
      image: anas,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else setVisibleCount(3);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? instructors.length - visibleCount : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= instructors.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-600">
          Meet Your Instructors
        </h2>
        <h4 className="text-xl mb-4 text-gray-600">
          Top-Rated Instructors — $50,000+ Freelancing Achievers
        </h4>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Each main instructor is a Top-Rated Plus Freelancer on platforms like Upwork, with proven earnings exceeding $50,000.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)` }}
            >
              {instructors.map((inst, idx) => (
                <div key={idx} className={`flex-none w-full sm:w-1/2 md:w-1/3 p-4`}>
                  <div className="bg-white rounded-xl border-2 border-gray-300 hover:border-red-600 p-4 h-full flex flex-col duration-500 hover:scale-105">
                    <div className="relative h-64 mb-4">
                      <img
                        src={inst.image}
                        alt={inst.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{inst.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">{inst.title}</p>
                    <p className="text-sm text-red-600 font-bold mb-2">
                      <i className="fas fa-chart-line"></i> {inst.earnings}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-semibold">Specialty:</span> {inst.specialty}
                    </p>
                    <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                      <i className="fas fa-play mr-2"></i> Watch My Story
                    </button>
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

export default InstructorsSection;
