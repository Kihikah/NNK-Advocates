import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Stats from "./components/StatsSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";

// Pages
import OurBackground from "./pages/OurBackground";
import WhyWorkWithUs from "./pages/WhyWorkWithUs";
import BusinessPolicies from "./pages/BusinessPolicies";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Team />
                  <Stats />
                  <PartnersSection />
                </>
              }
            />

            {/* About pages */}
            <Route path="/about/background" element={<OurBackground />} />
            <Route path="/about/why-work-with-us" element={<WhyWorkWithUs />} />
            <Route path="/about/business-policies" element={<BusinessPolicies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
