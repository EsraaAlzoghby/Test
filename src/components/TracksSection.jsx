import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Code2, Bot, Boxes } from "lucide-react";
import TrackCard from "./TrackCard";

function TracksSection() {
  const navigate = useNavigate();

  // تعريف التراكات
  const tracks = [
    {
      title: "Frontend Development",
      description:
        "Learn to build modern, responsive websites and apps using HTML, CSS, JavaScript, and React.",
      icon: <Code2 className="w-8 h-8" />,
      isPopular: true,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description:
            "Start with the basics of HTML, CSS, and JS to build a solid foundation.",
          duration: "3 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description:
            "Learn advanced React and build real-world freelance projects.",
          duration: "7 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: [
        "Responsive web design",
        "React and modern UI tools",
        "Freelancing projects for clients",
      ],
    },
    {
      title: "AI for Automation",
      description:
        "Automate tasks and workflows using Python, APIs, and AI tools to create smart solutions.",
      icon: <Bot className="w-8 h-8" />,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description:
            "Learn Python basics and automation concepts to prepare for the main program.",
          duration: "2 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description:
            "Work on real automation projects and deliver freelance solutions for businesses.",
          duration: "5 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: [
        "Python scripting and APIs",
        "Building automation tools",
        "AI-powered workflows",
      ],
    },
    {
      title: "No-Code & Low-Code Development",
      description:
        "Build websites and apps easily using Bubble, Flutterflow, and Zapier — no coding required!",
      icon: <Boxes className="w-8 h-8" />,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description:
            "Understand logic, workflows, and tools to start building with no-code platforms.",
          duration: "3 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description:
            "Create full web apps, automate systems, and deliver real projects for clients.",
          duration: "5 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: [
        "Building apps without code",
        "Automating business processes",
        "Creating MVPs for startups",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* العنوان والوصف */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your Freelancing Track
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Select the path that matches your freelancing goal — each track includes two programs (Prerequisite & Main)
            designed to help you learn, build projects, and start earning your first $200 online.
          </p>

          {/* الملاحظة الخاصة بالامتحان */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="font-semibold mb-2">
              <i className="fas fa-book-open text-red-600 text-lg pe-6"></i>
              You must take the free entrance exam to determine your starting point.
            </p>
            <p className="text-sm text-gray-600">
              Students who pass the exam start directly in the Main Program, while those who need to build stronger foundations begin with the Prerequisite Bootcamp before advancing to the main track.
            </p>
          </div>
        </div>

        {/* عرض التراكات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((item, i) => (
            <TrackCard
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              programs={item.programs}
              focusAreas={item.focusAreas}
              isPopular={item.isPopular}
            />
          ))}
        </div>

        {/* زرار عرض الكورسات */}
        <div className="mt-12 text-center">
<button
  onClick={() => {
    navigate("/courses");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
>
  Show More Courses
</button>
        </div>

        {/* جزء التوضيح */}
        <div className="mt-12 text-center">
          <div className="bg-white border-2 border-red-600 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              How Program Placement Works
            </h3>
            <p className="text-gray-600 mb-4">
              Every student begins by taking a{" "}
              <span className="font-bold text-red-600">
                free entrance exam
              </span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-bold mb-2 flex items-center justify-center gap-2 text-green-600">
                  <i className="fas fa-check-circle"></i> If you pass
                </p>
                <p className="text-sm text-gray-600">
                  You'll join the Main Program directly
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-xl">
                <p className="font-bold mb-2 flex items-center justify-center gap-2 text-red-600">
                  <i className="fa-solid fa-xmark"></i> If you don't pass
                </p>
                <p className="text-sm text-gray-600">
                  You'll start with the Prerequisite Bootcamp to strengthen your base
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic">
              This ensures you start from the right level — saving time and maximizing your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
