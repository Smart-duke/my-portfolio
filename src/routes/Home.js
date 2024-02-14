import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;