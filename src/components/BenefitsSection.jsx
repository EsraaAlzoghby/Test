import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import { CheckCircle2, Gift, Users, Target, GraduationCap } from "lucide-react";

function BenefitsSection() {
  const [benefits] = useState([
    {
      icon: "fa-video",
      title: "2+ Live Sessions Per Week",
      description:
        "Interactive, practical sessions with real-time feedback and Q&A",
    },
    {
      icon: "fa-users",
      title: "Full-Time Instructors",
      description:
        "No cancellations. Dedicated experts committed to your success",
    },
    {
      icon: "fa-book",
      title: "High-Quality Content",
      description: "40–60 hours of recorded lessons you can revisit anytime",
    },
    {
      icon: "fa-bullseye",
      title: "Goal-Oriented Support",
      description:
        "We support you until you achieve your first $200 in freelancing",
    },
    {
      icon: "fa-users",
      title: "Expert Community",
      description: "Access to alumni groups and ongoing mentorship",
    },
    {
      icon: "fa-award",
      title: "Top-Rated Instructors",
      description:
        "Learn from $50K+ earning freelancers with proven track records",
    },
  ]);

  return (
    <section id="benefits" className="bg-white py-16">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-3">
          Program Benefits
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Everything you need to succeed as a freelancer — from expert
          instruction to community support
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-6 hover:border-red-600 hover:shadow-md transition"
            >
              <div className="bg-red-100 w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4">
                <i className={`fas ${item.icon} text-red-600 text-xl`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br mt-10 max-w-[95%] sm:max-w-7xl mx-auto from-red-500 to-red-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12 text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
                Special Reward
              </div>
              <h3 className="text-3xl mb-4">Get Paid for Your Success</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Complete the program and hit your $200 goal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Share your journey in a short video testimonial</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Receive 25% cashback of your program fees</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-lg text-white "> Yes, we reward those who finish and win.</p>
              </div>
            </div>


            <div className="relative p-8 lg:p-12">
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <Gift className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <div className="text-5xl text-red-600 mb-2">25%</div>
                  <div className="text-gray-600 mb-4">Cashback Reward</div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Complete program + Earn $200<br />
                      = Get money back!
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-300 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-red-300 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 max-w-[95%] sm:max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-red-500 hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Private Alumni Group</h4>
            <p className="text-sm text-gray-600">Join our exclusive network of successful graduates</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Lifetime Support</h4>
            <p className="text-sm text-gray-600">Come back anytime for help, advice, or referrals</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Continued Growth</h4>
            <p className="text-sm text-gray-600">Access to advanced workshops and exclusive opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
