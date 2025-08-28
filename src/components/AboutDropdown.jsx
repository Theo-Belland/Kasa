import "../styles/About.scss";
import React from "react";

function AboutDropdown({title, description}){
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="dropdown-text">
            <button onClick={() => setIsOpen((prev) => !prev)}>
                <span className="dropdown-title">{title}</span>
                <img 
                    src="/Dropdvector.png" 
                    alt="chevron" 
                    className={`drop ${isOpen ? "open" : ""}`} 
                />
            </button>
            {isOpen && <div className="dropdown-desc">{description}</div>}
        </div>
    );
}

export default AboutDropdown;