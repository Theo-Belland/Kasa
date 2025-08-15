import { NavLink } from "react-router-dom";
import LOGO from "/LOGO.png";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img src={LOGO} alt="Logo" />
      <div className="nav-header">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
