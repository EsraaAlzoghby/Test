"use client"

import { useNavigate } from "react-router-dom"
import TrackCard from "../components/TrackCard.jsx"
import { Code2, Bot, Boxes, CheckSquare, BarChart2, Layout, Server, Search, ChevronDown, X } from "lucide-react"
import { useState } from "react"

function CoursesPage() {
  const navigate = useNavigate()

  const [searchInput, setSearchInput] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedModes, setSelectedModes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 300])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const allCourses = [
    {
      title: "Frontend Development",
      description:
        "Learn to build modern websites and apps with HTML, CSS, JavaScript, and React ",
      icon: <Code2 className="w-8 h-8" />,
      isPopular: true,
      languages: ["JavaScript", "C#"],
      mode: ["Online", "Offline"],
      basePrice: 160,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description: "For beginners who need to build strong foundations before joining the main program.",
          duration: "3 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description: "Full freelancing track covering advanced web development, React projects, and client work.",
          duration: "7 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: ["Real web projects", "Freelancing gigs on Upwork", "Client-ready portfolio"],
    },

 

     {
      title: "Backend Development",
      description: "Learn Node.js, Express, and MongoDB to build full-stack applications.",
      icon: <Server className="w-8 h-8" />,
      languages: ["Node.js", "JavaScript", "SQL"],
      mode: ["Online", "Offline"],
      basePrice: 160,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description: "JavaScript & Node.js basics.",
          duration: "2 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description: "REST APIs, authentication, full-stack apps.",
          duration: "6 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: ["REST APIs", "Databases", "Full-stack development"],
    },

    {
      title: "AI for Automation",
      description: "Learn to automate business workflows using Python, APIs, and AI tools.",
      icon: <Bot className="w-8 h-8" />,
      languages: ["Python"],
      mode: ["Online"],
      basePrice: 160,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description: "Python basics and AI fundamentals.",
          duration: "2 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description: "Real-world AI projects, API integrations, and automation tools.",
          duration: "5 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: ["Python automation", "AI tools", "Client automation"],
    },

   {
      title: "Testing & QA",
      description: "Learn manual and automated testing for web and mobile apps.",
      icon: <CheckSquare className="w-8 h-8" />,
      languages: ["JavaScript"],
      mode: ["Online"],
      basePrice: 100,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description: "Software testing basics and writing test cases.",
          duration: "1 month",
          fees: { egp: "3,000 EGP", usd: "~100 USD", sar: "370 SAR" },
        },
        {
          type: "Main Program",
          description: "Full testing track including manual & automated testing.",
          duration: "3 months",
          fees: { egp: "6,000 EGP", usd: "~200 USD", sar: "730 SAR" },
        },
      ],
      focusAreas: ["Manual testing", "Automated testing", "Freelance QA projects"],
    },

    {
      title: "Data Analysis",
      description: "Learn Excel, SQL, Python, and data visualization.",
      icon: <BarChart2 className="w-8 h-8" />,
      languages: ["Python", "SQL"],
      mode: ["Online"],
      basePrice: 130,
      programs: [
        {
          type: "Data Fundamentals",
          description: "Excel basics & SQL queries.",
          duration: "1 month",
          fees: {
            egp: "4,000 EGP",
            usd: "~130 USD",
            sar: "490 SAR",
          },
        },
        {
          type: "Advanced Analysis",
          description: "Python dashboards & visualization projects.",
          duration: "2 months",
          fees: {
            egp: "6,000 EGP",
            usd: "~200 USD",
            sar: "730 SAR",
          },
        },
      ],
      focusAreas: ["Data cleaning", "Dashboards", "Insights"],
    },

    {
      title: "UI/UX Design",
      description: "Learn Figma, wireframing, prototyping, and usability testing.",
      icon: <Layout className="w-8 h-8" />,
      languages: ["Figma"],
      mode: ["Online", "Offline"],
      basePrice: 115,
      programs: [
        {
          type: "Design Fundamentals",
          description: "Color theory & typography.",
          duration: "1 month",
          fees: {
            egp: "3,500 EGP",
            usd: "~115 USD",
            sar: "425 SAR",
          },
        },
        {
          type: "Advanced UI/UX",
          description: "Prototyping & real-world designs.",
          duration: "2 months",
          fees: {
            egp: "5,500 EGP",
            usd: "~180 USD",
            sar: "670 SAR",
          },
        },
      ],
      focusAreas: ["Prototyping", "UX research", "App design"],
    },

    {
      title: "No-Code & Low-Code ",
      description: "Build apps without coding using Bubble, Flutterflow, Zapier.",
      icon: <Boxes className="w-8 h-8" />,
      languages: ["C#"],
      mode: ["Online"],
      basePrice: 160,
      programs: [
        {
          type: "Prerequisite Bootcamp",
          description: "No-code basics & app logic.",
          duration: "3 months",
          fees: {
            egp: "5,000 EGP",
            usd: "~160 USD",
            sar: "610 SAR",
          },
        },
        {
          type: "Main Program",
          description: "Build real MVPs for clients.",
          duration: "5 months",
          fees: {
            egp: "8,000 EGP",
            usd: "~260 USD",
            sar: "970 SAR",
          },
        },
      ],
      focusAreas: ["MVPs", "Automations", "Client apps"],
    },
  ]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = !searchInput || course.title.toLowerCase().includes(searchInput.toLowerCase())

    const matchesLanguage =
      selectedLanguages.length === 0 || selectedLanguages.some((lang) => course.languages.includes(lang))

    const matchesMode = selectedModes.length === 0 || selectedModes.some((mode) => course.mode.includes(mode))

    const matchesPrice = course.basePrice >= priceRange[0] && course.basePrice <= priceRange[1]

    return matchesSearch && matchesLanguage && matchesMode && matchesPrice
  })

  const languages = ["Python", "C#", "JavaScript", "Node.js", "SQL", "Figma"]
  const modes = ["Online", "Offline"]

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) => (prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]))
  }

  const toggleMode = (mode) => {
    setSelectedModes((prev) => (prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]))
  }

  const clearFilters = () => {
    setSelectedLanguages([])
    setSelectedModes([])
    setPriceRange([0, 300])
    setSearchInput("")
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-secondary/30 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar - Keep at top */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a course..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">All Available Courses</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">Browse all freelancing tracks below.</p>
          </div>

          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg z-40"
              aria-label="Toggle filters"
            >
              {sidebarOpen ? <X size={24} /> : <ChevronDown size={24} />}
            </button>

            {/* Sidebar Filter - Responsive */}
            <div className={`${sidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0 mb-8 lg:mb-0`}>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-20 lg:sticky lg:top-4">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  {(selectedLanguages.length > 0 ||
                    selectedModes.length > 0 ||
                    priceRange[0] > 0 ||
                    priceRange[1] < 300) && (
                    <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                      Clear all
                    </button>
                  )}
                </div>

                {/* Languages Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3 text-gray-900">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <label key={lang} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLanguages.includes(lang)}
                          onChange={() => toggleLanguage(lang)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mode Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3 text-gray-900">Mode</h3>
                  <div className="space-y-2">
                    {modes.map((mode) => (
                      <label key={mode} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedModes.includes(mode)}
                          onChange={() => toggleMode(mode)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Slider */}
                <div className="mb-4">
                  <h3 className="font-semibold text-sm mb-3 text-gray-900">Price Range</h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-600">${priceRange[0]}</span>
                      <span className="text-sm font-semibold text-gray-900">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid - Keep existing structure */}
            <div className="flex-1 w-full">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course, index) => (
                    <TrackCard key={index} {...course} />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-96 text-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">No courses found</p>
                    <p className="text-gray-600 mb-4">Try adjusting your filters</p>
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage
