import "./Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-cont">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>Araromi, Lasu-Isherri Road, Lagos</p>
                        <p>Nigeria</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +234-8078749204
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        preciuzlp943@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Meee!!</h4>
                <p>This is me, Precious Longe also known as The Smart Duke. I enjoy discussing new projects and design challenges. I also love teaching people things I know and can do.</p>
                <div className="socials">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
