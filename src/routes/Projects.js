import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import PricingCard from "../components/PricingCard";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my most recent jobs" />
      <Project />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
