import React from "react";
import NavBar from "./components/NavBar";
import AppSection from "./components/AppSection";
import CardSection from "./components/CardSection";
import Footer from "./components/FooterSection";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
