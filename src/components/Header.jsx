import * as React from "react";
import { Button } from "../components/ui/button";
import amitlogo from "../assets/amit logo (red)-01.png";

import {   Menu, X, ChevronDown, GraduationCap, BookOpen, FileCheck, Users, 
  HelpCircle, MessageCircle, CheckCircle2, BarChart2,CheckSquare, Layout, Server ,Boxes , Code2 , Bot  } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to handle navigation - either scroll on homepage or navigate to homepage
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If we're on homepage, scroll to hero section
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to homepage
      navigate("/");
    }
    setMobileMenuOpen(false);
  };

  const handleCoursesClick = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("tracks");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/courses");
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          
          {/* LEFT SIDE - Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleHomeClick}
              className=" w-40 h-50 hover:text-primary/80 transition-colors"
            >
              <img src={amitlogo} alt="" />
            </button>
          </div>

          {/* CENTER - Navigation Menu (Desktop only) */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <button
                  onClick={handleHomeClick}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Home
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent className="mt-80">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] bg-white md:grid-cols-2">
                  
                    {/* <ListItem onClick={() => scrollToSection("tracks")} title="All Tracks" icon={<BookOpen className="h-4 w-4" />}>
                      View all available learning paths
                    </ListItem> */}
                    <ListItem onClick={() => navigate("/courses")} title="Course Catalog" icon={<BookOpen className="h-4 w-4" />}>
                      Browse individual courses
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/frontend")} title="Frontend Development" icon={<Code2 className="h-4 w-4" />}>
                      Web development & React freelancing
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/ai")} title="AI for Automation" icon={<Bot className="h-4 w-4" />}>
                      Python, APIs & AI-powered automation
                    </ListItem>
                    <ListItem onClick={() => navigate("/program/nocode")} title="No-Code Development" icon={<Boxes className="h-4 w-4 " />}>
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
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Entrance Exam
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => navigate('/questions')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Support
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* RIGHT SIDE - Auth Buttons (Desktop only) */}
          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" onClick={() => navigate('/auth')}>
                  Login
                </Button>
                <Button variant="default" onClick={() => navigate('/auth')}>
                  Register
                </Button>
              </>
            ) : (
              <Button variant="default" onClick={() => navigate('/auth')}>
                Login
              </Button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU - Shows when hamburger is clicked */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={handleHomeClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-3 py-2 rounded-md hover:bg-accent"
              >
                Home
              </button>
              
              {/* Programs Section */}
              <div className="px-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Programs</div>
                <div className="flex flex-col space-y-1.5 ml-2">
                  {/* <button
                    onClick={() => scrollToSection("tracks")}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    All Tracks
                  </button> */}
                  <button
                    onClick={() => { navigate('/courses'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Course Catalog
                  </button>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-3 mb-1.5">Track Details</div>
                  <button
                    onClick={() => { navigate('/program/frontend'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Frontend Development
                  </button>
                  <button
                    onClick={() => { navigate('/program/ai'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    AI for Automation
                  </button>
                  <button
                    onClick={() => { navigate('/program/nocode'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    No-Code Development
                  </button>
                  <button
                    onClick={() => { navigate('/program/backend'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Backend Development
                  </button>
                  <button
                    onClick={() => { navigate('/program/uiux'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    UI/UX Design
                  </button>
                  <button
                    onClick={() => { navigate('/program-details/:id'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                   Data Analysis
                  </button>
                  <button
                    onClick={() => { navigate('//program/testing'); setMobileMenuOpen(false); }}
                    className="text-foreground hover:text-primary transition-colors text-left text-sm py-1.5 rounded-md hover:bg-accent px-2"
                  >
                   Testing & QA
                  </button>
                </div>
              </div>

              {/* About Section */}
              <div className="px-3 ">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">About</div>
                <div className="flex flex-col space-y-1.5 ml-2 ">
                  <button
                    onClick={() => scrollToSection("instructors")}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Instructors
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Student Success
                  </button>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-1.5 rounded-md hover:bg-accent px-2"
                  >
                    Why Choose Us
                  </button>
                </div>
              </div>

              <button
                onClick={() => { navigate('/create-profile'); setMobileMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-3 py-2 rounded-md hover:bg-accent"
              >
                Entrance Exam
              </button>

              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left px-3 py-2 rounded-md hover:bg-accent"
              >
                Support / FAQ
              </button>
              
              <div className="px-3 pt-3 space-y-2 border-t border-border">
                {!isLoggedIn ? (
                  <>
                    <Button variant="outline" className="w-full" onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}>
                      Login
                    </Button>
                    <Button variant="default" className="w-full" onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}>
                      Register
                    </Button>
                  </>
                ) : (
                  <Button variant="default" className="w-full" onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}>
                    Login
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// List item component for navigation menu dropdowns
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





// // Import button component and icons
// import * as React from "react";
// import { Button } from "../components/ui/button";
// import amitlogo from "../assets/amit logo (red)-01.png";
// import {
//   Search, Menu, X, ChevronDown, GraduationCap, BookOpen, FileCheck, Users,
//   HelpCircle, MessageCircle, CheckCircle2, BarChart2, CheckSquare, Layout, Server, Boxes, Code2, Bot
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../components/ui/navigation-menu";
// import { cn } from "../lib/utils.js";

// // Header Component
// function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const userData = localStorage.getItem("userData");
//     setIsLoggedIn(!!userData);
//   }, [location.pathname]);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

// const handleSearch = (e) => {
//   e.preventDefault();
//   const query = searchQuery.trim();

//   if (!query) return; // لو البحث فاضي، لا نفعل أي شيء

//   navigate(`/courses?search=${encodeURIComponent(query)}`); // الترميز يحمي أي أحرف خاصة
//   setSearchOpen(false);
//   setSearchQuery(""); // مسح الحقل بعد البحث
// };


//   const handleHomeClick = () => {
//     if (location.pathname === "/") {
//       const element = document.getElementById("hero");
//       if (element) element.scrollIntoView({ behavior: "smooth" });
//     } else navigate("/");
//     setMobileMenuOpen(false);
//   };

//   const scrollToSection = (sectionId) => {
//     if (location.pathname === "/") {
//       const element = document.getElementById(sectionId);
//       if (element) element.scrollIntoView({ behavior: "smooth" });
//     } else navigate("/", { state: { scrollTo: sectionId } });
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-18">

//           {/* LEFT SIDE - Logo */}
//           <div className="flex items-center">
//             <button onClick={handleHomeClick} className="w-40 h-50 hover:text-primary/80 transition-colors">
//               <img src={amitlogo} alt="Amit Logo" />
//             </button>
//           </div>

//           {/* CENTER - Navigation Menu (Desktop only) */}
//           <NavigationMenu className="hidden lg:flex">
//             <NavigationMenuList className="gap-1">
//               <NavigationMenuItem>
//                 <button
//                   onClick={handleHomeClick}
//                   className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
//                 >
//                   Home
//                 </button>
//               </NavigationMenuItem>

//               {/* Programs Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] bg-white md:grid-cols-2">
//                     <ListItem onClick={() => navigate("/courses")} title="Course Catalog" icon={<BookOpen className="h-4 w-4" />}>
//                       Browse individual courses
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/frontend")} title="Frontend Development" icon={<Code2 className="h-4 w-4" />}>
//                       Web development & React freelancing
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/ai")} title="AI for Automation" icon={<Bot className="h-4 w-4" />}>
//                       Python, APIs & AI-powered automation
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/nocode")} title="No-Code Development" icon={<Boxes className="h-4 w-4" />}>
//                       Build apps without coding
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program-details/:id")} title="Data Analysis" icon={<BarChart2 className="h-4 w-4" />}>
//                       Analyze data for insights & decision making
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/uiux")} title="UI/UX Design" icon={<Layout className="h-4 w-4" />}>
//                       Design intuitive user interfaces & experiences
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/backend")} title="Backend Development" icon={<Server className="h-4 w-4" />}>
//                       Build robust server-side apps & APIs
//                     </ListItem>
//                     <ListItem onClick={() => navigate("/program/testing")} title="Testing & QA" icon={<CheckSquare className="h-4 w-4" />}>
//                       Manual & automated testing for web and mobile apps
//                     </ListItem>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* About Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>About</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
//                     <ListItem onClick={() => scrollToSection("instructors")} title="Instructors" icon={<Users className="h-4 w-4" />}>
//                       Meet our expert instructors
//                     </ListItem>
//                     <ListItem onClick={() => scrollToSection("testimonials")} title="Student Success" icon={<GraduationCap className="h-4 w-4" />}>
//                       Real stories from our graduates
//                     </ListItem>
//                     <ListItem onClick={() => scrollToSection("benefits")} title="Why Choose Us" icon={<FileCheck className="h-4 w-4" />}>
//                       Our unique advantages
//                     </ListItem>
//                     <ListItem onClick={() => scrollToSection("how-it-works")} title="How It Works" icon={<HelpCircle className="h-4 w-4" />}>
//                       Our learning process
//                     </ListItem>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* Other Nav Buttons */}
//               <NavigationMenuItem>
//                 <button onClick={() => navigate('/create-profile')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                   Entrance Exam
//                 </button>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <button onClick={() => navigate('/questions')} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
//                   Support
//                 </button>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           {/* RIGHT SIDE - Auth Buttons + Search (Desktop only) */}
//           <div className="hidden lg:flex items-center gap-3">
//             {searchOpen ? (
//               <form onSubmit={handleSearch} className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   placeholder="Search courses..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="border rounded-md px-2 py-1 h-9"
//                   autoFocus
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
//                   className="h-9 w-9"
//                 >
//                   <X className="w-4 h-4" />
//                 </Button>
//               </form>
//             ) : (
//               <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="h-9 w-9">
//                 <Search className="w-4 h-4" />
//               </Button>
//             )}

//             {!isLoggedIn ? (
//               <>
//                 <Button variant="outline" onClick={() => navigate('/auth')}>Login</Button>
//                 <Button variant="default" onClick={() => navigate('/auth')}>Register</Button>
//               </>
//             ) : (
//               <Button variant="default" onClick={() => navigate('/auth')}>Login</Button>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button onClick={toggleMobileMenu} className="lg:hidden text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent" aria-label="Toggle menu">
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-border animate-fade-in">
//             <nav className="flex flex-col space-y-3">
//               {/* Mobile nav buttons same as your previous code */}
//               {/* ... Copy your mobile menu buttons here ... */}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// // List item component
// const ListItem = ({ className, title, children, icon, onClick, ...props }) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <button
//           onClick={onClick}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full",
//             className
//           )}
//           {...props}
//         >
//           <div className="flex items-center gap-2">
//             {icon}
//             <div className="text-sm font-medium leading-none">{title}</div>
//           </div>
//           <p className="line-clamp-2 text-sm leading-snug hover:text-white">{children}</p>
//         </button>
//       </NavigationMenuLink>
//     </li>
//   );
// };

// export default Header;
