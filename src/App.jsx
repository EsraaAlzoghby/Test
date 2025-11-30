import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import QuestionsPage from "./pages/QuestionsPage.jsx";
import ProgramDetailsPage from "./pages/ProgramDetailsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/program-details/:id" element={<ProgramDetailsPage />} />

         <Route path="/create-profile" element={<CreateProfilePage />} />

           {/* Auth page - login and sign up */}
            <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
