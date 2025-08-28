import React from "react";
import "../styles/Lodging.scss";

function StarRating({ rating }){
    const totalStars = 5;

    return(
        <div className="rating">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                    key={index}
                    className={starValue <= rating ? "star active" : "star"}
                    >
                    ★
                    </span>
                );
            })}
        </div>
    );
}

export default StarRating;