import { Link } from "react-router-dom";
import "../styles/Error.scss";
import React from "react";

function Error() {
  return (
    <div className="Error">
      <div className="Error-title">
        <h1>404</h1>
      </div>

      <div className="Error-text">
        <p className="Text">Oups! La page que <span className="line-break"></span> vous demandez n'existe pas.</p>
        <Link to="/" className="Error-Back-Home">
        Retourner sur la page d’accueil
      </Link>
      </div>

    </div>
  );
}


export default Error;
