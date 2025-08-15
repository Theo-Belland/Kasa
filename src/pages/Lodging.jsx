import{useParams} from "react-router-dom";
import Logements from "../../logement.json";
import "../styles/Lodging.scss"


function Lodging() {
  const { logementId } = useParams();
  const logement = Logements.find((item) => item.id === logementId);

  if(!logement){
    return <h2>Logement Introuvable</h2>
  }

  return (
    <div className="lodging-page">
      <img src={logement.cover} alt={logement.title} />

      <div className="lodging-header">
        <div className="lodging-info">
          <h1>{logement.title}</h1>
          <h3>{logement.location}</h3>
        </div>
        <div className="lodging-host">
          <span className="host-name">{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div className="lodging-tag">
        {logement.tags.map((tag, index) => ( 
        <span className="tag" key={index}>
          {tag}
        </span>
        ))}
      </div>


      <p>{logement.description}</p>
    </div>
  );
}

export default Lodging;
