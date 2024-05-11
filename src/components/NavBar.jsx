import { Link } from "react-router-dom";
import UFClogo from "../assets/UFC_Logo.png";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="Link-Container">
        <Link className="LinkNav" to="/">
          Home
        </Link>
        <Link className="LinkNav" to="/ranking">
          Ranking
        </Link>
        <img className="logo" src={UFClogo} alt="UFC logo" />
        <Link className="LinkNav" to="/fighters">
          Fighters
        </Link>
        <Link className="LinkNav" to="/contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
