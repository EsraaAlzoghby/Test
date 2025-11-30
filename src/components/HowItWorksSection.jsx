import "@fortawesome/fontawesome-free/css/all.min.css";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <i className="fas fa-mouse-pointer text-white text-xl"></i>,
      step: "Step 1",
      title: "Take the Free Entrance Exam",
      description: "Click the button to start. No payment required — just create your account and choose your track.",
    },
    {
      icon: <i className="fas fa-user-plus text-white text-xl"></i>,
      step: "Step 2",
      title: "Complete Your Profile",
      description: "Fill out a quick form and select your desired track (Frontend, AI, or No-Code).",
    },
    {
      icon: <i className="fas fa-file-alt text-white text-xl"></i>,
      step: "Step 3",
      title: "Take the Exam",
      description: "Instant exam launch with adaptive questions. Takes about 30 minutes. Automated scoring.",
    },
    {
      icon: <i className="fas fa-award text-white text-xl"></i>,
      step: "Step 4",
      title: "Get Your Result & Offer",
      description: "Pass? Join Main Program. Not yet? Start with Prerequisite. Plus, get 5% off if you register within 72 hours!",
    },
    {
      icon: <i className="fas fa-credit-card text-white text-xl"></i>,
      step: "Step 5",
      title: "Payment & Enrollment",
      description: "Transparent pricing, flexible payment methods (1-3 installments), and automatic onboarding.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-red-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-600">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Simple, automated journey from entrance exam to freelancing success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border-2 border-gray-300 hover:border-red-600 transition h-full flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                {step.icon}
              </div>
              <span className="text-sm font-bold text-red-600 mb-2">{step.step}</span>
              <h3 className="text-lg font-bold mb-3 min-h-[3rem] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded-lg max-w-3xl mx-auto font-semibold">
            Automated process means instant results and faster onboarding
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
