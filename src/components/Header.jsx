import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import amitlogo from "../assets/amit logo (red)-01.png";

import {
  Menu, X, ChevronDown, GraduationCap, BookOpen, FileCheck, Users,
  HelpCircle, MessageCircle, CheckCircle2, BarChart2, CheckSquare, Layout, Server, Boxes, Code2, Bot
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

import { cn } from "../lib/utils.js";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, [location.pathname]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("hero");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleHomeClick} className="w-40 h-50 hover:text-primary/80 transition-colors">
              <img src={amitlogo} alt="AMIT Logo" />
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <button
                  onClick={handleHomeClick}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Home
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent className="mt-80">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] bg-white md:grid-cols-2">
                    <ListItem onClick={() => navigate("/courses")} title="Course Catalog" icon={<BookOpen className="h-4 w-4" />}>
                      Browse individual courses
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/frontend")} title="Frontend Development" icon={<Code2 className="h-4 w-4" />}>
                      Web development & React freelancing
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/ai")} title="AI for Automation" icon={<Bot className="h-4 w-4" />}>
                      Python, APIs & AI-powered automation
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/nocode")} title="No-Code Development" icon={<Boxes className="h-4 w-4" />}>
                      Build apps without coding
                    </ListItem>
                    <ListItem onClick={() => navigate("/program-details/:id")} title="Data Analysis" icon={<BarChart2 className="h-4 w-4" />}>
                      Analyze data for insights & decision making
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/uiux")} title="UI/UX Design" icon={<Layout className="h-4 w-4" />}>
                      Design intuitive user interfaces & experiences
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/backend")} title="Backend Development" icon={<Server className="h-4 w-4" />}>
                      Build robust server-side apps & APIs
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/testing")} title="Testing & QA" icon={<CheckSquare className="h-4 w-4" />}>
                      Manual & automated testing for web and mobile apps
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent className="mt-36">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
                    <ListItem onClick={() => scrollToSection("instructors")} title="Instructors" icon={<Users className="h-4 w-4" />}>
                      Meet our expert instructors
                    </ListItem>
                    <ListItem onClick={() => scrollToSection("testimonials")} title="Student Success" icon={<GraduationCap className="h-4 w-4" />}>
                      Real stories from our graduates
                    </ListItem>
                    <ListItem onClick={() => scrollToSection("benefits")} title="Why Choose Us" icon={<FileCheck className="h-4 w-4" />}>
                      Our unique advantages
                    </ListItem>
                    <ListItem onClick={() => scrollToSection("how-it-works")} title="How It Works" icon={<HelpCircle className="h-4 w-4" />}>
                      Our learning process
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => navigate('/create-profile')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Entrance Exam
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => navigate('/questions')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Support
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop login/logout */}
          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" onClick={() => {
                  if (location.pathname === "/auth") {
                    window.dispatchEvent(new Event("showLogin"));
                  } else {
                    navigate("/auth", { replace: true });
                  }
                }}>
                  Login
                </Button>
                <Button variant="default" onClick={() => {
                  if (location.pathname === "/auth") {
                    window.dispatchEvent(new Event("showSignup"));
                  } else {
                    navigate("/auth?mode=signup", { replace: true });
                  }
                }}>
                  Register
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => {
                  localStorage.removeItem("userData");
                  setIsLoggedIn(false);
                  navigate("/");
                }}>
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, icon, onClick, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          onClick={onClick}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug hover:text-white">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
