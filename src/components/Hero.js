import "./HeroStyles.css"
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask" >
            <img src={introImg} alt=""  className="intro-img"/>
        </div>
        <div className="contents">
            <p>Hi, I'm a Freelancer</p>
            <h1>React Developer</h1>
            <p className="techw">and Technical Writer</p>
            <div className="buttons">
            <Link to={"/projects"} className="btn">Projects</Link>
            <Link to={"/contact"} className="btn btn-light">Contact</Link>
        </div>
        </div>
        
      
    </div>
  )
}

export default Hero
