import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* CTA SECTION */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6">
            <i className="fas fa-rocket text-white text-xl sm:text-2xl"></i>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Freelancing Journey Today
          </h2>

          <p className="text-lg sm:text-xl mb-8">
            Take the Free Entrance Exam and unlock your path to success
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/create-profile")}
              className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-lg"
            >
              Take Entrance Exam — Free
              <i className="fas fa-arrow-right text-red-600"></i>
            </button>
          </div>

          <div className="mt-8 mb-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>100% Free Exam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>25% Cashback Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Support Until $200 Goal</span>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white py-6 marquee overflow-hidden">
          <div className="marquee__inner flex">
            <div className="marquee__group flex items-center gap-6 text-xl font-bold whitespace-nowrap">
              <span className="text-2xl">✦</span> Frontend Development
              <span className="text-2xl">✦</span> AI & Machine Learning
              <span className="text-2xl">✦</span> No-Code Solutions
              <span className="text-2xl">✦</span> Full Support
              <span className="text-2xl">✦</span> Guaranteed Success
            </div>

            <div className="marquee__group flex items-center gap-6 text-xl font-bold whitespace-nowrap">
              <span className="text-2xl">✦</span> Frontend Development
              <span className="text-2xl">✦</span> AI & Machine Learning
              <span className="text-2xl">✦</span> No-Code Solutions
              <span className="text-2xl">✦</span> Full Support
              <span className="text-2xl">✦</span> Guaranteed Success
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-sm p-5 rounded-xl text-left hover:bg-white/20 hover:scale-105 transition-all duration-300">
      <div className="flex gap-3 items-start">
        <i className={`${icon} text-white text-lg mt-1`}></i>
        <div>
          <h3 className="font-bold mb-1 text-sm sm:text-base">{title}</h3>
          <p className="text-xs sm:text-sm opacity-90">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
