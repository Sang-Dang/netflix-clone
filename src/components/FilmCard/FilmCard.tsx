import React, { useState } from "react";
import {
  CircleMainButton,
  CircleSecondaryButton,
} from "../common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./FilmCard.css";

interface props {
  imageURL: string;
  title: string;
}

const FilmCard: React.FC<props> = ({ imageURL, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  function handleMouseEnter() {
    setTimeout(() => setIsHovered(true), 300)
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setTimeout(() => {
      setIsHovered(false);
    }, 800);
  }

  return (
    <div
      className={isHovered ? "filmCard hovered" : "filmCard"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imageContainer">
        <img src={imageURL} alt={title} />
      </div>
      <div className="info">
        <div className="functions">
          <CircleMainButton
            handler={() => alert("HELOLO")}
            icon={<FontAwesomeIcon icon={faPlay} />}
          />
          <CircleSecondaryButton
            handler={() => alert("HECLLO")}
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
          <CircleSecondaryButton
            handler={() => alert("HECLLO")}
            icon={<FontAwesomeIcon icon={faThumbsUp} />}
          />
        </div>
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default FilmCard;
