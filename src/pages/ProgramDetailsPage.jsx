import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Monitor, Users, Target, DollarSign, Clock, Award, CheckCircle, Video, BookOpen, Zap, TrendingUp, MessageSquare, Trophy, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState, useEffect } from "react"

function ProgramDetailsPage() {
  const { trackId } = useParams();
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["100% Online", "Live Support", "25% Cashback"]

  const handleTakeExam = () => {
    navigate(`/create-profile?track=${trackId}`);
  };



  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-b from-primary/40 via-background to-background py-24 overflow-hidden">


        {/* Main Content */}
        <main className="">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
              <div className="flex flex-col gap-8 z-10">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Get Certified in
                    <br />
                    Data Analytics
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500" />
                </div>

                {/* Main Badge */}
                <div className="space-y-2">
                  <h2 className="text-5xl sm:text-6xl font-bold">
                    <span className="text-gray-900">Diploma in</span>
                    <br />
                    <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                      Data Analytics
                    </span>
                  </h2>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0" />
                      <span className="text-lg text-gray-900 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-fit px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-200 transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>

              <div className="relative h-full min-h-96 lg:min-h-full">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-red-600 to-red-500 rounded-full opacity-80" />


                {/* Hero Image */}
                {mounted && (
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <div className="relative w-full max-w-md">
                      <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border-8 border-black transform -rotate-6">
                        <img
                          src="/src/assets/data-analytics-dashboard-charts-graphs.jpg"
                          alt="Data Analytics Dashboard"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="absolute bottom-8 right-0 w-24 h-24">
                        <img
                          src="/src/assets/hand-pointing-at-laptop-screen.jpg"
                          alt="Hand interacting"
                          className="w-full h-full object-contain opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* PROGRAM OVERVIEW - 3 PHASES */}
      <section className="py-10 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Program Structure – 3 Phases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive journey from learning to earning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phase 1 */}
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Learning Phase</h3>
              <p className="text-muted-foreground mb-4">4 Months</p>
              <p className="text-sm">
                Master fundamentals through recorded videos, live sessions, and projects.
              </p>
            </Card>

            {/* Phase 2 */}
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Freelancing Support</h3>
              <p className="text-muted-foreground mb-4">2 Months</p>
              <p className="text-sm">
                Weekly live reviews and proposal improvement with experts.
              </p>
            </Card>

            {/* Phase 3 */}
            <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Success Achievement</h3>
              <p className="text-muted-foreground mb-4">3 Months</p>
              <p className="text-sm">
                Keep receiving support until you reach your $200 milestone.
              </p>
            </Card>
          </div>

          {/* Visual timeline */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-primary/20"></div>
              <div className="relative flex justify-between">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRANCE EXAM SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entrance Exam</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a quick assessment to determine your starting point
            </p>
          </div>

          <Card className="max-w-4xl mx-auto p-8 shadow-xl border-2 border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-1">30 Minutes</h4>
                <p className="text-sm text-muted-foreground">Quick assessment</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-1">Free Attempt</h4>
                <p className="text-sm text-muted-foreground">No cost to try</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-1">Skill Test</h4>
                <p className="text-sm text-muted-foreground">IQ + Problem Solving</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold">How It Works:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Pass → Main Program</p>
                    <p className="text-sm text-muted-foreground">Start immediately with the full curriculum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Fail → Prerequisite Course</p>
                    <p className="text-sm text-muted-foreground">Build your foundation first, then retake</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-xl mb-6">
              <h4 className="font-bold mb-3">Important Rules:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>First attempt is completely free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Retake fee: 500 EGP</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span> Early Bird Offer: 5% discount within 72 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span> Limited seats: 250 per month</span>
                </li>
              </ul>
            </div>

            <Button variant="hero" size="lg" className="w-full" onClick={handleTakeExam}>
              Start Your Free Entrance Exam Now
            </Button>
          </Card>
        </div>
      </section>

      {/* PREREQUISITE COURSE SECTION */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Prerequisite Course</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build a strong foundation if you need extra preparation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Foundation Program</h3>
                  <p className="text-muted-foreground">6–8 weeks intensive preparation</p>
                </div>
                <Badge className="text-lg px-4 py-2">4,000–6,000 L.E.</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Short recorded lessons</p>
                    <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Live sessions</p>
                    <p className="text-sm text-muted-foreground">After every 2 topics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Quizzes & Projects</p>
                    <p className="text-sm text-muted-foreground">Practice what you learn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Final Exam</p>
                    <p className="text-sm text-muted-foreground">Prove your readiness</p>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="topic-1">
                  <AccordionTrigger>Introduction to Freelancing Platforms</AccordionTrigger>
                  <AccordionContent>
                    Learn how to navigate Upwork, Fiverr, and other platforms. Understand how to create a profile, search for jobs, and submit proposals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="topic-2">
                  <AccordionTrigger>English for Freelancers</AccordionTrigger>
                  <AccordionContent>
                    Master professional communication in English. Learn how to write clear emails, proposals, and messages to clients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="topic-3">
                  <AccordionTrigger>Basic Excel & Data Handling</AccordionTrigger>
                  <AccordionContent>
                    Get comfortable with spreadsheets, formulas, and basic data organization. Essential skills for any data analyst.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="topic-4">
                  <AccordionTrigger>Analytical Thinking for Beginners</AccordionTrigger>
                  <AccordionContent>
                    Develop problem-solving skills and learn how to approach data questions logically and systematically.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="topic-5">
                  <AccordionTrigger>Mini Freelancing Project Simulation</AccordionTrigger>
                  <AccordionContent>
                    Complete a hands-on project that simulates real freelancing work. Get feedback from instructors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* MAIN PROGRAM SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Main Freelancing Program</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your complete path to earning your first $200 online
            </p>
          </div>

          <Card className="max-w-5xl mx-auto p-8 shadow-xl mb-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-10 h-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-2xl">9 Months</p>
                <p className="text-sm text-muted-foreground">Total duration</p>
              </div>
              <div className="text-center">
                <Video className="w-10 h-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-2xl">40-60h</p>
                <p className="text-sm text-muted-foreground">Recorded lessons</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-2xl">2x/week</p>
                <p className="text-sm text-muted-foreground">Live sessions</p>
              </div>
              <div className="text-center">
                <Trophy className="w-10 h-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-2xl">$200</p>
                <p className="text-sm text-muted-foreground">Target earnings</p>
              </div>
            </div>

            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="projects">Projects & Assessments</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary">
                        <th className="text-left py-3 px-4">Module</th>
                        <th className="text-left py-3 px-4">Topics</th>
                        <th className="text-left py-3 px-4">Tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-semibold">Data Fundamentals</td>
                        <td className="py-4 px-4 text-sm">Excel, Power BI Basics</td>
                        <td className="py-4 px-4 text-sm">Excel, Sheets</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-semibold">Data Visualization</td>
                        <td className="py-4 px-4 text-sm">Dashboards, Reports</td>
                        <td className="py-4 px-4 text-sm">Power BI</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-semibold">Freelancing Mastery</td>
                        <td className="py-4 px-4 text-sm">Profile, Proposal, Portfolio</td>
                        <td className="py-4 px-4 text-sm">Upwork, Fiverr</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-semibold">Client Management</td>
                        <td className="py-4 px-4 text-sm">Pricing, Feedback</td>
                        <td className="py-4 px-4 text-sm">Slack, Email</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-semibold">Graduation Project</td>
                        <td className="py-4 px-4 text-sm">Real client simulation</td>
                        <td className="py-4 px-4 text-sm">All tools</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <div className="space-y-4">
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-bold mb-2">Weekly Assignments</h4>
                    <p className="text-sm text-muted-foreground">Apply what you learn with practical exercises and get feedback from instructors.</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-bold mb-2">Module Quizzes</h4>
                    <p className="text-sm text-muted-foreground">Test your knowledge at the end of each module to ensure you're on track.</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-bold mb-2">Mid-Program Project</h4>
                    <p className="text-sm text-muted-foreground">Complete a comprehensive project halfway through to showcase your growing skills.</p>
                  </Card>
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-bold mb-2">Graduation Project</h4>
                    <p className="text-sm text-muted-foreground">Simulate a real client project from start to finish. This becomes part of your portfolio.</p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* FREELANCING SUPPORT PHASE */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Freelancing Support Phase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help you land your first clients on Upwork & Fiverr
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Weekly Live Sessions</h3>
              <p className="text-muted-foreground mb-4">
                Join expert-led sessions where we review your progress, improve your proposals, and share winning strategies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Proposal review & feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Profile optimization tips</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Q&A with successful freelancers</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Progress Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                Track your freelancing journey with real metrics that matter.
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold">Proposals Sent</span>
                    <span className="text-sm text-primary font-bold">12</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold">Success Rate</span>
                    <span className="text-sm text-primary font-bold">25%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold">Earnings Toward $200</span>
                    <span className="text-sm text-primary font-bold">$85</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '42.5%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SUCCESS ACHIEVEMENT PHASE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Achievement Phase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't stop until you reach your $200 goal
            </p>
          </div>

          <Card className="max-w-3xl mx-auto p-8 text-center shadow-xl border-2 border-primary/20">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold mb-4">25% Cashback on Success</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Once you submit proof of earning your first $200, we'll reward you with 25% cashback within 30 days.
            </p>

            <div className="bg-secondary/50 p-6 rounded-xl mb-6">
              <h4 className="font-bold mb-4 text-xl">Your Success Journey:</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">Complete the program</p>
                    <p className="text-sm text-muted-foreground">Finish all modules and projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold">Apply for freelance jobs</p>
                    <p className="text-sm text-muted-foreground">Use our templates and strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold">Earn your first $200</p>
                    <p className="text-sm text-muted-foreground">We stay with you until you do</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold">Claim your reward</p>
                    <p className="text-sm text-muted-foreground">Submit proof and get 25% back</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Average success time: 3 months after completing the program</span>
            </div>
          </Card>
        </div>
      </section>

      {/* INSTRUCTORS SECTION */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Your Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from successful freelancers who've been where you are
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Ahmed Hassan", experience: "5+ years", earnings: "$50K+", specialty: "Data Analysis" },
              { name: "Sara Mohamed", experience: "4+ years", earnings: "$35K+", specialty: "Visualization" },
              { name: "Omar Ibrahim", experience: "6+ years", earnings: "$60K+", specialty: "Freelancing" }
            ].map((instructor, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{instructor.specialty}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{instructor.experience} experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>{instructor.earnings} earned</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Watch Intro Video
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real students who achieved their $200 goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mahmoud Ali",
                earnings: "$350",
                time: "2 months",
                quote: "I couldn't believe it when I got my first client. The support from instructors was amazing!"
              },
              {
                name: "Nour Khaled",
                earnings: "$500",
                time: "3 months",
                quote: "The step-by-step approach made everything so clear. Now I'm a full-time freelancer!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Earned {testimonial.earnings} in {testimonial.time}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4 mr-2" />
                  Watch Story
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEES & ENROLLMENT SECTION */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fees & Enrollment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear pricing with no hidden fees
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Main Program Pricing */}
              <Card className="p-8 border-2 border-primary shadow-xl">
                <Badge className="mb-4">Recommended</Badge>
                <h3 className="text-2xl font-bold mb-2">Main Program</h3>
                <p className="text-4xl font-bold text-primary mb-4">8,000–10,000 L.E.</p>
                <p className="text-muted-foreground mb-6">9 months comprehensive training</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>All recorded lessons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Live sessions & support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Freelancing coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>25% cashback on success</span>
                  </li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" onClick={handleTakeExam}>
                  Take Free Entrance Exam
                </Button>
              </Card>

              {/* Prerequisite Pricing */}
              <Card className="p-8">
                <Badge variant="outline" className="mb-4">If Needed</Badge>
                <h3 className="text-2xl font-bold mb-2">Prerequisite Course</h3>
                <p className="text-4xl font-bold text-primary mb-4">4,000–6,000 L.E.</p>
                <p className="text-muted-foreground mb-6">6–8 weeks foundation building</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Core fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Live sessions included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Quizzes & projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Prepare for main program</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full" onClick={handleTakeExam}>
                  Start Your Journey
                </Button>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-2 border-primary/20 text-center">
              <h4 className="text-xl font-bold mb-2"> Special Early Bird Offer</h4>
              <p className="text-muted-foreground mb-4">
                Enroll within 72 hours of taking the exam and get 5% discount on either program!
              </p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <Zap className="w-5 h-5" />
                <span>Limited to 250 seats per month</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ProgramDetailsPage;


