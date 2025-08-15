import "../styles/About.scss";
import React from "react";

function AboutDropdown({title, description}){
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="dropdown-text">
            <button onClick={() => setIsOpen((prev) => !prev)}>
                <span className="dropdown-title">{title}</span>
                <img src="/Dropdvector.png" alt=""
                style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",transition: "transform 0.3s ease",
            height: "14px",
            width: "24px",
            alignSelf: "center",}}>
                </img>
            </button>
            {isOpen && <div className="dropdown-desc">{description}</div>}
        </div>
    );
}

export default AboutDropdown;