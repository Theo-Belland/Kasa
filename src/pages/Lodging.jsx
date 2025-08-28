import { useParams } from "react-router-dom";
import Logements from "../../logement.json";
import "../styles/Lodging.scss";
import StarRating from "../components/StarRating";
import AboutDropdown from "../components/AboutDropdown";
import Slider from "../components/Slider";
import Error from "../pages/Error";

function Lodging() {
  const { logementId } = useParams();
  const logement = Logements.find((item) => item.id === logementId);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="lodging-page">
      <Slider pictures={logement.pictures} />

      <div className="lodging-header">
        {/* Infos logement */}
        <div className="lodging-info">
          <h1>{logement.title}</h1>
          <h3>{logement.location}</h3>
        </div>

        {/* Tags + Rating déplacés dans le header */}
        <div className="lodging-tag">
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
          <div className="rating">
            <StarRating rating={logement.rating} />
          </div>
        </div>

        {/* Infos hôte */}
        <div className="lodging-host">
          <span className="host-name">{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>

      {/* Dropdowns */}
      <div className="DropDown-lodging">
        <AboutDropdown
          title="Description"
          description={logement.description}
        />
        <AboutDropdown
          title="Equipement"
          description={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Lodging;
