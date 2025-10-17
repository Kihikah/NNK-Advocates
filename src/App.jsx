import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Stats from "./components/StatsSection";
import PartnersSection from "./components/PartnersSection";
//import BusinessProcesses from "./components/BusinessProcesses";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Stats />
      <PartnersSection />
      {/* <BusinessProcesses /> */}
    </>
  );
}

export default App;
