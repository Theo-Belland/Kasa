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

  if (!logement) return <Error />;

  const { title, location, tags, rating, host, description, equipments, pictures } = logement;

  return (
    <div className="lodging-page">
      <Slider pictures={pictures} />

      {/* HEADER */}
      <div className="lodging-header">
        <div className="lodging-info">
          <h1>{title}</h1>
          <h3>{location}</h3>
        </div>
      </div>

      {/* TAGS + RATING + HOST */}
      <div className="lodging-tag">
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="rating-host">
          {/* HOST au-dessus des étoiles sur PC */}
          <div className="lodging-host">
            <span className="host-name">{host.name}</span>
            <img src={host.picture} alt={host.name} />
          </div>

          <div className="rating">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>

      {/* DROPDOWNS */}
      <div className="DropDown-lodging">
        <AboutDropdown title="Description" description={description} />
        <AboutDropdown
          title="Equipement"
          description={
            <ul>
              {equipments.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Lodging;
