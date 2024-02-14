import { Link } from "react-router-dom"
import "./AboutContent.css"
import About1 from "../assets/react1.jpg"
import About2 from "../assets/react2.webp"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a react front-end developer and Technical Writer. I develop beautiful, functional, and responsive websites for my clients. I also teach and write on trending technologies and topics</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About1} alt="" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={About2} alt="" className="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
