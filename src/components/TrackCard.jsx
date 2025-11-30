import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function TrackCard({ id, title, description, icon, programs, focusAreas, isPopular }) {
  const [showModal, setShowModal] = useState(false);
  const [currency, setCurrency] = useState("egp");
  const navigate = useNavigate();

  const handleProgramDetails = () => {
    navigate(`/program-details/${id}`);
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`relative bg-white rounded-2xl shadow-lg flex flex-col transition-all duration-300 hover:ring-2 hover:ring-red-600 ${isPopular ? "ring-offset-4" : ""
          }`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
            Most Popular
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-3xl flex-shrink-0">
              {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>

          <p className="text-gray-600 mb-4">{description}</p>
          <button
            onClick={() => setShowModal(true)}
            className="w-full border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50 flex justify-center items-center transition-all"
          >
            View Programs & Pricing
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-6 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-800 hover:text-red-600 text-xl"
            >
              <i className="fas fa-times"></i>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-red-700">{title}</h2>

            <div className="flex justify-center gap-2 mb-6">
              {["egp", "usd", "sar"].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${currency === cur
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {cur.toUpperCase()}
                </button>
              ))}
            </div>

            {programs.map((program, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50 mb-4 hover:shadow-md hover:border-red-300 transition-all duration-300"
              >
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-2">
                  {program.type}
                </span>
                <p className="text-sm text-gray-600 mb-3">{program.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold">{program.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Fee</p>
                    <p className="text-2xl font-bold text-red-600">{program.fees[currency]}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <h4 className="font-bold mb-3 text-red-700">You'll Focus On:</h4>
              <ul className="space-y-2">
                {focusAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <i className="fas fa-check text-red-600 mt-1"></i>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-6">
              <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Take Free Exam
              </button>
              <button
                onClick={handleProgramDetails}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Program Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TrackCard;
