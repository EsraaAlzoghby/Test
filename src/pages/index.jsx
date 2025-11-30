import HeroSection from "../components/HeroSection.jsx";
import TracksSection from "../components/TracksSection.jsx";
import InstructorsSection from "../components/InstructorsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import CTASection from "../components/CTASection.jsx";



function Index() {
  return (
    <div className="min-h-screen">

      <HeroSection />
      
      {/* Tracks section - shows our 3 learning paths */}
      <TracksSection />
      
      {/* Instructors section - meet our teachers */}
      <InstructorsSection />
      
      {/* Testimonials section - real student success stories */}
      <TestimonialsSection />
      
      {/* Benefits section - why choose us */}
      <BenefitsSection />
      
      {/* How it works section - step by step process */}
      <HowItWorksSection />
      
  
      
      {/* CTA section - final call to action */}
      <CTASection />
      
    </div>
  );
}

export default Index;
