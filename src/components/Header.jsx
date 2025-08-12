import LOGO from "/LOGO.png";
import "../styles/Header.scss"

function Header() {
    return(
        <header>
            <img src={LOGO} alt="" />
            <div className="nav-header">
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li>A Propos</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;