import WelcomePic from "/welcomepic.png";
import "../styles/Welcome.scss";
import Gallery from "../components/Gallery";

function Welcome() {
  return (
    <div className="main-content">
      <div className="welcome-Pic-Text">
        <img src={WelcomePic} alt="Accueil" />
        <div className="opacifier">
          <h1>Chez vous,<span className="line-break"></span> partout et ailleurs</h1>
        </div>
      </div>
      <div className="Gallery-card">
          <Gallery />
      </div>
      </div>
  );
}

export default Welcome;