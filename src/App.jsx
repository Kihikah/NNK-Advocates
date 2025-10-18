import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Stats from "./components/StatsSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
//import BusinessProcesses from "./components/BusinessProcesses";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Team />
        <Stats />
      <PartnersSection />
      </main>
      <Footer />
      {/* <BusinessProcesses /> */}
    </div>
  );
}

export default App;
