import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navDrop, setNavDrop] = useState(false);
  const handleDrop = () => setNavDrop(!navDrop);

  const [headerbg, setHeaderbg] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setHeaderbg(true);
    } else {
      setHeaderbg(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div className={headerbg ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>Precious Longe</h1>
      </Link>
      <ul className={navDrop ? "nav-menu navshow" : "nav-menu"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleDrop}>
        {navDrop ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
