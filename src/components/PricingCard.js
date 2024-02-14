import { Link } from "react-router-dom"
import "./PricingCard.css"
const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="hr"></span>
                <p className="price">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="hr"></span>
                <p className="price">$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="hr"></span>
                <p className="price">$ 300</p>
                <p>- 5 Days -</p>
                <p>- 8 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard