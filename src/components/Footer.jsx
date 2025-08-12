import FooterLogo from "/FooterLOGO.png";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
    <img src={FooterLogo} alt="Accueil" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
