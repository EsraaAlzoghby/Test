import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const formFields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "country", label: "Country", type: "text", required: true },
  { name: "dateOfBirth", label: "Date of Birth", type: "date", required: true },
  { name: "fieldOfStudy", label: "Field of Study or Work", type: "text", required: true },
];

const statusOptions = [
  "Student",
  "Fresh Graduate",
  "Working Professional",
  "Freelancer",
  "Other",
];

const tracks = [
  { id: "data-analysis", name: "Data Analysis", description: "Learn to analyze data and make data-driven decisions", icon: "fa-chart-bar" },
  { id: "frontend", name: "Frontend Development", description: "Build beautiful and responsive web applications", icon: "fa-code" },
  { id: "ai", name: "AI for Automation", description: "Automate tasks using AI and machine learning", icon: "fa-brain" },
  { id: "nocode", name: "No Code & Low Code", description: "Create apps without writing complex code", icon: "fa-cubes" },
  { id: "UI/UX Design", name: "UI/UX Design", description: "Create apps without writing complex code", icon: "fa-cubes" },
  { id: "Data Analysis", name: "Data Analysis", description: "Create apps without writing complex code", icon: "fa-cubes" },
  { id: "Testing & QA", name: "Data Analysis", description: "Create apps without writing complex code", icon: "fa-cubes" },
];

const CreateProfilePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedTrackId = searchParams.get("track");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    dateOfBirth: "",
    currentStatus: "",
    fieldOfStudy: "",
    weeklyCommitment: "",
    hasResources: "",
  });


  const [errors, setErrors] = useState({});
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [generalError, setGeneralError] = useState(""); 
  
  useEffect(() => {
    if (preSelectedTrackId) {
      const track = tracks.find((t) => t.id === preSelectedTrackId);
      if (track) setSelectedTrack(track);
    }
  }, [preSelectedTrackId]);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setGeneralError(""); 
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Please enter a valid email address.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.phone.match(/^[0-9]{10,15}$/))
      newErrors.phone = "Please enter a valid phone number.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
    if (!formData.fieldOfStudy.trim()) newErrors.fieldOfStudy = "Field of Study is required.";
    if (!formData.currentStatus) newErrors.currentStatus = "Please select your status.";
    if (!formData.weeklyCommitment) newErrors.weeklyCommitment = "Please select yes or no.";
    if (!formData.hasResources) newErrors.hasResources = "Please select yes or no.";
    if (!selectedTrack) newErrors.track = "Please select a track.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 11) {
      setGeneralError("Please fill in all required fields correctly before continuing.");
    } else {
      setGeneralError("");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("userProfile", JSON.stringify(formData));
    localStorage.setItem("selectedTrack", JSON.stringify(selectedTrack));
    navigate("/exam");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">

        
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Your Profile</h1>

          {generalError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center font-medium">
              <i className="fa fa-exclamation-circle mr-2"></i>
              {generalError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
              {formFields.map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block font-medium text-gray-700 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className={`w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-400 outline-none ${
                      errors[field.name] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {statusOptions.map((status) => (
                  <label key={status} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="currentStatus"
                      value={status}
                      checked={formData.currentStatus === status}
                      onChange={handleInputChange}
                    />
                    <span>{status}</span>
                  </label>
                ))}
              </div>
              {errors.currentStatus && (
                <p className="text-red-500 text-sm mt-1">{errors.currentStatus}</p>
              )}
            </div>

            {/* Readiness */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Readiness Check</h2>

              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-1">
                  Are you ready to commit at least 10–12 hours per week?
                </label>
                <div className="flex gap-6">
                  {["yes", "no"].map((val) => (
                    <label key={val} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="weeklyCommitment"
                        value={val}
                        checked={formData.weeklyCommitment === val}
                        onChange={handleInputChange}
                      />
                      <span>{val === "yes" ? "Yes" : "No"}</span>
                    </label>
                  ))}
                </div>
                {errors.weeklyCommitment && (
                  <p className="text-red-500 text-sm mt-1">{errors.weeklyCommitment}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Do you have a stable internet connection and a laptop/PC?
                </label>
                <div className="flex gap-6">
                  {["yes", "no"].map((val) => (
                    <label key={val} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hasResources"
                        value={val}
                        checked={formData.hasResources === val}
                        onChange={handleInputChange}
                      />
                      <span>{val === "yes" ? "Yes" : "No"}</span>
                    </label>
                  ))}
                </div>
                {errors.hasResources && (
                  <p className="text-red-500 text-sm mt-1">{errors.hasResources}</p>
                )}
              </div>
            </div>

            {/* Track */}
            {!preSelectedTrackId ? (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Choose Your Track</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tracks.map((track) => (
                    <div
                      key={track.id}
                      onClick={() => setSelectedTrack(track)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedTrack?.id === track.id
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <i className={`fa ${track.icon} text-3xl text-red-500 mb-3`}></i>
                      <h3 className="text-xl font-semibold mb-1">{track.name}</h3>
                      <p className="text-gray-600 text-sm">{track.description}</p>
                    </div>
                  ))}
                </div>
                {errors.track && <p className="text-red-500 text-sm mt-2">{errors.track}</p>}
              </div>
            ) : (
              selectedTrack && (
                <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">Your Selected Track</h2>
                  <div className="flex items-center gap-4">
                    <i className={`fa ${selectedTrack.icon} text-4xl text-red-500`}></i>
                    <div>
                      <h3 className="text-xl font-bold">{selectedTrack.name}</h3>
                      <p className="text-gray-600">{selectedTrack.description}</p>
                    </div>
                  </div>
                </div>
              )
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-10 py-3 rounded-md font-semibold hover:bg-red-500 transition"
              >
                Start Free Exam
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;
