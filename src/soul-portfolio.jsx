// ════════════════════════════════════════════════════════
//  soul-portfolio.jsx  —  App Router فقط
//  الألوان    → src/styles/theme.js
//  البيانات   → src/data/servicesData.js
//  الأقسام    → src/components/
//  الصفحات    → src/pages/
// ════════════════════════════════════════════════════════

import { useState, useRef } from "react";
import theme from "./styles/theme";

import Navbar        from "./components/Navbar";
import HomePage      from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [page, setPage]                       = useState("home"); // "home" | "service" | "project"
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cartCount]                           = useState(0);
  const scrollPositionRef                     = useRef(0);

  const openService = (service) => {
    scrollPositionRef.current = window.scrollY;
    setSelectedService(service);
    setPage("service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProject = (project) => {
    scrollPositionRef.current = window.scrollY;
    setSelectedProject(project);
    setPage("project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setPage("home");
    setTimeout(() => window.scrollTo({ top: scrollPositionRef.current, behavior: "smooth" }), 50);
  };

  const goContact = () => {
    setPage("home");
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const scrollToSection = (id) => {
    if (page !== "home") {
      setPage("home");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif", background: theme.cream, minHeight: "100vh", color: theme.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${theme.cream}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${theme.greenPale}; }
        ::-webkit-scrollbar-thumb { background: ${theme.greenLight}; border-radius: 10px; }
      `}</style>

      {page === "home" && (
        <Navbar
          cartCount={cartCount}
          onLogoClick={goHome}
          onCartClick={() => scrollToSection("services")}
        />
      )}

      {page === "home" ? (
        <HomePage
          onServiceOpen={openService}
          onProjectOpen={openProject}
        />
      ) : page === "service" ? (
        <ServiceDetail
          service={selectedService}
          onBack={goHome}
          onContact={goContact}
        />
      ) : (
        <ProjectDetail
          project={selectedProject}
          onBack={goHome}
          onContact={goContact}
        />
      )}
    </div>
  );
}