import React from "react";
import Header from "../components/Common/Header/header";
import LandingPageComponent from "../components/LandingPage/Intro/intro";
import Footer from "../components/Common/Footer/footer";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;