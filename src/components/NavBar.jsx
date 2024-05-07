import { Link } from "react-router-dom";
import UFClogo from "../assets/UFC_Logo.png";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="Link-Container">
        <Link className="LinkNav" to="/" key={Link}>
          Home
        </Link>
        <Link className="LinkNav" to="/RankingPage" key={Link}>
          Ranking
        </Link>
        <img className="logo" src={UFClogo} alt="UFC logo" />
        <Link className="LinkNav" to="/FighterPage" key={Link}>
          Fighters
        </Link>
        <Link className="LinkNav" to="/ContactPage" key={Link}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
