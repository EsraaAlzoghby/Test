import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Handshake } from "lucide-react";
import heroFreelancer from "../assets/hero-bg.jpg";

function HeroSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  function scrollToTracks() {
    const tracksSection = document.getElementById('tracks');
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Real Outcomes, Not Just Courses",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "25% Cashback once a freelancer",
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "We support you even after program ends",
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroFreelancer}
            alt="Freelancer working on laptop - tech skills learning"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-red-600/50" />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <motion.div
              className="flex flex-col justify-center space-y-6 lg:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Learn In-Demand Tech Skills.<br />
                Become a <br /> Successful Freelancer.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
                  onClick={scrollToTracks}
                >
                  Take the Free Entrance Exam Now!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className=" bg-muted/30">
        <div className="">
          {/* Marquee before the 3 cards */}
          <div className="mb-6 w-full bg-red-600 text-white py-6 marquee overflow-hidden">
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

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 mb-12 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-red-600 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center mb-6 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {benefit.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
