import Logements from "../../logement.json";
import "../styles/Gallery.scss";
import { useNavigate } from "react-router-dom";

export default function Gallery(){
    const navigate = useNavigate();
    function handleCardClick(logement){
        navigate(`/logement/${logement.id}`);
    }
    return(
        <div className="gallery-content">
            {Logements.map((logement) => 
            <div 
            className="cards-gallery"
            role="button"
            tabIndex="0" 
            onClick={() => handleCardClick(logement)}
            key={logement.id}
            >
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
            </div>
        )}
        </div>
    )
}
